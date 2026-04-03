"use client"
import { Theme } from "@/app/data/theme"
import ServiceCard from "../service-card/ServiceCard"
import { ServiceData } from "@/app/data/service-data"
import { useState } from "react"
const Services = () => {

    const [curr, setCurr] = useState(null);

    return (
        <section className=" h-auto w-full bg-red-300 py-10 px-5 flex flex-col gap-5"
            style={{ background: Theme.bgBase }}
        >
            <h1 className="text-center text-3xl">Why<span style={{ color: Theme.primary }}> Easy Ride?</span></h1>
            <h3 className="text-center">Everything you need for a seamless rental experience</h3>

            <div className=" py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4"
            // style={{ background:  }}
            >
                {ServiceData?.map((v, i) => {
                    return <ServiceCard key={i} data={v} curr={curr} setCurr={setCurr} />
                })}
            </div>


        </section>
    )
}
export default Services