import Resource from "./Resource";
import { ResourceType } from "../types/types";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";

export default function ResourceList() {
    const [resources, setResources] = useState<ResourceType[]>([])
    const [pageCount, setPageCount] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState<number>(1)


    useEffect(() => {
        const abortController = new AbortController
        async function getResources() {
            let res = await axios.get(import.meta.env.VITE_API_ENDPOINT + "api/get-resources", { signal: abortController.signal })
            console.log(res)
            if (res.data?.resources)
                setResources(res.data.resources)
            setPageCount(res.data.num_of_pages)

        }

        getResources()

        return function () {
            if (abortController) abortController.abort()
        }
    }, [])

    const initialRender = useRef(true)

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false
            return
        }

        const abortController = new AbortController()

        async function fetchResources() {
            let res = await axios.get(import.meta.env.VITE_API_ENDPOINT + "api/get-resources", {
                signal: abortController.signal, params: {
                    page: currentPage
                }
            })
            console.log(res)
            if (res.data?.resources)
                setResources(res.data.resources)
            setPageCount(res.data.num_of_pages)

            console.log(res)

        }

        fetchResources()

        return function () {
            abortController.abort()
        }
    }, [currentPage])

    return (
        <>
            <h3 className="mt-6 mb-6 font-light text-sm">Search results for ...</h3>
            <div className="flex gap-6 flex-wrap">{
                resources.map((resource) => <Resource key={resource._id} data={resource} />)
            }
            </div>
            <br />
            <Pagination pages={pageCount} changePage={setCurrentPage} currentPage={currentPage} />
        </>
    )
}