import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

export const SearchBox=()=>{
    return(
        <>

        <div className="flex justify-betweeen border border-gray-400">
            <input type="text" className="h-9 px-2  h-full " placeholder="Search" />
            <div className="py-2 text-white font-bold px-4 bg-teal-600">
                <MagnifyingGlassIcon className="h-5"/>
            </div>
        </div>
        </>
    )
}