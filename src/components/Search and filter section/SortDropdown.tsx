export const SortDropdown=()=>{
    return(
        <>
        <div className="w-full shadow-lg  bg-white rounded-lg">
            <ul className="">
                <li className="h-10 flex items-center cursor-pointer border-b px-2">Title: From A to Z</li>
                <li className="h-10 flex items-center cursor-pointer border-b px-2">Title: From Z to A</li>
                <li className="h-10 flex items-center cursor-pointer border-b px-2">Price: High to Low</li>
                <li className="h-10 flex items-center cursor-pointer border-b px-2">Price: Low to High</li>
            </ul>
        </div>
        </>
    )
}