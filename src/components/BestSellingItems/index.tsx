import {Carausel} from "../Carausel"

export const BestSellingItems=()=>{
    return(
        <>
        <div className="w-full  pb-4">
           <div className="bg-white border rounded-lg border-gray-200 lg:px-28 px-10" >
            
            <p className="text-xl font-bold py-5 ">BEST SELLING ITEMS</p>
            <div className="mb-6">
                <Carausel start={15} end={25}/>
                </div>
            </div>
            
            
            </div>
        </>
    )
}