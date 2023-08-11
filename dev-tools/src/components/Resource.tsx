// import Tag from "./Tag"
import { useState } from "react"
import { ResourceType } from "../types/types"
import unknownImage from "/question-mark-icon.png"
import axios from "axios"

interface Props {
    data: ResourceType,
    hasLikesDisabled?: boolean
}

export default function Resource({ data, hasLikesDisabled = false }: Props) {
    const [isLiked, setIsLiked] = useState(false)
    const [likes, setLikes] = useState(data.likes)
    async function likeResource() {
        if (hasLikesDisabled)
            return

        //Using this variable as a synchronous way to keep track of the 
        //likes variable since setLikes is async
        const updatedLikes = isLiked ? likes - 1 : likes + 1;
        setLikes(updatedLikes)
        setIsLiked((is_liked) => !is_liked)

        try {
            let res = await axios.post("http://localhost:8080/api/update-likes", {
                _id: data._id,
                likes: updatedLikes
            })

            console.log(res)
        } catch (err: any) {
            alert(err.response.data)
        }

    }

    // http://localhost:8080/api/update-likes



    return (
        <div className="relative border  border-gray-200h-auto px-8 py-5 pb-5 max-w-[25rem] min-w-[20rem] w-auto rounded-md">
            <span className="flex items-center gap-4">
                <img src={data.logoSrc || unknownImage} onError={() => document.querySelector('.logo-image')?.setAttribute('src', unknownImage)} alt={`${data.name} logo`} className="w-10 h-10 object-contain logo-image" />
                <h2 className="font-medium">{data.name}</h2>
            </span>
            <h3 className="w-auto max-w-sm text-[13.5px] font-light mt-3 leading-7" title={data.description}>{data.description.slice(0, 60)}...</h3>
            <h6 className="text-[12.5px] font-light mt-3">Tags: {data.tags}</h6>
            <span className="flex mt-0 mb-3 gap-4 pr-4 items-center justify-end">

                {!isLiked ? <svg className="cursor-pointer" onClick={likeResource} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e01b24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" ><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg> : <svg onClick={likeResource} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#e01b24" stroke="#e01b24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
                }
                <h4 className="font-light ml-[-5px]">{likes}</h4>
                <a href={data.link} target="_blank"> <img src="/travel-icon.png" className="w-4 h-[17px] cursor-pointer" alt="Travel icon" /></a>
            </span>
        </div>
    )
}