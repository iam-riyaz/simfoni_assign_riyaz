export const SortDropdown=()=>{
    return(
        <>
        <div className="w-full shadow-lg bg-red-500 rounded-lg ">
            <ul className="">
                <li className="h-10 flex items-center cursor-pointer border-b px-2 hover:bg-teal-600 hover:text-white ">Title: From A to Z</li>
                <li className="h-10 flex items-center cursor-pointer border-b px-2 hover:bg-teal-600 hover:text-white ">Title: From Z to A</li>
                <li className="h-10 flex items-center cursor-pointer border-b px-2 hover:bg-teal-600 hover:text-white ">Price: High to Low</li>
                <li className="h-10 flex items-center cursor-pointer border-b px-2 hover:bg-teal-600 hover:text-white ">Price: Low to High</li>
            </ul>
        </div>
        </>
    )
}