import { useSelector } from "react-redux";
import { useEffect } from "react";

export const AllCategory = () => {
  const { data, loading, error } = useSelector((state: any) => state);
  useEffect(() => {
    if (
      !loading &&
      !error &&
      data?.response?.categoryAppData?.departmentCategories
    ) {
      console.log(data);
    }
  }, [data, loading, error]);

  return (
    <>
      <div
        style={{ zIndex: "1000" }}
        className="w-full h-80 border-2 border-gray-300"
      >
        <ul className="">
          <li className="border border-red-200">hello</li>
          <li className="border border-red-200">hello</li>
          <li className="border border-red-200">hello</li>
          <li className="border border-red-200">hello</li>
          <li className="border border-red-200">hello</li>
          <li className="border border-red-200">hello</li>
        </ul>
      </div>
    </>
  );
};
