"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Theme } from "@/app/data/theme"
import { Button } from "../ui/button"
import { MoveRight, Zap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { CompanyData } from "@/app/data/company-data"
import { scrollToSection } from "@/lib/scroller"
const Landing = () => {

    const { images, vehicleTypes, prices } = CompanyData


    const [curr, setCurr] = useState(1)

    useEffect(() => {
        const t1 = setInterval(() => {
            setCurr(prev => (prev + 1) % images?.length)
        }, 5000);
        return () => clearInterval(t1)
    }, [])

    return (
        <section className=" h-auto min-h-[calc(100vh-80px)] flex justify-between items-center px-8 sm:px-15 md:px-20 relative">

            {/* Background image with smooth crossfade */}
            <AnimatePresence mode="wait" >
                <motion.div
                    key={curr}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0 z-5 "
                >
                    <Image
                        src={images[curr]?.src}
                        fill
                        className="object-cover "
                        alt={images[curr]?.alt || "landing page images"}
                    />
                </motion.div>

            </AnimatePresence>

            {/* Gradient overlay */}
            <motion.div
                className="absolute inset-0 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                style={{
                    background: "linear-gradient(to right, rgba(0,0,0,0.95), rgba(0,0,0,0.8), rgba(0,0,0,0.5))"
                }}
            />

            {/* Content */}
            <section className="z-10 flex flex-col relative  h-auto min-h-[50%]">
                <motion.div
                    className="px-2 py-1 max-w-80 h-9 rounded-full cursor-pointer flex items-center justify-center gap-2 relative overflow-hidden"
                    style={{
                        border: `0.5px solid ${Theme.primaryBorder}`,
                        background: Theme.primary + `20`,
                        color: Theme.primary
                    }}
                    // --- Entry animation ---
                    initial={{ opacity: 0, y: -20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, ease: "backOut" }}

                    // --- Loop after entry ---
                    whileHover={{ scale: 1.05 }}
                >
                    {/* Shimmer */}
                    <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                            background: `linear-gradient(90deg, transparent 0%, ${Theme.primary}40 50%, transparent 100%)`,
                        }}
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1, delay: 0.8 }}
                    />

                    {/* Zap icon */}
                    <motion.div
                        initial={{ rotate: -30, scale: 0 }}
                        animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.2, 1] }}
                        transition={{
                            rotate: { duration: 1.5, repeat: Infinity, repeatDelay: 1.5, delay: 1 },
                            scale: { duration: 1.5, repeat: Infinity, repeatDelay: 1.5, delay: 1 },
                        }}
                    >
                        <Zap size={15} />
                    </motion.div>

                    <span className="text-sm relative z-10">Now delivering at your doorstep... </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    className="text-3xl sm:text-5xl font-bold mt-10"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                    Need a{" "}
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={vehicleTypes[curr]}
                            initial={{ opacity: 0, y: -40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="inline-block"
                            style={{ color: Theme.primary }}
                        >
                            {vehicleTypes[curr]}
                        </motion.span>
                    </AnimatePresence>
                    <br />
                    <span>for Hire?</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    className="mt-2 sm:text-lg"
                    style={{ color: Theme.textMuted }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                >
                    Explore the city on two wheels. Affordable, fast,<br />
                    and hassle-free rentals starting at just
                </motion.p>

                {/* Price */}
                <motion.div
                    className="mt-10 flex items-end gap-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7, ease: "backOut" }}
                >
                    {/* Shimmer Wrapper */}
                    <div className="relative overflow-hidden inline-block">

                        {/* Price */}
                        <b
                            className="text-4xl sm:text-5xl relative z-10"
                            style={{ color: Theme.primary }}
                        >
                            {prices.unit}{prices.base}
                        </b>

                        {/* Shimmer layer */}
                        <motion.div
                            className="absolute inset-0"
                            style={{
                                background: `linear-gradient(
          120deg,
          transparent 20%,
          ${Theme.primary}40 50%,
          transparent 80%
        )`
                            }}
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                repeatDelay: 1.5
                            }}
                        />
                    </div>

                    {/* /hr */}
                    <motion.span
                        className="text-lg"
                        style={{ color: Theme.textMuted }}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 }}
                    >
                        /hr
                    </motion.span>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    className="h-10 sm:h-12 mt-10 flex gap-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
                >
                    <Button
                        className="h-full w-30 sm:w-40 rounded-full cursor-pointer"
                        style={{ border: `2px solid ${Theme.textMuted}` }}
                        onClick={() => {
                            scrollToSection("vehicles-section")
                        }}
                    >
                        View Vehicles
                    </Button>

                    <Button
                        className="h-full w-30 sm:w-40 rounded-full cursor-pointer transition-all ease-in-out text-yellow-400 hover:bg-yellow-400 hover:text-black shadow-amber-400"
                        style={{ border: `2px solid ${Theme.primary}`, background: Theme.primary, color: Theme.textDark }}
                        onClick={() => {
                            scrollToSection("booking-section")
                        }}
                    >
                        Book Now <MoveRight />
                    </Button>
                </motion.div>


                {/* Stats */}
                <motion.section
                    className="h-auto w-full mt-15 sm:mt-10 flex md: justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
                >
                    {[
                        { value: "100 +", label: "Rides Completed" },
                        { value: "50 +", label: "Happy Riders" },
                        { value: "4.8", label: "Avg Rating" },
                    ].map((stat, i) => (
                        <motion.span
                            key={i}
                            className="flex flex-col h-25 items-center pt-3 text-center w-[30%] rounded-md text-xs sm:text-md gap-2"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 + i * 0.15 }}
                            style={{ background: Theme.bgBase }}
                        >
                            <b className="text-lg" style={{ color: Theme.primary }}>{stat.value}</b>
                            <span className="md:text-md" style={{ color: Theme.textMuted }}>{stat.label}</span>
                        </motion.span>
                    ))}
                </motion.section>

            </section>
        </section>
    )
}

export default Landing