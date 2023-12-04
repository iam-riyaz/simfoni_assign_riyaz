import { ChevronDownIcon } from "@heroicons/react/24/outline"
import axios from "axios"
import { useEffect, useState } from "react"
import { AllCategory } from "./AllCategory"

export const CategoriesSection= ()=>{

    const [category,setCategory]= useState([])
    const [isOpen ,setIsOpen]= useState(true)

    const fetchData= async()=>{

        const options = {
            method: 'GET',
            url: 'https://wayfair.p.rapidapi.com/categories/list',
            params: {caid: '214970'},
            headers: {
              'X-RapidAPI-Key': '457ffd2163msh7dda4e02a1bb347p1d508djsnf9754e7b9e0b',
              'X-RapidAPI-Host': 'wayfair.p.rapidapi.com'
            }
          };

          try {
            const response = await axios.request(options);
            console.log(response.data);
            setCategory(response.data.response.categoryAppData.departmentCategories)
                   
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(()=>{

       
      fetchData()
      console.log({category})


    },[])

    return(
        <>
        <div className="pb-4">
        <div className="h-9 py-3 border border-gray-200 w-full bg-white rounded-lg px-2 text-sm font-semibold ">
            <div className="h-full flex  space-x-6 ">
                 <div className="flex items-center">
                 <div className="flex items-center">
                <p className="text-sm">All Categories</p>
                <ChevronDownIcon className="h-3" style={{strokeWidth:"2"}}/>
                </div>
                
                </div>

                {/* other categories */}
                
                {category.slice(0,5).map((e:any)=>(<div className=" hidden lg:flex lg:items-center">
                <p>{e.displayName}</p>
                <ChevronDownIcon className="h-3" style={{strokeWidth:"2"}}/>
                </div>))}
                
                
            </div>
            
            
           
        </div>
        </div>
        </>
    )
}