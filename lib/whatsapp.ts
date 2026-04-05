/* =========================
   Types
========================= */
export type BookingData = {
    vehicle: string;
    dates: string[];
    duration: string;
};

/* =========================
   Format Date (Sun, 5 Apr)
========================= */
export const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);

    return date.toLocaleDateString("en-IN", {
        weekday: "short",
        day: "numeric",
        month: "short",
    });
};

/* =========================
   Get Unique Dates
========================= */
export const getUniqueFormattedDates = (dates: string[]): string[] => {
    return Array.from(
        new Set(dates.map((d) => formatDate(d)))
    );
};

/* =========================
   Build WhatsApp Message
========================= */
export const buildWhatsAppMessage = (data: BookingData): string => {
    const { vehicle, dates, duration } = data;

    const uniqueDates = getUniqueFormattedDates(dates);

    const formattedDates = uniqueDates
        .map((d) => `• ${d}`)
        .join("\n");

    return `
Hi, I want to book a vehicle 🚗

🛵 Vehicle: ${vehicle}
⏱ Duration: ${duration}

📅 Booking Dates (${uniqueDates.length} days):
${formattedDates}
`.trim();
};

/* =========================
   Create WhatsApp URL
========================= */
export const createWhatsAppURL = (
    phone: string,
    message: string
): string => {
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

/* =========================
   Redirect to WhatsApp
========================= */
export const redirectToWhatsApp = (
    phone: string,
    data: BookingData
) => {
    const message = buildWhatsAppMessage(data);
    const url = createWhatsAppURL(phone, message);

    if (typeof window !== "undefined") {
        window.open(url, "_blank");
    }
};