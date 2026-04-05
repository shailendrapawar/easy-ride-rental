
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
    { data = [], setItems, sourceKey, placeholder = "Select options" }:
        { data: string[], setItems: any, sourceKey: string, placeholder: String }) {

    return (
        <Field className="w-full rounded-full "
            style={{
                // border: `3px  solid ${Theme.borderDefault}`,
                background: Theme.bgSubtle
            }}
        >
            <Select

                onValueChange={(v) => {
                    setItems(sourceKey, v)
                }}
            >
                <SelectTrigger className=" py-6  px-5 ring-0 border-none focus:ring-0"
                    style={{ color: Theme.textPrimary }}
                    onChange={(e) => {
                        console.log("changes")
                    }}
                >
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent className=" border-none focus:ring-0 cursor-pointer"
                >
                    <SelectGroup className={"w-full"}
                    >
                        {
                            data?.map((v: any, i: number) => {
                                return <SelectItem value={v} key={i}
                                    onClick={() => {
                                    }}
                                >{v}</SelectItem>
                            })
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
        </Field>
    )
}
