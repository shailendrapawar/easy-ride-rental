"use client"
import { Theme } from "@/app/data/theme"
import ServiceCard from "../service-card/ServiceCard"
import { ServiceData } from "@/app/data/service-data"
import { useState } from "react"
import { motion } from "framer-motion"

const Services = () => {

    const [curr, setCurr] = useState(null);

    // 🔥 animation variants
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        show: { opacity: 1, y: 0, scale: 1 }
    }

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="h-auto w-full py-15 px-5 flex flex-col gap-5 relative"
            style={{ background: Theme.bgElevated }}
            id={"services"}
        >
            {/* Heading */}
            <h1 className="text-center font-bold  text-3xl">
                Why<span style={{ color: Theme.primary }}> Easy Ride?</span>
            </h1>

            <h3 className="text-center" style={{
                color: Theme.textDisabled
            }}>
                Everything you need for a seamless rental experience
            </h3>

            {/* Grid */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
                {ServiceData?.map((v, i) => (
                    <motion.div
                        key={v.id || i} // prefer v.id if available
                        variants={item}
                        transition={{ duration: 0.4 }}
                        whileHover={{
                            y: -6,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <ServiceCard
                            data={v}
                            curr={curr}
                            setCurr={setCurr}
                        />
                    </motion.div>
                ))}
            </motion.div>

        </motion.section>
    )
}

export default Services