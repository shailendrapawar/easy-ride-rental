
import { Theme } from "@/app/data/theme"
import { ReviewsData } from "@/app/data/review-data"
import ReviewCard from "../review-card/ReviewCard"

const Reviews = () => {


    return (
        <section className="w-full h-auto flex flex-col items-center p-5 gap-5 py-20"
            style={{
                backgroundColor: Theme.bgBase
            }}
        >

            <h1 className="text-center text-2xl font-bold">What Riders <span style={{ color: Theme.primary }}>Say</span></h1>

            <h3 className="text-center " style={{ color: Theme.textDisabled }}>Real reviews from real riders</h3>

            <div className="p-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    ReviewsData?.map((v, i) => {
                        return <ReviewCard data={v} />
                    })
                }
            </div>

        </section>
    )
}
export default Reviews