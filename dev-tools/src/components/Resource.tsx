// import Tag from "./Tag"

interface Props {
    data: ResourceType
}

interface ResourceType {
    name: string,
    id: number,
    logoSrc: string,
    link: string,
    description: string,
    tags: string[]
}

export default function Resource({ data }: Props) {
    return (
        <div className="relative border border-gray-200h-auto px-8 py-5 pb-5 w-[25rem] rounded-md">
            <span className="flex items-center gap-4">
                <img src={data.logoSrc} alt={`${data.name} logo`} className="w-10 h-10" />
                <h2 className="font-medium">{data.name}</h2>
            </span>
            <h3 className="w-auto max-w-sm text-[13.5px] font-light mt-3 leading-7" title={data.description}>{data.description.slice(0, 60)}...</h3>
            <h6 className="text-[12.5px] font-light mt-3">Tags: {data.tags.join(", ")}</h6>
            <span className="flex mt-0 mb-3 gap-4 pr-4 items-center justify-end">
                {/* {
                    data.tags.map((tag) => <Tag>{tag}</Tag>)
                } */}
                <img src="/heart-icon.png" className="w-5 h-[17px] cursor-pointer" alt="Heart icon" />
                <img src="/travel-icon.png" className="w-4 h-[17px] cursor-pointer" alt="Travel icon" />
            </span>
        </div>
    )
}