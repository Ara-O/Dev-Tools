interface Props {
    children: any,
    className?: any,
    onClick?: any,
    type?: any
}

export default function ColoredButton({ children, className, onClick, type }: Props) {
    return (
        <button onClick={onClick} type={type} className={`bg-gradient-to-r from-violet-600 to-indigo-600 px-7 text-white py-3.5 rounded-full text-xs ${className}`}>{children}</button>
    )
} 