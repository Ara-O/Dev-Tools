interface Props {
    children: any
}

export default function ColoredButton({ children }: Props) {
    return (
        <button className="bg-gradient-to-r from-violet-600 to-indigo-600 px-7 text-white py-3.5 rounded-full text-xs">{children}</button>
    )
} 