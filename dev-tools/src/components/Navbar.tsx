import { Link } from "react-router-dom"
import ColoredLine from "./ColoredLine"
import ColoredButton from "./ColoredButton"
export default function Navbar() {
    return (
        <>
            <ColoredLine />
            <nav className="mt-8 w-full flex items-center gap-20 pr-20 justify-end">
                <Link to="/" className="text-sm nav-item">HTML</Link>
                <Link to="/" className="text-sm nav-item">CSS</Link>
                <Link to="/" className="text-sm nav-item">Javascript</Link>
                <Link to="/" className="text-sm nav-item">Misc</Link>
                <Link to="/" className="text-sm hover:hue-rotate-15 transition-all duration-500"><ColoredButton>Add a tool here</ColoredButton> </Link>
            </nav>
        </>
    )
}