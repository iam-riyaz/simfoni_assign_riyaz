
import { ChevronDownIcon } from "@heroicons/react/24/outline" 
import { useState } from "react"
import { SortDropdown } from "./SortDropdown"


export const SortBox=()=>{
    const [isOpen, setIsOpen]= useState(false)

    const handleClick=()=>{
        setIsOpen(!isOpen)
    }
    return(
        <>
       <div className="w-10/12 h-9 mx-2">
        {/* sort button */}
        <div onClick={handleClick} className="w-full bg-white h-9 border border-gray-200 rounded-lg px-2  flex justify-between items-center  cursor-pointer">
            <p>Sort By</p>
             <ChevronDownIcon style={{strokeWidth:"4"}} className="h-3"/>
        </div>

        {/* dropdown component */}
        {isOpen?<div className=" ">
            <SortDropdown/>
        </div>:null}
        </div>
        </>
    )
}