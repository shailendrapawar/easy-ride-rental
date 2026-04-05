import { Theme } from "@/app/data/theme"
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { MapPin, Phone } from "lucide-react"
const Footer = () => {
    const description = "Premium two-wheeler rentals for city explorers. Affordable, safe, and always ready to roll."
    const contactNumber = [
        "7456920792",
        "7456920792",
        "7456920792"
    ]
    return (
        <section className="relative w-full h-auto "
            style={{
                background: Theme.bgElevated
            }}
        >

            <div className="w-full h-auto  grid grid-cols-1 sm:grid-cols-3 px-10 py-15 gap-8">
                <div className=" flex flex-col gap-2">
                    <h1 className="text-2xl">Easy<span style={{ color: Theme.primary }}>Ride</span></h1>

                    <p className="pr-1" style={{ color: Theme.textDisabled }}>{description}</p>

                    <div className="flex gap-2 mt-1">
                        <span className="p-2 rounded-full"
                            style={{
                                // color: Theme.textDisabled, 
                                background: Theme.bgSubtle
                            }}
                        ><FaInstagram className="size-5 cursor-pointer" style={{ color: Theme.textDisabled }} /></span>

                        <span className="p-2 rounded-full"
                            style={{
                                color: Theme.textDisabled,
                                background: Theme.bgSubtle
                            }}
                        ><FiFacebook className="size-5 cursor-pointer" style={{ color: Theme.textDisabled }} /></span>
                    </div>
                </div>


                <div className="  flex-col flex gap-3">
                    <h1 className="font-bold" style={{ color: Theme.textPrimary }}>Quick Links</h1>

                    <div className="flex flex-col "
                        style={{ color: Theme.textDisabled }}
                    >
                        <span> Vehicles </span>
                        <span>Pricing</span>
                        <span>FAQ</span>
                        <span>About Us</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h1 className="font-bold" style={{ color: Theme.textPrimary }}>Contact</h1>

                    <div className="flex flex-col gap-2"
                        style={{ color: Theme.textDisabled }}
                    >
                        <span className="flex items-center gap-2"
                            style={{ color: Theme.primary }}
                        ><Phone className="size-4" /> 7456920792</span>
                        <span className="flex items-center gap-2"
                            style={{ color: Theme.primary }}
                        ><Phone className="size-4" /> 7456920792</span>
                        <span className="flex gap-2"><MapPin className="size-6" /> <span className="text-sm">MG Road, Central Hub,Bengaluru 560001</span></span>
                    </div>
                </div>
            </div>

            <p>© 2026 Easy Ride Rentals. All rights reserved.</p>

        </section >
    )
}
export default Footer