import { Metadata } from "next";

export const RootMetaData: Metadata = {
    title: "Bike & Scooty Rental in Dehradun | Easy Ride Rental",
    description: "Rent bikes and scooty in Dehradun near Mussoorie, Jakhan & DIT University. Affordable daily rentals with easy booking.",
    icons: {
        icon: "/logo.png",
        shortcut: "/logo.png",
        apple: "/logo.png",
    },
    keywords: [

        "bike rental Dehradun",
        "scooty rental Dehradun",
        "self drive bike Dehradun",
        "self drive scooty Dehradun",
        "scooty hire near Mussoorie",
        "bike hire near Jakhan",
        "bike rental near DIT University Dehradun",
        "affordable bike rental Dehradun",
        "cheap scooty rental Dehradun",
        "daily bike rental Dehradun",
        "short term bike hire Dehradun",
        "bike rental for Mussoorie trip",
        "scooty rental for hill trips Dehradun",
        "best bike rental Dehradun",
        "top scooty hire in Dehradun",
        "bike rental near Landour",
        "bike rental near Bhatta Fall",
        "scooty rental near Dhanaulti",
        "bike hire near Robbers Cave",
        "self drive scooty for Mussoorie sightseeing",
        "bike rental for adventure trips Dehradun"

    ],
    authors: [{ name: "Easy Ride Rentals" }],
    openGraph: {
        title: "Bike & Scooty Rental in Dehradun | Easy Ride Rentals",
        description: "Rent bikes and scooty in Dehradun and nearby areas including Mussoorie, Landour, Bhatta Fall, Dhanaulti & Robbers Cave. Affordable daily rentals with easy booking.",
        type: "website",
        url: process.env.NEXT_PUBLIC_URL, // <-- replace with your planned domain
        siteName: "Easy Ride Rentals",
        images: [
            {
                url: "https://yourwebsite.com/og-image.jpg", // <-- replace with your actual image URL
                width: 1200,
                height: 630,
                alt: "Bike & Scooty Rental in Dehradun near Mussoorie and Landour"
            }
        ]
    },
}