import SearchBar from "../components/SearchBar"
import Tag from "../components/Tag"

const tags = ["Patterns", "Fonts", "Colors"]

function TitleSection() {
    return (
        <>
            <h2 className="text-4xl font-bold">Find the right tool for the job 🧐</h2>
            <h4 className="font-light w-[45rem] mt-5 leading-7">Trying ( and failing ) to remember that one tool you bookmarked months ago? I’ve been there, and I hope this tool helps</h4>
        </>
    )
}

function TagList() {
    return (
        <span className="flex gap-6 mt-5">
            {
                tags.map((tag) => <Tag key={tag}>{tag}</Tag>)
            }
        </span>
    )
}

export default function Home() {
    return (
        <>
            <div className="pl-48 mt-28">
                <TitleSection></TitleSection>
                <SearchBar onSearch={(query: string) => { console.log(query) }} />
                <TagList></TagList>
            </div>
        </>
    )
}