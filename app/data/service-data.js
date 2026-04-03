import { Clock4, MapPin, Shield, Smartphone } from "lucide-react";
import { Theme } from "@/app/data/theme"
export const ServiceData = [
    {
        id: 1,
        icon: <Clock4 style={{ color: Theme.primary }} />,
        title: "Hourly & Daily Rentals",
        description: "Flexible plans that fit your schedule. Rent by the hour or save more with daily packages."
    },
    {
        id: 2,
        icon: <MapPin style={{ color: Theme.primary }} />,
        title: "Pick & Drop Service",
        description: "Free pick-up and drop within 2 km of our stations. Convenience at your doorstep."
    },
    {
        id: 3,
        icon: <Shield style={{ color: Theme.primary }} />,
        title: "Helmets & Safety Gear",
        description: "Every rental includes a complimentary helmet and safety essentials. Ride worry-free."
    },
    {
        id: 4,
        icon: <Smartphone style={{ color: Theme.primary }} />,
        title: "Easy Online Booking",
        description: "Book in under 60 seconds. Choose your ride, pick a time, and you're set."
    }
]