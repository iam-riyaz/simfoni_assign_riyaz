import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCategoryList } from "../../redux/action";
import { useDispatch } from "react-redux";

export const BestSellingCategory = () => {
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

  return (
    <>
      <div className="w-full pb-4">
        <div className="bg-white border rounded-lg border-gray-200 lg:px-28 px-10 pb-8">
          <p className="text-xl font-bold py-5 ">BEST SELLING CATEGORY</p>
          <div className="grid lg:grid-cols-5 grid-cols-2 gap-10 gap-y-3  lg:gap-30 ">
            {category.slice(0, 5).map((e: any) => {
              return (
                <div
                  onClick={() => handleClick(e)}
                  className="border p-2 flex flex-col items-center justify-center rounded-lg shadow-md cursor-pointer"
                >
                  <div className="bg-gray-100 rounded-lg px-10 py-10 flex justify-center items-center">
                    <span className="tracking-wide text-xl text-teal-300 font-extrabold">{e.displayName.split(" ")[0]}</span>
                  </div>
                  <p className="text-gray-500 text-lg font-semibold">{e.displayName}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
