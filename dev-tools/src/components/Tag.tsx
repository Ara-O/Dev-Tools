interface Props {
    children: any
}

export default function Tag({ children }: Props) {
    return (
        <div className="bg-pink-600 text-white px-5 text-xs py-2 rounded-full cursor-pointer">
            {children}
        </div>
    )
}