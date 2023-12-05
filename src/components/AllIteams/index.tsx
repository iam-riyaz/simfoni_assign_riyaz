import { ProductCard } from "../ProductCard/ProductCard"

export const AllIteams=()=>{
    return(
        <>
        <div className="w-full  pb-4">
           <div className="bg-white border rounded-lg border-gray-200 lg:px-28 px-10 pb-8" >
            
            <p className="text-xl font-bold py-5 ">ALL ITEMS</p>

           
            {/*card div  */}
            <div className="grid grid-cols-5 gap-x-10 gap-y-6 w-full ">
                <ProductCard/>
                <ProductCard/>
                
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                
                <ProductCard/>
                
                
                

                
            </div>


            </div>
            </div>
        </>
    )
}