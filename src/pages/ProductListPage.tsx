import { useEffect, useState } from "react";
import { CategoriesSection } from "../components/Categories";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { SearchAndFilterAndSort } from "../components/Search and filter section";
import { useSelector } from "react-redux";
import { retry } from "@reduxjs/toolkit/query";
import { Skeleton } from "../components/Loading/Skeleton";

export const ProductListPage: React.FC = () => {
  const [productListData, setProductListData] = useState([]);

  const { productList, loading, error } = useSelector((state: any) => state);

  const [pageTitle,setPageTitle]= useState("on title")

  const title=localStorage.getItem("pageTitle")
  


  useEffect(() => {
    if(title)
  {
    setPageTitle(title)
  }
 
    if (
      !loading &&
      !error &&
      productList?.category?.browse?.products
    ) {
      
      setProductListData(productList.category.browse.products);
    }
  }, [productList, loading, error]);

  return (
    <>
      <div className="pt-4">
        <div className="px-4">
          <SearchAndFilterAndSort />
          <CategoriesSection />
          <div className=" mt-4">
            <div className="w-full  pb-4">
              <div className="bg-white border rounded-lg border-gray-200 lg:px-28 px-10 pb-8">
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold py-5 ">{pageTitle}</p>
                </div>

                {/*card div  */}
                {!loading?<div className="grid grid-cols-5 gap-x-10 gap-y-6 w-full ">
                  {productListData.map((data:any) => {
                    console.log({data})
                    return <ProductCard name={data.name} brand={data.manufacturer.name} price={data.pricing.customerPrice.unitPrice.value} />;
                  })}
                </div>:<Skeleton/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
