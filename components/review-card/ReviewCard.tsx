import { Theme } from "@/app/data/theme"
import { MoveUpRight } from 'lucide-react';
const ReviewCard = ({ data, index }: any) => {

    const ratingHandler = (rating: number) => {
        let result = "";
        switch (rating) {
            case 5: {
                result = "⭐⭐⭐⭐⭐"
                break;
            }
            case 4: {
                result = "⭐⭐⭐⭐"
                break;
            }
            case 3: {
                result = "⭐⭐⭐"
                break
            }
            case 2: {
                result = "⭐⭐"
                break
            }
            default: {
                result = "⭐"
            }
        }
        return result
    }
    return (
        <section className="flex flex-col h-full justify-center gap-3 px-6 py-5  rounded-xl cursor-pointer"

            title={`See original review by ${data?.author}`}
            style={{
                background: Theme.bgBase,
                border: `1px solid ${Theme.borderDefault}`
            }}
            onClick={() => {
                if (data?.link) {
                    window.open(data?.link, "_blank");
                }
            }}
        >

            <div className="w-auto flex justify-between">
                <span>{ratingHandler(Math.floor(data?.rating))}</span>
                <MoveUpRight className="size-4" />
            </div>

            <div className="font-light text-md">
                {data?.text}
            </div>

            <h3 className="font-light text-md"
                style={{
                    color: Theme.textDisabled
                }}
            > ~ {data?.author}</h3>

        </section>
    )
}
export default ReviewCard