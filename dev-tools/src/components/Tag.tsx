interface Props {
    children: any
}

export default function Tag({ children }: Props) {
    return (
        <div className="bg-gradient-to-r from-violet-500 to-indigo-500 text-white px-5 text-xs py-2 rounded-full cursor-pointer">
            {children}
        </div>
    )
}