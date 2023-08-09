import Resource from "./Resource";
import { ResourceType } from "../types/types";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ResourceList() {
    const [resources, setResources] = useState<ResourceType[]>([])
    useEffect(() => {
        async function getResources() {
            let res = await axios.get("http://localhost:8080/api/get-resources")
            console.log(res)
            setResources(res.data)
        }

        getResources()
    }, [])

    return (
        <>
            <h3 className="mt-6 mb-6 font-light text-sm">Search results for ...</h3>
            <div className="flex gap-6 flex-wrap">{
                resources.map((resource) => <Resource key={resource._id} data={resource} />)
            }
            </div>
        </>
    )
}