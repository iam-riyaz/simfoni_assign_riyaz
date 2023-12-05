import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const BestSellingCategory = () => {

  const [category, setCategory] = useState([]);
  const navigate= useNavigate()

  const { data, loading, error } = useSelector((state: any) => state);
  useEffect(() => {
     if (!loading && !error && data?.response?.categoryAppData?.departmentCategories) {
       setCategory(data.response.categoryAppData.departmentCategories);
     }
   }, [data, loading, error]);

   const handleClick=(e:any)=>{
         navigate("/list")
    console.log({e})

   }

  return (
    <>
      <div className="w-full pb-4">
        <div className="bg-white border rounded-lg border-gray-200 lg:px-28 px-10 pb-8">
          <p className="text-xl font-bold py-5 ">BEST SELLING CATEGORY</p>
          <div className="grid lg:grid-cols-5 grid-cols-2 gap-10 gap-y-3  lg:gap-30 ">
            {category.slice(0,5).map((e:any)=>{
              return(
                <div onClick={()=>handleClick(e)} className="border p-2 flex flex-col items-center justify-center rounded-lg shadow-md cursor-pointer">
                <img
                  src="https://www.bigbasket.com/media/uploads/p/l/10000074-2_2-fresho-cauliflower.jpg?tr=w-640,q=80"
                  alt=""
                />
                <p className="text-lg font-semibold">{e.displayName}</p>
              </div>
              )
            })}
            
          </div>
        </div>
      </div>
    </>
  );
};