import { useState } from "react"

interface Props {
    onSearch: any
}

export default function SearchBar({ onSearch }: Props) {
    const [query, setQuery] = useState("")

    function handleSubmit(e: React.FormEvent<EventTarget>) {
        e.preventDefault()
        onSearch(query)
    }

    return (
        <form className="relative mt-6 h-12 w-[40rem]" onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className=" shadow-sm border rounded-[4px] font-light h-12 w-[40rem] pl-5 outline-cyan-200 text-sm" name="" id="" />
            <img src="/search-icon.png" onClick={() => onSearch(query)} alt="Search icon" className="w-5 absolute right-5 top-3.5 cursor-pointer" />
        </form>
    )
}