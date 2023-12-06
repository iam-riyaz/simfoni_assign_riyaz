
import { useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import { useEffect, useState } from "react";
import { fetchCategoryList } from "../../redux/action";
export const AllCategory=()=>{


    const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data,productList, loading, error } = useSelector((state: any) => state);
  useEffect(() => {
    if (
      !loading &&
      !error &&
      data?.response?.categoryAppData?.departmentCategories
    ) {
      console.log(data);
      setCategory(data.response.categoryAppData.departmentCategories);
    }
  }, [data, loading, error]);

  const handleClick = (e: any) => {
    // prevent unnecessary calls
    // if(productList.lenght==0){
    dispatch(fetchCategoryList(e.categoryId));
    // }
    localStorage.setItem("pageTitle",e.displayName);
    navigate("/list");
    console.log({ e });
  };

    return(
        <>
        <div style={{zIndex:"1000"}} className="w-full h-80 border-2 border-gray-300">
          <ul className="">
            <li className="border border-red-200" >hello</li>
            <li className="border border-red-200" >hello</li>
            <li className="border border-red-200" >hello</li>
            <li className="border border-red-200" >hello</li>
            <li className="border border-red-200" >hello</li>
            <li className="border border-red-200" >hello</li>

          </ul>

        </div>

        
        
        </>
    )
}