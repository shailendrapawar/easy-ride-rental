import { Theme } from "@/app/data/theme"
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
        <section className="flex flex-col items- justify-center gap-3 px-6 py-5  rounded-xl"
            style={{
                background: Theme.bgBase,
                border: `1px solid ${Theme.borderDefault}`
            }}
        >

            <h3>{ratingHandler(Math.floor(data?.rating))}</h3>

            <div className="font-light text-md">
                {data?.text}
            </div>

            <h3 className="font-bold text-md"
            style={{
                color:Theme.textDisabled
            }}
            > ~ {data?.author}</h3>

        </section>
    )
}
export default ReviewCard