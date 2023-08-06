interface Props {
    data: ResourceType
}

interface ResourceType {
    name: string,
    id: number,
    logoSrc: string,
    description: string
}

export default function Resource({ data }: Props) {
    return (
        <div className="border h-auto px-10 py-5 w-auto max-w-32">
            <span className="flex items-center gap-4">
                <img src={data.logoSrc} alt={`${data.name} logo`} className="w-10 h-10" />
                <h2 className="font-medium">{data.name}</h2>
            </span>
            <h3 className="w-96 text-sm font-light mt-3 leading-7">{data.description}</h3>
        </div>
    )
}