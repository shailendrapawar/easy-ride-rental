"use client"
import { Theme } from "@/app/data/theme"
import { useEffect, useState } from "react"
import VehicleCard from "../vehicle-card/VehicleCard"
import { AppVehicles } from "@/app/data/vehicle-data"
import { motion, AnimatePresence } from "framer-motion"

const Fleet = () => {

    const [curr, setCurr] = useState("All")
    const [vehicles, setVehicles] = useState(AppVehicles)

    useEffect(() => {
        if (curr == "All") {
            setVehicles(AppVehicles)
        } else {
            const v = AppVehicles.filter((v) => v.category == curr.toLowerCase())
            setVehicles(v)
        }
    }, [curr])

    return (
        <motion.section
            className="w-full h-auto py-15 px-5 relative"
            style={{ background: Theme.bgBase }}

            // Section fade in
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            id={"vehicles-section"}
        >

            {/* Heading */}
            <motion.h1
                className="text-3xl font-bold text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
            >
                Our <span style={{ color: Theme.primary }}>Fleet</span>
            </motion.h1>

            <motion.p
                className="text-center md:text-lg mt-4"
                style={{ color: Theme.textDisabled }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
            >
                Choose from our curated collection of premium two-wheelers
            </motion.p>

            {/* Filters */}
            <motion.nav
                className="w-full py-2 justify-center flex gap-3 mt-5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
            >
                {["All", "Bike", "Scooty"].map((v, i) => (
                    <motion.span
                        key={i}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-6 py-2 rounded-full cursor-pointer"
                        style={
                            curr == v
                                ? { background: Theme.primary, color: "black" }
                                : { background: Theme.bgSubtle, color: Theme.textSecondary }
                        }
                        onClick={() => setCurr(v)}
                    >
                        {v}
                    </motion.span>
                ))}
            </motion.nav>

            {/* Vehicle Grid */}
            <motion.div
                className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5"
                layout // smooth layout shift
            >
                <AnimatePresence mode="popLayout">
                    {vehicles.map((v, i) => (
                        <motion.div
                            key={v?.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                        >
                            <VehicleCard data={v} index={i} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

        </motion.section>
    )
}

export default Fleet