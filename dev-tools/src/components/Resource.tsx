// import Tag from "./Tag"
import { useState } from "react"
import { ResourceType } from "../types/types"
import unknownImage from "/question-mark-icon-2.png"
import axios from "axios"

interface Props {
    data: ResourceType,
    hasLikesDisabled?: boolean
}


export default function Resource({ data, hasLikesDisabled = false }: Props) {

    const [isLiked, setIsLiked] = useState(() => {
        let isAlreadyLiked = localStorage.getItem("likedResources")?.includes(data._id)
        if (isAlreadyLiked) {
            return true
        } else {
            return false
        }
    })
    const [likes, setLikes] = useState(data.likes)


    async function likeResource() {
        if (hasLikesDisabled)
            return

        let currentLikedResources = localStorage.getItem("likedResources")
        if (!currentLikedResources) {
            currentLikedResources = ""
        }
        //Using this variable as a synchronous way to keep track of the 
        //likes variable since setLikes is async
        const updatedLikes = isLiked ? likes - 1 : likes + 1;
        setLikes(updatedLikes)
        setIsLiked((is_liked) => !is_liked)

        try {
            await axios.post(import.meta.env.VITE_API_ENDPOINT + "api/update-likes", {
                _id: data._id,
                likes: updatedLikes
            })

            if (currentLikedResources.includes(data._id)) {
                currentLikedResources = currentLikedResources.replace(data._id + "||", "")
            } else {
                currentLikedResources += data._id + "||"
            }

            localStorage.setItem("likedResources", currentLikedResources)
        } catch (err: any) {
            alert(err.response.data)
        }

    }



    return (
        <div className="relative border  border-gray-200 h-48 px-8 py-5 pb-5 max-w-[25rem] w-[24rem] rounded-md">
            <span className="flex items-center gap-4">
                {/* @ts-expect-error */}
                {data.logoSrc && <img src={data.logoSrc} alt={`${data.name} logo`} onError={(e) => e.target.src = unknownImage} className=" max-h-[28px] w-auto h-10 object-contain logo-image" />}
                <h2 className="font-medium">{data.name}</h2>
            </span>
            <h3 className="w-auto max-w-sm text-[13.5px] font-light mt-3 leading-7" title={data.description}>{data.description.slice(0, 60)}...</h3>
            <h6 className="text-[12.5px] font-light mt-3">Tags: {data.tags}</h6>
            <br />
            <span className="flex absolute bottom-7 right-8  gap-4 pr-0 items-center justify-end">
                <svg
                    onClick={likeResource}
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill={isLiked ? '#e01b24' : 'none'}  // Conditional fill color
                    stroke="#e01b24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cursor-pointer"
                >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
                <h4 className="font-light ml-[-5px]">{likes}</h4>
                <a href={data.link} target="_blank"> <img src="/travel-icon.png" className="w-4 h-[17px] cursor-pointer" alt="Travel icon" /></a>
            </span>
        </div>
    )
}