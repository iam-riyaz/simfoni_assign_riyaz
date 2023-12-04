
import { ChevronDownIcon } from "@heroicons/react/24/outline" 
import React, { useEffect, useRef, useState } from "react"
import { SortDropdown } from "./SortDropdown"


export const SortBox: React.FC=()=>{
    const [isOpen, setIsOpen]= useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClick=()=>{
        setIsOpen(!isOpen)
    }

    useEffect(()=>{

   
    const handleClickOutside = (event:MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
  
      const handleDocumentClick = () => {
      // Attach the event listener when the component mounts
      document.addEventListener('click', handleClickOutside);
      }
      
      handleDocumentClick()
  
      // Detach the event listener when the component unmounts
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    },[])

    return(
        <>
       <div ref={dropdownRef} style={{zIndex:"100"}} className="w-10/12 h-9 ml-2">
        {/* sort button */}
        <div onClick={handleClick} className="w-full bg-white h-9 border border-gray-200 rounded-lg px-2  flex justify-between items-center  cursor-pointer">
            <p>Sort By</p>
             <ChevronDownIcon style={{strokeWidth:"4"}} className="h-3"/>
        </div>

        {/* dropdown component */}
        {isOpen?<div className="">
            <SortDropdown/>
        </div>:null}
        </div>
        </>
    )
}