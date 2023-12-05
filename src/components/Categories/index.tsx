import { ChevronDownIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useEffect, useState } from "react";
import { AllCategory } from "./AllCategory";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/action";

export const CategoriesSection = () => {
  const [category, setCategory] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: any) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  
  useEffect(() => {
    if (!loading && !error && data?.response?.categoryAppData?.departmentCategories) {
      setCategory(data.response.categoryAppData.departmentCategories);
    }
  }, [data, loading, error]);
  

  


  return (
    <>
      <div className="pb-4">
        <div className="h-9 py-3 border border-gray-200 w-full bg-white rounded-lg px-2 text-sm font-semibold ">
          <div className="h-full flex  space-x-6 ">
            <div className="flex items-center">
              <div className="flex items-center">
                <p className="text-sm">All Categories</p>
                <ChevronDownIcon className="h-3" style={{ strokeWidth: "2" }} />
              </div>
            </div>

            {/* other categories */}

            {category.slice(0, 5).map((e: any,i) => (
              <div className=" hidden lg:flex lg:items-center" key={i+1}>
                <p>{e.displayName}</p>
                <ChevronDownIcon className="h-3" style={{ strokeWidth: "2" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
