import Resource from "./Resource";
import { ResourceType } from "../types/types";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";

export default function ResourceList() {
    const [resources, setResources] = useState<ResourceType[]>([])
    const [pageCount, setPageCount] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    //Runs once on mount, so taking advantage of that 
    //then whenever current page changes, runs again
    useEffect(() => {
        const abortController = new AbortController()

        async function fetchResources() {
            setIsLoading(true)
            let res = await axios.get(import.meta.env.VITE_API_ENDPOINT + "api/get-resources", {
                signal: abortController.signal, params: {
                    page: currentPage
                }
            })

            setIsLoading(false)
            console.log(res)
            if (res.data?.resources)
                setResources(res.data.resources)
            setPageCount(res.data.num_of_pages)
        }

        fetchResources()

        return function () {
            abortController.abort()
        }
    }, [currentPage])

    return (
        <>{
            isLoading ? <h4 className="font-light mt-5 text-sm">Loading...</h4> : <>
                <h3 className="mt-6 mb-6 font-light text-sm">Search results for ...</h3>
                <div className="flex gap-6 flex-wrap">{
                    resources.map((resource) => <Resource key={resource._id} data={resource} />)
                }
                </div>
                <br />
                <Pagination pages={pageCount} changePage={setCurrentPage} currentPage={currentPage} />
            </>
        }
        </>
    )
}