"use client"

import * as React from "react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Field } from "@/components/ui/field"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { Theme } from "@/app/data/theme"
export function DatePicker() {
    const date = new Date()
    const [dates, setDate] = React.useState([date, date])


    return (
        <Field className="mx-auto w-ful"
            style={{
                background: Theme.bgBase
            }}
        >
            <Popover

            >
                <PopoverTrigger asChild
                    className="h-12 rounded-full px-5 focus:ring-amber-400 focus:ring-2"
                    style={{
                        border: `1px solid ${Theme.borderDefault}`,
                        background: Theme.bgSurface
                    }}
                >
                    <Button
                        variant="outline"
                        id="date-picker-simple"
                        className="justify-start font-normal"
                    >
                        {date ? format(date, "PPP") : <span style={{
                            color: Theme.textDisabled
                        }}>DD - MM - YY</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0" align="start"

                >
                    <Calendar
                        mode="multiple"

                        selected={dates}
                        // onSelect={(e) => {
                        //     dates.push(e)
                        // }}
                        defaultMonth={new Date}
                    />
                </PopoverContent>
            </Popover>
        </Field>
    )
}
