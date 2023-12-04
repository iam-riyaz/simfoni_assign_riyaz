import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { FilterDropdown } from "./FilterDropdown";

export const FilterBox = () => {

    const [isOpen, setIsOpen]= useState(false)

    const handleClick=()=>{
        setIsOpen(!isOpen)
    }

  return (
    <>
      <div className="w-full h-9 mx-2">
         {/* sort button */}
         <div onClick={handleClick} className="w-full bg-white h-9 border border-gray-200 rounded-lg px-2 flex justify-between items-center cursor-pointer">
            <p>Filter</p>
             <ChevronDownIcon style={{strokeWidth:"4"}} className="h-3"/>
        </div>

        {/* dropdown component */}
        {isOpen?<div className=" ">
            <FilterDropdown/>
        </div>:null}
             


      </div>
    </>
  );
};
