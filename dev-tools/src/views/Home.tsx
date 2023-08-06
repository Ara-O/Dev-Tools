import SearchBar from "../components/SearchBar"
import Tag from "../components/Tag"
import ResourceList from "../components/ResourceList"

const tags = ["Patterns", "Fonts", "Colors"]

function TitleSection() {
    return (
        <>
            <h2 className="text-2xl md:text-4xl font-bold">Find the right tool for the job 🧐</h2>
            <h4 className="font-light text-sm md:w-[45rem] mt-4 leading-7">Trying ( and failing ) to remember that one tool you bookmarked months ago? I’ve been there, and I hope this tool helps</h4>
        </>
    )
}

function TagList() {
    return (
        <span className="flex gap-3 flex-wrap mt-5">
            {
                tags.map((tag) => <Tag key={tag}>{tag}</Tag>)
            }
        </span>
    )
}

export default function Home() {
    function handleSearch(query: string) {
        console.log(query)
    }

    return (
        <>
            <div className="mt-20 px-10 md:pl-20 lg:pl-48 md:mt-28">
                <TitleSection />
                <SearchBar onSearch={handleSearch} />
                <TagList />
                <ResourceList />
            </div>
        </>
    )
}