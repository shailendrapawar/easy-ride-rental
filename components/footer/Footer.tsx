"use client"

import { Theme } from "@/app/data/theme"
import { FaInstagram } from "react-icons/fa"
import { FiFacebook } from "react-icons/fi"
import { MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { CompanyData } from "@/app/data/company-data"

const Footer = () => {

    const description = "Premium two-wheeler rentals for city explorers. Affordable, safe, and always ready to roll."
    const address = "MG Road, Central Hub, Bengaluru 560001"

    // animations
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-auto"
            style={{
                background: Theme.bgBase
            }}
        >

            {/* Grid */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full grid grid-cols-1 sm:grid-cols-3 px-10 py-15 gap-8"
            >

                {/* Brand */}
                <motion.div variants={item} className="flex flex-col gap-2">
                    <h1 className=" font-bold text-2xl lg:text-3xl ">
                        Easy<span style={{ color: Theme.primary }}>Ride</span>
                    </h1>

                    <p className="pr-1 text-sm lg:text-lg" style={{ color: Theme.textDisabled }}>
                        {description}
                    </p>

                    <div className="flex gap-2 mt-1">
                        <motion.span
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 rounded-full"
                            style={{ background: Theme.bgSubtle }}
                        >
                            <FaInstagram className="size-5 cursor-pointer" style={{ color: Theme.textDisabled }} />
                        </motion.span>

                        <motion.span
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 rounded-full"
                            style={{ background: Theme.bgSubtle }}
                        >
                            <FiFacebook className="size-5 cursor-pointer" style={{ color: Theme.textDisabled }} />
                        </motion.span>
                    </div>
                </motion.div>

                {/* Links */}
                <motion.div variants={item} className="flex flex-col gap-3">
                    <h1 className="font-bold  text-sm lg:text-lg" style={{ color: Theme.textPrimary }}>
                        Quick Links
                    </h1>

                    <div className="flex flex-col text-sm gap-1" style={{ color: Theme.textDisabled }}>
                        {["Vehicles", "Pricing", "FAQ", "About Us"].map((text, i) => (
                            <motion.span
                                key={i}
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                                className="cursor-pointer"
                            >
                                {text}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* Contact */}
                <motion.div variants={item} className="flex flex-col gap-2">
                    <h1 className="font-bold" style={{ color: Theme.textPrimary }}>
                        Contact
                    </h1>

                    <div className="flex flex-col gap-2 text-sm" style={{ color: Theme.textDisabled }}>
                        {CompanyData.contact.map((v, i) => (
                            <motion.span
                                key={i}
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-2"
                                style={{ color: Theme.primary }}
                            >
                                <Phone className="size-4" />
                                {v?.contact} - ( {v?.name?.split(" ")[0]} )
                            </motion.span>
                        ))}

                        <motion.span
                            whileHover={{ x: 5 }}
                            className="flex gap-2"
                        >
                            <MapPin className="size-6" />
                            <span className="text-sm">
                                {CompanyData?.address?.line1},<br />
                                {" " + CompanyData?.address?.line2}<br />
                                {CompanyData?.address?.city?.toUpperCase()}

                            </span>
                        </motion.span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Bottom */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center pb-5"
                style={{ color: Theme.textDisabled }}
            >
                © 2026 Easy Ride Rentals. All rights reserved.
            </motion.p>

        </motion.section>
    )
}

export default Footer