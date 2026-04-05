import { Theme } from "@/app/data/theme"
const ServiceCard = ({ data, curr, setCurr }: { data: any, curr: any, setCurr: any }) => {
    return (
        <div className={`w-full h-full flex flex-col items-center gap-4 py-5 px-5 justify-center rounded-xl cursor-pointer `}
            style={{ background: Theme.bgBase, border: `1px solid ${Theme.bgSubtle}` }}
            onMouseEnter={() => setCurr(data)}
            onMouseLeave={() => setCurr(null)}
        >
            <span className={`h-14 w-14 rounded-3xl flex justify-center items-center`}
                style={curr?.id == data?.id ? { background: Theme.primary + `40` } : { background: Theme.primary + `20` }}
            >
                {data?.icon}
            </span>

            <h1 className="text-center text-lg font-bold">{data?.title}</h1>

            <h3 className="text-center" style={{ color: Theme.textDisabled }}>{data?.description}</h3>

        </div>
    )
}
export default ServiceCard