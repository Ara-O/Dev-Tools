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
        <form className="relative mt-6 h-auto w-full md:w-[40rem] shadow-sm border" onSubmit={handleSubmit}>
            <input placeholder="Search" type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="rounded-[4px] font-light h-12 w-[82%] md:w-[39.5rem] pl-5 outline-none text-sm" name="" id="" />
            <img src="/search-icon.png" onClick={() => onSearch(query)} alt="Search icon" className="w-5 absolute right-5 top-3.5 cursor-pointer" />
        </form>
    )
}