import { HeartIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import {useSelector} from "react-redux"
import { Skeleton } from "../Loading/Skeleton";

export const ProductDetail = () => {

  const [productData,setProductData]=useState({})
  const [mainImgUrl,setMainImgUrl]=useState("")
    const title= localStorage.getItem("productTitle")
    const {singleProduct,error,loading} = useSelector((state:any)=>state)
    
    // imgUrl = `https://assets.wfcdn.com/im/92129523/resize-h800-w800%5Ecompr-r85/2296/${imgUrl}/demo.jpg`;

    const handleClick=(id:any)=>{
      console.log({id})

      setMainImgUrl(`https://assets.wfcdn.com/im/92129523/resize-h800-w800%5Ecompr-r85/2296/${id}/demo.jpg`)

    }


    useEffect(()=>{
      
      
      
      if(!loading && !error && singleProduct)
      {
        console.log({singleProduct})
        setProductData(singleProduct)
        setMainImgUrl(singleProduct.images[0].id)

      }
    },[loading,error,singleProduct])
   
   


  return (
    <>
      <div className="w-full  pb-4">
        {<div className="bg-white border rounded-lg border-gray-200 lg:px-20 px-10">
          {!loading?<div className="  my-6 flex justify-between">
            {/* image div */}
            <div className="  w-2/5">
              <div className="flex">
                <div className="flex flex-col space-y-4 mr-5">
                  {singleProduct.images.slice(0,4).map((images:any)=>{
                    return(<div onClick={()=>handleClick(images.id)} className="cursor-pointer">
                      <img
                        className="h-auto w-56 rounded-lg border"
                        src={`https://assets.wfcdn.com/im/92129523/resize-h800-w800%5Ecompr-r85/2296/${images.id}/demo.jpg`}
                        alt=""
                      />
                    </div>)
                  })}
                </div>

                {/* Main Image */}
                <div className="">
                  <img
                    className="h-auto max-w-full rounded-lg border"
                    src={`https://assets.wfcdn.com/im/92129523/resize-h800-w800%5Ecompr-r85/2296/${mainImgUrl}/demo.jpg`}
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* cantent div */}
            <div className=" w-3/5 ml-6">
              <p className="text-xl text-gray-700 font-semibold mt-4">{title}</p>
              <p className="text-xs text-gray-400 ">SKU number</p>
              <p className="text-gray-700 font-semibold ">{singleProduct.manufacturer.name}</p>
              <div>
                <span className=" text-gray-700 mr-1 font-semibold">
                  Price:
                </span>
                <span className="text-2xl text-gray-700 font-semibold">
                  ${singleProduct.pricing.listPrice?.display?.value}
                </span>
                <span className="text-sm text-gray-400 ">/each</span>
              </div>

              {/* add to cart section */}
              <div className="w-1/3 my-4">
                <div className="flex justify-between">
                  <div className="flex border-2 font-semibold text-gray-700 border-gray-200 w-20 justify-between items-center rounded-lg py-1 px-3 ">
                    <p>-</p>
                    <p>1</p>
                    <p>+</p>
                  </div>
                  <div className=" bg-teal-600 text-white font-semibold flex justify-center rounded-lg  py-1 px-3">
                    <p>Add To Cart</p>
                  </div>
                  <div className="flex justify-center items-center border   rounded-lg bg-teal-600 py-1 px-3 ">
                    <HeartIcon className="h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* additional information */}
              <div className="mt-14 mb-3">
                <p className="text-lg font-semibold text-gray-500">
                  ADDITIONAL INFORMATION
                </p>
                <div className="mt-2 text-sm space-y-2">
                  <div>
                    <span className=" text-gray-700 mr-1 font-semibold">
                      Vendor Name:
                    </span>
                    <span className=" text-gray-500 ">{singleProduct.manufacturer.name}</span>
                  </div>
                  <div>
                    <span className=" text-gray-700 mr-1 font-semibold">
                      Manufacturers Name:
                    </span>
                    <span className=" text-gray-500 ">{singleProduct.manufacturer.name}</span>
                  </div>
                  <div>
                    <span className=" text-gray-700 mr-1 font-semibold">
                      Brand Name:
                    </span>
                    <span className=" text-gray-500 ">{singleProduct.manufacturer.shortName}</span>
                  </div>
                  <div>
                    <span className=" text-gray-700 mr-1 font-semibold">
                      Days to Deliver:
                    </span>
                    <span className=" text-gray-500 ">2 days</span>
                  </div>
                  <div>
                    <span className=" text-gray-700 mr-1 font-semibold">
                      Country of Origin:
                    </span>
                    <span className=" text-gray-500 ">India</span>
                  </div>
                  <div>
                    <span className=" text-gray-700 mr-1 font-semibold">
                      Product Specification:
                    </span>
                    <span className=" text-gray-500 ">None</span>
                  </div>
                  <div>
                    <span className=" text-gray-700 mr-1 font-semibold">
                      Pack Size:
                    </span>
                    <span className=" text-gray-500 ">None</span>
                  </div>
                </div>
              </div>
              <hr  />
              
              {/* long decription */}
              <div className="mt-5 mb-3">
                <p className="text-xl text-gray-500 mb-3 font-semibold">LONG DESCRIPTION</p>
                <p className="text-sm text-gray-400 text-justify ">{singleProduct.manufacturer.details}</p>
              </div>
                <hr/>


            </div>
          </div>:<Skeleton/>}
        </div>}
      </div>
    </>
  );
};
