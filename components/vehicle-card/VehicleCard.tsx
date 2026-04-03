"use client";

import Image from "next/image";
import { Theme } from "@/app/data/theme";
import { Button } from "../ui/button";
import { Fuel, Gauge } from "lucide-react";
import { motion } from "framer-motion";

const VehicleCard = ({ data, index }: { data: any; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: index * 0.08,
                duration: 0.4,
                ease: "easeOut",
            }}
            whileHover={{ y: -6 }}
            className="aspect-4/5 flex flex-col rounded-xl w-full relative overflow-hidden group"
            style={{
                background: Theme.bgSurface,
                border: `1px solid ${Theme.borderDefault}`,
            }}
        >
            {/* IMAGE */}
            <div className="relative w-full h-[70%] overflow-hidden">
                <motion.div
                    className="h-full w-full"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <Image
                        className="h-full w-full object-cover object-center"
                        alt="vehicle-img"
                        src={data.images[0]}
                        fill
                    />
                </motion.div>

                {/* PRICE BADGE */}
                <motion.span
                    className="absolute right-4 top-4 py-1 px-4 rounded-full text-white font-semibold bg-red-500/90 backdrop-blur-md overflow-hidden shadow-lg"
                    initial={{ opacity: 0, scale: 0.85, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        delay: index * 0.08 + 0.2,
                        duration: 0.3,
                    }}
                >
                    ₹{data?.price?.hourly}/hr

                    {/* Subtle shimmer (less aggressive) */}
                    <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        animate={{ x: ["-120%", "120%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 2.5,
                            ease: "linear",
                            delay: index * 0.2,
                        }}
                    />
                </motion.span>

                {/* Soft gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-80 pointer-events-none" />
            </div>

            {/* CONTENT */}
            <motion.section
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: index * 0.08 + 0.3,
                    duration: 0.3,
                }}
                className="relative h-[30%] flex flex-col justify-center px-4 py-2 gap-2"
            >
                {/* TITLE */}
                <div className="h-[30%] relative flex items-center">
                    <span className="flex gap-2 items-center">
                        <h1 className="font-bold text-lg">{data?.model}</h1>
                        <h3
                            className="text-sm"
                            style={{ color: Theme.textSecondary }}
                        >
                            {data?.brand}
                        </h3>
                    </span>

                    <span className=" absolute right-0">
                        <b
                            className="text-lg font-bold"
                            style={{ color: Theme.primary }}
                        >
                            ₹{data?.price?.daily}
                        </b>
                        /day
                    </span>
                </div>

                {/* META */}
                <div
                    className="h-[20%] flex gap-5 text-sm"
                    style={{ color: Theme.textDisabled }}
                >
                    <span className="gap-1 flex items-center">
                        <Gauge className="size-4" />
                        {data?.meta?.mileage} {data?.meta?.mileageUnit}
                    </span>
                    <span className="gap-1 flex items-center">
                        <Fuel className="size-4" />
                        {data?.meta?.variant}
                    </span>
                </div>

                {/* BUTTON */}
                <motion.div whileTap={{ scale: 0.96 }} whileHover={{ scale: 1.02 }}
                    className="h-[30%]"
                >
                    <Button
                        className="h-full w-full rounded-full cursor-pointer font-medium tracking-wide"
                        style={{ background: Theme.primary, color: "black" }}
                    >
                        Book this ride
                    </Button>
                </motion.div>
            </motion.section>
        </motion.div>
    );
};

export default VehicleCard;