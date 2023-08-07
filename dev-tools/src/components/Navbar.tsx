import { Link } from "react-router-dom"
import ColoredLine from "./ColoredLine"
import ColoredButton from "./ColoredButton"
export default function Navbar() {
    return (
        <>
            <ColoredLine />
            <nav className="mt-8 w-full items-center gap-20 pr-20 justify-end hidden md:flex">
                <Link to="/" className="text-sm nav-item">Home</Link>
                <Link to="/add-resource" className="text-sm hover:hue-rotate-15 transition-all duration-500"><ColoredButton>Add a tool here</ColoredButton> </Link>
            </nav>
        </>
    )
}