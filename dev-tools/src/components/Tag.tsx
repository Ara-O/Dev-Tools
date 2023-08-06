interface Props {
    children: any
}

export default function Tag({ children }: Props) {
    return (
        <div className="bg-indigo-600 text-white px-5 text-[13.5px] py-2 rounded-full">
            {children}
        </div>
    )
}