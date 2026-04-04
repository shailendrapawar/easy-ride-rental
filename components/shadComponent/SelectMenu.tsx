
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
        <Field className="w-full rounded-full "
            style={{ border: `3px  solid ${Theme.primary}`, }}
        >
            <Select>
                <SelectTrigger className=" py-6  px-5 ring-0 border-none focus:ring-0"
                    style={{ color: Theme.textPrimary }}
                >
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent className=" border-none focus:ring-0 ">
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
