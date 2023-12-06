import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ProductCard } from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const AllIteams = () => {
  const [allProductsData, setAllProductsData] = useState([]);
  const navigate= useNavigate()

  const { allProducts, loading, error } = useSelector((state: any) => state);

  const handleClick=()=>{
     localStorage.setItem("pageTitle","ALL PRODUCTS")
    
     navigate('/list')
  }

  useEffect(() => {
    if (!loading && !error && allProducts) {
      setAllProductsData(allProducts);
    }
  }, [allProducts, loading, error]);

  return (
    <>
      <div className="w-full  pb-4">
        <div className="bg-white border rounded-lg border-gray-200 lg:px-28 px-10 pb-8">
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold py-5 ">ALL ITEMS</p>

            <div onClick={handleClick} className="flex cursor-pointer ">
              <p className="inline text-teal-600 text-xs font-bold py-5">
                show more{" "}
              </p>
              <div className="inline text-teal-600 text-xs font-bold py-6 text-auto">
                <ChevronRightIcon className="h-3" />
              </div>
            </div>
          </div>

          {/*card div  */}
          <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 md:gap-x-3 lg:gap-x-10 gap-y-6 w-full ">
            {allProductsData.slice(0,10).map((data:any) => {
              return <ProductCard  name={data.name} brand={data.manufacturer.name} price={data.pricing.customerPrice.unitPrice.value} imgUrl={data.leadImage.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
