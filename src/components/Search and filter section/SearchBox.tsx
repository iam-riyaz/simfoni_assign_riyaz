import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

export const SearchBox=()=>{
    return(
        <>
      <div className="flex justify-between  w-full ">
        <div className="flex justify-between border lg:w-11/12 w-full  border-gray-200 rounded-lg">
            <input type="text" className="h-9 px-2  h-full w-full focus:ring-none rounded-l-lg " placeholder="Search" />
            <div className=" py-2 text-white lg:font-bold lg:px-8 px-2 bg-teal-600 rounded-r-lg cursor-pointer">
                <MagnifyingGlassIcon className="h-5 "/>
            </div>
        </div>
        <div className="hidden lg:flex items-center">
        <button className="ml-6  lg:h-9 lg:border-2 lg:bg-white lg:border-teal-600 lg:px-3 lg:rounded-lg lg:text-teal-600 ">
            Upload
        </button> 
        </div>
        </div>
        </>
    )
}