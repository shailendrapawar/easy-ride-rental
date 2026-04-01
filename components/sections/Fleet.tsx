"use client"
import { Theme } from "@/app/data/theme"
import { useEffect, useState } from "react"
import VehicleCard from "../vehicle-card/VehicleCard"
import { AppVehicles } from "@/app/data/vehicle-data"
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
        <section className="w-full h-auto py-10 px-5"
            style={{ background: Theme.bgBase }}
        >
            <h1 className="text-3xl font-bold text-center">Our <span style={{ color: Theme.primary }}>Fleet</span></h1>
            <p className="text-center text-lg mt-4" style={{ color: Theme.textDisabled }} >Choose from our curated collection of premium two-wheelrs</p>

            <nav className="w-full py-2 justify-center flex gap-3 mt-5">
                {
                    ["All", "Bike", "Scooty"]?.map((v, i) => {

                        return <span key={i}
                            className={`px-6 py-2 rounded-full cursor-pointer hover:opacity-90`}
                            style={curr == v ? { background: Theme.primary, color: "black" } : { background: Theme.bgSubtle, color: Theme.textSecondary }}
                            onClick={(e) => setCurr(v)}
                        >{v}</span>
                    })
                }
            </nav>

            <div className=" grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-auto gap-5 mt-5 relative">
                {
                    vehicles?.map((v, i) => {
                        return <VehicleCard key={i} data={v} index={i} />
                    })
                }
            </div>


        </section>
    )
}
export default Fleet