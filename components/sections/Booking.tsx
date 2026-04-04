"use client"
import { Theme } from "@/app/data/theme"
import { Button } from "../ui/button"
import { Motorbike, Clock4, CalendarDays } from "lucide-react"
import { SelectMenu } from "../shadComponent/SelectMenu"
import { useState } from "react"
import { RangeCalendar } from "../shadComponent/RangeCalendar"
import { DatePicker } from "../shadComponent/DatePicker"
const Booking = () => {

    const [vehiclesList] = useState(["TVS- access", "HONDA- activa", "RE- hunter"])
    const [hourList] = useState(["1 hour", "2 hours", "4 hours", "6 hours"])

    const [data, setData] = useState({
        vehicle: "",
        startDate: "",
        endDate: ""
    })

    return (
        <section className="w-full h-auto flex flex-col items-center px-6 gap-5 py-20"
            style={{ background: Theme.bgSurface }}
        >
            <h1 className="text-center text-2xl font-bold">Book in <span style={{ color: Theme.primary }}>60 Seconds</span></h1>

            <h3 className="text-center " style={{ color: Theme.textDisabled }}>Simple, fast, no hassle</h3>

            <section className="main-card w-full flex flex-col py-10 px-10 gap-6 rounded-4xl max-w-200 mt-10"
                style={{
                    background: Theme.bgBase,
                    border: `1px solid ${Theme.borderDefault}`,
                    backdropFilter: "blur(50px)",
                    boxShadow: `1px 1px 50px ${Theme.primary + 60}`
                }}

            >

                <div className=" w-full grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div className=" gap-2 h-auto flex flex-col ">
                        <span className="flex gap-3" style={{ color: Theme.textDisabled }}><b><Motorbike className="size-5" style={{ color: Theme.primary }} /></b>Vehicle</span>
                        <SelectMenu items={vehiclesList} setItems={() => { }} placeholder={"Select vehicle"} />

                    </div>

                    <div className=" gap-2 h-auto flex flex-col ">
                        <span className="flex gap-3" style={{ color: Theme.textDisabled }}><b><Clock4 className="size-5" style={{ color: Theme.primary }} /></b>Duration</span>
                        <SelectMenu items={hourList} setItems={() => { }} placeholder={"Select duration"} />

                    </div>

                    <div className=" gap-2 h-auto flex flex-col">
                        <span className="flex gap-3" style={{ color: Theme.textDisabled }}><b><CalendarDays className="size-5" style={{ color: Theme.primary }} /></b>Select your dates</span>
                        <DatePicker />
                    </div>

                </div>

                <Button className="h-10 cursor-pointer font-bold mt-3"
                    style={{
                        background: Theme.primary,
                        color: Theme.textDark,
                        backdropFilter: "blur(50px)",
                        boxShadow: `1px 1px 25px ${Theme.primary + 80}`
                    }}
                >
                    Confirm Booking
                </Button>

            </section>
        </section>
    )
}
export default Booking