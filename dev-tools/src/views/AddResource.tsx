import { useState } from "react"
import ColoredButton from "../components/ColoredButton"

export default function AddResource() {
    const [name, setName] = useState("")
    const [link, setLink] = useState("")
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState("")
    return (
        <>
            <div className="mt-20 px-10 md:pl-20 lg:pl-48 md:mt-28">
                <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold">Thanks for contributing 😊</h2>
                <form action="" className="mt-7">
                    <div className="flex gap-10 flex-wrap">
                        <span className="flex flex-col">
                            <label htmlFor="resource-name" className="text-sm">Resource name</label>
                            <input id="resource-name" value={name} onChange={(e) => setName(e.target.value)} type="text" className="pl-5 font-light text-sm mt-4 shadow-md border border-gray-100 w-72 h-11 rounded-md" />
                        </span>
                        <span className="flex flex-col">
                            <label htmlFor="resource-link" className="text-sm">Resource link</label>
                            <input id="resource-link" value={link} onChange={(e) => setLink(e.target.value)} type="text" className="pl-5 font-light text-sm mt-4 shadow-md border border-gray-100 w-72 h-11 rounded-md" />
                        </span>
                    </div>
                    <span className="flex flex-col mt-7">
                        <label htmlFor="resource-description" className="text-sm">Resource description</label>
                        <textarea id="resource-description" value={description} onChange={(e) => setDescription(e.target.value)} className="pl-5 font-light text-sm pt-3 mt-4 w-[38.5rem] shadow-md border border-gray-100 h-28 rounded-md"></textarea>
                    </span>
                    <span className="flex flex-col mt-7">
                        <label htmlFor="resource-name" className="text-sm">Resource tags ( Separate by commas )</label>
                        <input id="resource-name" value={tags} onChange={(e) => setTags(e.target.value)} type="text" className="pl-5 font-light text-sm mt-4 shadow-md border border-gray-100 w-72 h-11 rounded-md" />
                    </span>
                    <br />
                    <ColoredButton className="mt-4 text-sm hover:hue-rotate-15 transition-all duration-500">Add Resource</ColoredButton>
                </form>
            </div>
        </>
    )
}