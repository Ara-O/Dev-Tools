import { useState } from "react"
import ColoredButton from "../components/ColoredButton"
import Resource from "../components/Resource"

export default function AddResource() {
    const [resource, setResource] = useState({
        name: "",
        link: "",
        id: 2000,
        logoSrc: "https://bloximages.chicago2.vip.townnews.com/salemnews.com/content/tncms/assets/v3/editorial/6/03/6031581b-a92f-5a40-b2b8-9e4fa7b1a7c0/53e57c77b6681.image.jpg",
        description: "",
        tags: []
    })

    function handleChangeName(e) {
        setResource({ ...resource, name: e.target.value })
    }

    function handleResourceLink(e) {
        setResource({ ...resource, link: e.target.value })
    }

    function handleResourceTag(e) {
        console.log(e.target.value)
        // setResource({ ...resource, tags: e.target.value })
    }

    function handleResourceDescription(e) {
        setResource({ ...resource, description: e.target.value })
    }

    return (
        <>
            <div className="mt-20 px-10 md:pl-20 lg:pl-48 md:mt-28">
                <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold">Thanks for contributing 😊</h2>
                <form action="" className="mt-7">
                    <div className="flex gap-10 flex-wrap">
                        <span className="flex flex-col">
                            <label htmlFor="resource-name" className="text-[15px]">Resource name</label>
                            <input id="resource-name" value={resource.name} onChange={handleChangeName} type="text" className="pl-5 font-light text-sm mt-4 shadow-md border border-gray-100 w-72 h-11 rounded-md" />
                        </span>
                        <span className="flex flex-col">
                            <label htmlFor="resource-link" className="text-[15px]">Resource link</label>
                            <input id="resource-link" value={resource.link} onChange={handleResourceLink} type="text" className="pl-5 font-light text-sm mt-4 shadow-md border border-gray-100 w-72 h-11 rounded-md" />
                        </span>
                        <span className="flex flex-col ">
                            <label htmlFor="resource-name" className="text-[15px]">Resource tags ( Separate by commas )</label>
                            <input id="resource-name" value={resource.tags} onChange={handleResourceTag} type="text" className="pl-5 font-light text-sm mt-4 shadow-md border border-gray-100 w-72 h-11 rounded-md" />
                        </span>
                    </div>
                    <span className="flex flex-col mt-7">
                        <label htmlFor="resource-description" className="text-[15px]">Resource description</label>
                        <textarea id="resource-description" value={resource.description} onChange={handleResourceDescription} className="pl-5 font-light text-sm pt-3 mt-4 w-[38.5rem] shadow-md border border-gray-100 h-28 rounded-md"></textarea>
                    </span>
                    <h5 className="mt-6 mb-5 text-[15px]">Resource Preview</h5>
                    <Resource data={resource}></Resource>
                    <br />
                    <ColoredButton className="mt-4 text-sm hover:hue-rotate-15 transition-all duration-500">Add Resource</ColoredButton>
                </form>
            </div>
        </>
    )
}