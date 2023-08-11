import { useState } from "react"
import ColoredButton from "../components/ColoredButton"
import Resource from "../components/Resource"
import axios from "axios"
import { ResourceType } from "../types/types"
export default function AddResource() {
    const [progressMessage, setProgressMessage] = useState<string>("")
    const [resource, setResource] = useState<ResourceType>({
        name: "Coolors",
        link: "https://test.com",
        _id: "2000",
        logoSrc: "https://bloximages.chicago2.vip.townnews.com/salemnews.com/content/tncms/assets/v3/editorial/6/03/6031581b-a92f-5a40-b2b8-9e4fa7b1a7c0/53e57c77b6681.image.jpg",
        description: "Resource description...",
        tags: "test, test2",
        likes: 0
    })

    async function addResource(e) {
        e.preventDefault()
        try {
            setProgressMessage("Currently adding resource...")
            await axios.post(import.meta.env.VITE_API_ENDPOINT + "api/add-resource", resource)
            setProgressMessage("Resource added :D")

            setResource({
                name: "Coolors",
                link: "https://test.com",
                _id: "2000",
                logoSrc: "https://bloximages.chicago2.vip.townnews.com/salemnews.com/content/tncms/assets/v3/editorial/6/03/6031581b-a92f-5a40-b2b8-9e4fa7b1a7c0/53e57c77b6681.image.jpg",
                description: "Resource description...",
                tags: "test, test2",
                likes: 0
            })

        } catch (err: any) {
            console.log(err)
            alert(err.response.data)
            setProgressMessage("")
        }
    }

    function handleForm(e) {
        setResource({ ...resource, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="!mt-12 px-10 md:pl-20 lg:pl-48 md:mt-28">
                <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold">Thanks For Contributing 😊</h2>
                <form className="mt-14" onSubmit={addResource}>
                    <div className="flex gap-10 flex-wrap">
                        <span className="flex flex-col">
                            <label htmlFor="resource-name" className="text-[14px] ">Resource name</label>
                            <input required id="resource-name" name="name" value={resource.name} onChange={handleForm} type="text" className="px-5 box-border font-light text-sm mt-4 shadow-md border border-gray-100 w-72 h-11 rounded-md" />
                        </span>
                        <span className="flex flex-col">
                            <label htmlFor="resource-link" className="text-[14px] ">Resource link</label>
                            <input id="resource-link" name="link" value={resource.link} onChange={handleForm} type="text" className="px-5 box-border font-light text-sm mt-4 shadow-md border border-gray-100 w-72 h-11 rounded-md" />
                        </span>
                        <span className="flex flex-col ">
                            <label htmlFor="resource-tags" className="text-[14px] ">Resource tags ( Separate by commas )</label>
                            <input id="resource-tags" name="tags" value={resource.tags} onChange={handleForm} type="text" className="px-5 box-border font-light text-sm mt-4 shadow-md border border-gray-100 w-72 h-11 rounded-md" />
                        </span>
                    </div>
                    <div className="flex mt-7 flex-wrap gap-10">
                        <span className="flex flex-col">
                            <label htmlFor="resource-description" className="text-[14px] ">Resource description</label>
                            <textarea id="resource-description" name="description" value={resource.description} onChange={handleForm} className="px-5 box-border font-light text-sm pt-3 mt-4 w-auto flex-wrap max-w-[38.5rem] shadow-md border border-gray-100 h-28 min-h-[44px] rounded-md"></textarea>
                        </span>
                        <span className="flex flex-col">
                            <label htmlFor="resource-logo-src" className="text-[14px] ">Resource logo</label>
                            <input required id="resource-logo-src" name="logoSrc" value={resource.logoSrc} onChange={handleForm} type="text" className="px-5 box-border font-light text-sm mt-4 shadow-md border border-gray-100 w-72 h-11 rounded-md" />
                        </span>
                    </div>
                    <h5 className="mt-6 mb-5 text-[14px] ">Resource Preview</h5>
                    <Resource hasLikesDisabled={true} data={resource}></Resource>
                    <br />
                    <ColoredButton type="submit" className="mt-4 text-sm hover:hue-rotate-15 transition-all duration-500">Add Resource</ColoredButton>
                </form>
                <h5 className="mt-5 font-light text-sm">
                    {progressMessage}
                </h5>
            </div>
        </>
    )
}