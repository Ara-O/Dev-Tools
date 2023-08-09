// import Tag from "./Tag"
import { ResourceType } from "../types/types"
import unknownImage from "/question-mark-icon.png"
interface Props {
    data: ResourceType
}

export default function Resource({ data }: Props) {
    return (
        <div className="relative border border-gray-200h-auto px-8 py-5 pb-5 max-w-[25rem] min-w-[20rem] w-auto rounded-md">
            <span className="flex items-center gap-4">
                <img src={data.logoSrc || unknownImage} onError={() => document.querySelector('.logo-image')?.setAttribute('src', unknownImage)} alt={`${data.name} logo`} className="w-10 h-10 object-contain logo-image" />
                <h2 className="font-medium">{data.name}</h2>
            </span>
            <h3 className="w-auto max-w-sm text-[13.5px] font-light mt-3 leading-7" title={data.description}>{data.description.slice(0, 60)}...</h3>
            <h6 className="text-[12.5px] font-light mt-3">Tags: {data.tags}</h6>
            <span className="flex mt-0 mb-3 gap-4 pr-4 items-center justify-end">
                <img src="/heart-icon.png" className="w-5 h-[17px] cursor-pointer" alt="Heart icon" />
                <img src="/travel-icon.png" className="w-4 h-[17px] cursor-pointer" alt="Travel icon" />
            </span>
        </div>
    )
}