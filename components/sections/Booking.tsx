"use client"
import { Theme } from "@/app/data/theme"
import { Button } from "../ui/button"
import { Motorbike, Clock4, CalendarDays } from "lucide-react"
import { SelectMenu } from "../shadComponent/SelectMenu"
import { useState } from "react"
import { DatePicker } from "../shadComponent/DatePicker"
import { motion } from "framer-motion"
import { AppVehicles } from "@/app/data/vehicle-data"

const Booking = () => {

    const [vehiclesList] = useState(AppVehicles.map((v) => v.model))
    const [hourList] = useState(["1 hour", "2 hours", "4 hours", "6 hours"])

    const [data, setData] = useState({
        vehicle: "",
        startDate: "",
        endDate: ""
    })

    // 🔥 animations
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.12
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 25 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="w-full h-auto flex flex-col items-center px-6 gap-5 py-20 relative"
            style={{ background: Theme.bgSurface }}
        >
            {/* Heading */}
            <h1 className="text-center text-2xl font-bold">
                Book in <span style={{ color: Theme.primary }}>60 Seconds</span>
            </h1>

            <h3 className="text-center" style={{ color: Theme.textDisabled }}>
                Simple, fast, no hassle
            </h3>

            {/* Main Card */}
            <motion.section
                initial={{ opacity: 0, scale: 0.96, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="main-card w-full flex flex-col py-10 px-10 gap-6 rounded-4xl max-w-200 mt-10"
                style={{
                    background: Theme.bgBase,
                    border: `1px solid ${Theme.borderDefault}`,
                    backdropFilter: "blur(50px)",
                    boxShadow: `1px 1px 50px ${Theme.primary + 60}`
                }}
            >

                {/* Inputs */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8"
                >
                    {/* Vehicle */}
                    <motion.div variants={item} className="gap-2 flex flex-col">
                        <span className="flex gap-3" style={{ color: Theme.textDisabled }}>
                            <Motorbike className="size-5" style={{ color: Theme.primary }} />
                            Vehicle
                        </span>
                        <SelectMenu items={vehiclesList} setItems={() => { }} placeholder={"Select vehicle"} />
                    </motion.div>

                    {/* Duration */}
                    <motion.div variants={item} className="gap-2 flex flex-col">
                        <span className="flex gap-3" style={{ color: Theme.textDisabled }}>
                            <Clock4 className="size-5" style={{ color: Theme.primary }} />
                            Duration
                        </span>
                        <SelectMenu items={hourList} setItems={() => { }} placeholder={"Select duration"} />
                    </motion.div>

                    {/* Date */}
                    <motion.div variants={item} className="gap-2 flex flex-col">
                        <span className="flex gap-3" style={{ color: Theme.textDisabled }}>
                            <CalendarDays className="size-5" style={{ color: Theme.primary }} />
                            Select your dates
                        </span>
                        <DatePicker />
                    </motion.div>
                </motion.div>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <Button
                            className="h-10 cursor-pointer font-bold mt-3 w-full"
                            style={{
                                background: Theme.primary,
                                color: Theme.textDark,
                                backdropFilter: "blur(50px)",
                                boxShadow: `1px 1px 25px ${Theme.primary + 80}`
                            }}
                        >
                            Confirm Booking
                        </Button>
                    </motion.div>
                </motion.div>

            </motion.section>
        </motion.section>
    )
}

export default Booking