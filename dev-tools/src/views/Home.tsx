import SearchBar from "../components/SearchBar"
import Tag from "../components/Tag"
import ResourceList from "../components/ResourceList"
import Footer from "../components/Footer"
import { useState } from "react"
import axios from "axios"
import { ResourceType } from "../types/types";

const tags = ["Go", "Patterns", "Fonts", "Colors"]

function TitleSection() {
    return (
        <>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">Find the right tool for the job <span className="pl-4"></span> 🎉</h2>
            <h4 className="font-normal text-sm md:w-[45rem] mt-5 leading-7">Trying ( and failing ) to remember that one tool you bookmarked months ago? I’ve been there, and I hope this tool helps</h4>
        </>
    )
}

function TagList({ handleSearchFromTag }) {
    return (
        <span className="flex gap-3 flex-wrap mt-5">
            {
                tags.map((tag) => <div onClick={() => handleSearchFromTag(tag)}><Tag key={tag}>{tag}</Tag></div>)
            }
        </span>
    )
}

export default function Home() {
    const [resources, setResources] = useState<ResourceType[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    async function handleSearch(query: string) {
        setIsLoading(true)
        let res = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/api/search-resource`, {
            query
        })
        setIsLoading(false)
        console.log(res.data)
        if (!res.data) {
            res.data = []
        }
        setResources(res.data)
    }

    return (
        <>
            <div className="mt-20 px-10 pl-10 ml:pl-20 xl:pl-48 md:mt-28 min-h-screen">
                <TitleSection />
                <SearchBar onSearch={handleSearch} />
                <TagList handleSearchFromTag={handleSearch} />
                <h4 className={`font-light mt-5 hidden text-sm ${isLoading && "block"}`}>Loading...</h4>
                <div className={`${isLoading && "hidden"}`}>
                    <ResourceList resources={resources} setResources={setResources} />
                </div>

                {/* <div className="hidden 2xl:block absolute h-48 rounded-full bg-gradient-to-r bg- from-fuchsia-600 animate-spin duration-[6000] blur-xl to-indigo-600 top-56 right-80 w-48"></div> */}
            </div>
            <Footer />
        </>
    )
}