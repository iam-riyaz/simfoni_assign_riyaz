import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

export const SearchBox=()=>{
    return(
        <>
      <div className="flex justify-between  w-full ">
        <div className="flex justify-between border w-11/12  border-gray-200 rounded-lg">
            <input type="text" className="h-9 px-2  h-full w-full rounded-l-lg " placeholder="Search" />
            <div className="py-2 text-white font-bold px-8 bg-teal-600 rounded-r-lg cursor-pointer">
                <MagnifyingGlassIcon className="h-5 "/>
            </div>
        </div>
        <div className="flex items-center">
        <button className="h-9 border-2 border-teal-600 px-3 rounded-lg text-teal-600 ">
            Upload
        </button> 
        </div>
        </div>
        </>
    )
}