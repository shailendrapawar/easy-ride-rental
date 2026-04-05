"use client"
import { Theme } from "@/app/data/theme"
import { CalendarCheck, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {

    const [navItems] = useState([
        { title: "Vehicles" },
        { title: "Features" },
        { title: "Testimonials" },
        { title: "Contact" }
    ])

    const [toggleMobileNav, setToggleMobileNav] = useState(false)

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="h-18 flex justify-between items-center z-50 sticky top-0"
            style={{
                background: Theme.bgSurface,
                border: `1px solid ${Theme.borderDefault}`
            }}
        >
            {/* Logo */}
            <span className="font-bold text-2xl ml-10">
                Easy<span style={{ color: Theme.primary }}>Ride</span>
            </span>

            {/* Desktop Nav */}
            <nav className="web-nav gap-6 lg:gap-8 hidden md:flex items-center mr-10">
                {navItems.map((v, i) => (
                    <motion.span
                        key={i}
                        whileHover={{ y: -2 }}
                        className="min-w-20 flex justify-center cursor-pointer"
                    >
                        {v.title}
                    </motion.span>
                ))}

                <Button
                    className="h-10 w-30 rounded-full cursor-pointer transition-all"
                    style={{ background: Theme.primary, color: "black" }}
                >
                    Book Now
                </Button>
            </nav>

            {/* Mobile Nav */}
            <AnimatePresence>
                {toggleMobileNav && (
                    <motion.nav
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mobile-nav h-[calc(100vh-64px)] w-full absolute top-full md:hidden flex justify-center items-center px-10"
                        style={{
                            background: Theme.bgSurface,
                            opacity: 0.98
                        }}
                    >
                        <section className="h-[50%] w-full max-w-60 flex flex-col items-center justify-evenly">
                            {navItems.map((v, i) => (
                                <motion.span
                                    key={i}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full flex justify-center items-center h-10 rounded-full cursor-pointer opacity-85 hover:opacity-100"
                                    onClick={() => setToggleMobileNav(false)}
                                >
                                    {v.title}
                                </motion.span>
                            ))}

                            <Button
                                className="w-full max-w-60 h-10 rounded-full cursor-pointer active:scale-95 transition-all gap-2"
                                style={{ background: Theme.primary, color: "black" }}
                                onClick={() => setToggleMobileNav(false)}
                            >
                                Book your ride <CalendarCheck size={16} />
                            </Button>
                        </section>
                    </motion.nav>
                )}
            </AnimatePresence>

            {/* Mobile Toggle */}
            <motion.div
                className="md:hidden mr-5 cursor-pointer"
                whileTap={{ scale: 0.9 }}
                onClick={() => setToggleMobileNav(prev => !prev)}
            >
                {toggleMobileNav ? <X size={30} /> : <Menu size={30} />}
            </motion.div>

        </motion.header>
    )
}

export default Navbar