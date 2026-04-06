"use client"
import { Theme } from "@/app/data/theme"
import { Button } from "../ui/button"
import { Motorbike, Clock4, CalendarDays } from "lucide-react"
import { SelectMenu } from "../shadComponent/SelectMenu"
import { useState } from "react"
import { DatePicker } from "../shadComponent/DatePicker"
import { motion } from "framer-motion"
import { AppVehicles } from "@/app/data/vehicle-data"
import { redirectToWhatsApp } from "@/lib/whatsapp"

import { CompanyData } from "@/app/data/company-data"

const Booking = () => {

    const [vehiclesList] = useState(AppVehicles.map((v) => v.model))
    const [hourList] = useState(["1 hour", "2 hours", "4 hours", "6 hours"])

    const [formData, setFormData] = useState({
        vehicle: "",
        dates: [""],
        duration: ""
    })

    const handleFormData = (key: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            [key]: value
        }))
    }

    const handleRequestBooking = () => {
        redirectToWhatsApp(CompanyData.bookingRequest.primaryContact.number, formData)
    }

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-full h-auto flex flex-col items-center px-6 gap-5 py-20 relative"
            style={{ background: Theme.bgBase }}
            id={"booking-section"}
        >

            {/* Heading */}
            <h1 className="text-center text-2xl font-bold">
                Book in <span style={{ color: Theme.primary }}>60 Seconds</span>
            </h1>

            <h3 className="text-center" style={{ color: Theme.textSecondary }}>
                Simple, fast, no hassle
            </h3>

            {/* Card */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col py-10 px-10 gap-6 rounded-3xl max-w-200 mt-10"
                style={{
                    background: Theme.bgSurface,
                    border: `1px solid ${Theme.borderDefault}`,
                    backdropFilter: "blur(10px)", // ✅ reduced blur
                    boxShadow: `0 10px 30px ${Theme.primary}40` // ✅ lighter shadow
                }}
            >

                {/* Inputs Grid */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8">

                    {/* Vehicle */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="gap-2 flex flex-col"
                    >
                        <span className="flex gap-3" style={{ color: Theme.textDisabled }}>
                            <Motorbike className="size-5" style={{ color: Theme.primary }} />
                            Vehicle
                        </span>
                        <SelectMenu data={vehiclesList} setItems={handleFormData} sourceKey={"vehicle"} placeholder={"Select vehicle"} />
                    </motion.div>

                    {/* Duration */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="gap-2 flex flex-col"
                    >
                        <span className="flex gap-3" style={{ color: Theme.textDisabled }}>
                            <Clock4 className="size-5" style={{ color: Theme.primary }} />
                            Duration
                        </span>
                        <SelectMenu data={hourList} setItems={handleFormData} sourceKey={"duration"} placeholder={"Select duration"} />
                    </motion.div>

                    {/* Date */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="gap-2 flex flex-col"
                    >
                        <span className="flex gap-3" style={{ color: Theme.textDisabled }}>
                            <CalendarDays
                                className="size-5"
                                style={{ color: Theme.primary }}
                            />
                            Select your dates
                        </span>
                        <DatePicker setItems={handleFormData} />
                    </motion.div>

                </div>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    onClick={handleRequestBooking}
                >
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        className="relative overflow-hidden rounded-full"
                    >
                        {/* Button */}
                        <Button
                            className="h-10 cursor-pointer font-bold  w-full relative "
                            style={{
                                background: Theme.primary,
                                color: Theme.textDark
                            }}
                        >
                            Request Booking
                        </Button>

                        {/* Smooth lightweight shimmer */}
                        <motion.div
                            className="absolute top-0 left-0 h-full w-full "
                            style={{
                                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)"
                            }}
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1, delay: 0.8 }}
                        />

                    </motion.div>
                </motion.div>

            </motion.section>
        </motion.section>
    )
}

export default Booking
