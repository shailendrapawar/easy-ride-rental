"use client"

import { Theme } from "@/app/data/theme"
import { ReviewsData } from "@/app/data/review-data"
import ReviewCard from "../review-card/ReviewCard"
import { motion } from "framer-motion"

const Reviews = () => {

    // animations
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.1
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
            transition={{ duration: 0.6 }}
            className="w-full h-auto flex flex-col items-center p-5 gap-5 py-20 relative"
            style={{
                backgroundColor: Theme.bgOverlay
            }}
        >

            {/* Heading */}
            <h1 className="text-center text-2xl font-bold">
                What Riders <span style={{ color: Theme.primary }}>Say</span>
            </h1>

            <h3
                className="text-center"
                style={{ color: Theme.textDisabled }}
            >
                Real reviews from real riders
            </h3>

            {/* Reviews Grid */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="p-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
                {
                    ReviewsData?.map((v, i) => (
                        <motion.div
                            key={i} // prefer v.id if exists
                            variants={item}
                            transition={{ duration: 0.4 }}
                            whileHover={{
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <ReviewCard data={v} />
                        </motion.div>
                    ))
                }
            </motion.div>

        </motion.section>
    )
}

export default Reviews