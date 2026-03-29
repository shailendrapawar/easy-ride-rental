"use client"
import { Theme } from "@/app/data/theme"
import { CalendarCheck, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"


const Navbar = () => {

    const [navItems, setNavItems] = useState([
        { title: "Vehicles" },
        { title: "Features" },
        { title: "Testimonials" },
        { title: "Contact" }
    ])

    const [toggleMobileNav, setToggleMobileNav] = useState(false)

    return (
        <header className="h-18  flex justify-between items-center  relative z-50"
            style={{
                background: Theme.bgSurface,
                border: `1px solid ${Theme.borderDefault}`
            }}
        >
            <span className="font-bold text-2xl ml-10" >Easy<span style={{ color: Theme.primary }}>Ride</span></span>

            <nav className="web-nav gap-6 lg:gap-8 hidden md:flex items-center mr-10">
                {navItems?.map((v, i) => {
                    return <span key={i} className="min-w-20 flex justify-center ">{v?.title}</span>
                })}
                <Button className="h-10 w-30 rounded-full hover:opacity-95 cursor-pointer" style={{ background: Theme.primary, color: "black" }}>Book Now</Button>
            </nav>


            {/* mobile-nav */}
            {toggleMobileNav && (<nav className="mobile-nav h-[calc(100vh-64px)] bg-inherit w-full opacity-80 absolute top-full md:hidden flex justify-center items-center px-10">
                <section className=" h-[50%] w-full max-w-60 flex flex-col items-center justify-evenly ">
                    {navItems?.map((v, i) => {
                        return <span
                            className="w-full flex justify-center items-center h-10 rounded-full cursor-pointer opacity-85 hover:opacity-100"
                            onClick={() => setToggleMobileNav(false)}
                        >{v.title}</span>
                    })}
                    <Button
                        className="w-full max-w-60 h-10 rounded-full cursor-pointer active:scale-95 transition-all ease-in-out gap-2"
                        style={{ background: Theme.primary, color: "black" }}
                        onClick={() => setToggleMobileNav(false)}
                    >
                        Book your ride <CalendarCheck size={16} className="text-black" />
                    </Button>

                </section>
            </nav>)}

            <div className="md:hidden mr-5 cursor-pointer active:scale-95 trnasition-all ease-in-out"
                onClick={
                    (e) => {
                        setToggleMobileNav(prev => !prev)
                    }}
            >
                {toggleMobileNav == true ? (<X size={30} />) : (<Menu size={30} />)}

            </div>
        </header>
    )
}
export default Navbar