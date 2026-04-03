
import { Theme } from "@/app/data/theme"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SelectMenu(
    { items = [], setItems, placeholder = "Select options" }
        : { items: any, setItems: any, placeholder: String }) {

    return (
        <Field className="w-full"
            style={{ border: "none" }}
        >
            <Select>
                <SelectTrigger className=" py-5 rounded-full px-5 ring-0"
                    style={{ border: `1px solid ${Theme.borderDefault}` }}
                >
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent className=" border-none ">
                    <SelectGroup className="w-full">
                        {
                            items?.map((v: any, i: number) => {
                                return <SelectItem value={v} key={i}>{v}</SelectItem>
                            })
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
        </Field>
    )
}
