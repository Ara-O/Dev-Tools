import { useState } from "react"
import ColoredButton from "../components/ColoredButton"
import Resource from "../components/Resource"
import axios from "axios"
export default function AddResource() {
    const [resource, setResource] = useState({
        name: "Coolors",
        link: "https://test.com",
        id: 2000,
        logoSrc: "https://bloximages.chicago2.vip.townnews.com/salemnews.com/content/tncms/assets/v3/editorial/6/03/6031581b-a92f-5a40-b2b8-9e4fa7b1a7c0/53e57c77b6681.image.jpg",
        description: "Resource description...",
        tags: "test, test2"
    })

    async function addResource(e) {
        e.preventDefault()
        const res = await axios.post("http://localhost:8080/api/add-resource", resource)
        console.log(res)
        setResource({
            name: "Coolors",
            link: "https://test.com",
            id: 2000,
            logoSrc: "https://bloximages.chicago2.vip.townnews.com/salemnews.com/content/tncms/assets/v3/editorial/6/03/6031581b-a92f-5a40-b2b8-9e4fa7b1a7c0/53e57c77b6681.image.jpg",
            description: "Resource description...",
            tags: "test, test2"
        })
    }

    function handleForm(e) {
        setResource({ ...resource, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="!mt-12 px-10 md:pl-20 lg:pl-48 md:mt-28">
                <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold">Thanks For Contributing 😊</h2>
                <form className="mt-8">
                    <div className="flex gap-10 flex-wrap">
                        <span className="flex flex-col">
                            <label htmlFor="resource-name" className="text-[15px]">Resource name</label>
                            <input id="resource-name" name="name" value={resource.name} onChange={handleForm} type="text" className="px-5 box-border font-light text-sm mt-4 shadow-md border border-gray-100 w-72 h-11 rounded-md" />
                        </span>
                        <span className="flex flex-col">
                            <label htmlFor="resource-link" className="text-[15px]">Resource link</label>
                            <input id="resource-link" name="link" value={resource.link} onChange={handleForm} type="text" className="px-5 box-border font-light text-sm mt-4 shadow-md border border-gray-100 w-72 h-11 rounded-md" />
                        </span>
                        <span className="flex flex-col ">
                            <label htmlFor="resource-tags" className="text-[15px]">Resource tags ( Separate by commas )</label>
                            <input id="resource-tags" name="tags" value={resource.tags} onChange={handleForm} type="text" className="px-5 box-border font-light text-sm mt-4 shadow-md border border-gray-100 w-72 h-11 rounded-md" />
                        </span>
                    </div>
                    <div className="flex mt-7 flex-wrap gap-10">
                        <span className="flex flex-col">
                            <label htmlFor="resource-description" className="text-[15px]">Resource description</label>
                            <textarea id="resource-description" name="description" value={resource.description} onChange={handleForm} className="px-5 box-border font-light text-sm pt-3 mt-4 w-auto flex-wrap max-w-[38.5rem] shadow-md border border-gray-100 h-28 rounded-md"></textarea>
                        </span>
                        <span className="flex flex-col">
                            <label htmlFor="resource-logo-src" className="text-[15px]">Resource logo</label>
                            <input id="resource-logo-src" name="logoSrc" value={resource.logoSrc} onChange={handleForm} type="text" className="px-5 box-border font-light text-sm mt-4 shadow-md border border-gray-100 w-72 h-11 rounded-md" />
                        </span>
                    </div>
                    <h5 className="mt-6 mb-5 text-[15px]">Resource Preview</h5>
                    <Resource data={resource}></Resource>
                    <br />
                    <ColoredButton onClick={addResource} type="submit" className="mt-4 text-sm hover:hue-rotate-15 transition-all duration-500">Add Resource</ColoredButton>
                </form>
            </div>
        </>
    )
}