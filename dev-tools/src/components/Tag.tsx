interface Props {
    children: any
}

export default function Tag({ children }: Props) {
    return (
        // <div className="bg-gradient-to-r from-violet-500 to-indigo-500 text-white px-5 text-xs py-2 rounded-full cursor-pointer">
        <div className="border hover:text-black transition-colors text-gray-600 px-5 text-xs py-2 rounded-sm cursor-pointer">
            {children}
        </div >
    )
}