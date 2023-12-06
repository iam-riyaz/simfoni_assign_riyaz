import { HeartIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

interface ProductCardProps {
  name?: string;
  brand?: string;
  price?: string;
  imgUrl?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  brand,
  name,
  price,
  imgUrl,
}) => {
  const [title, setTitle] = useState(` ${name}`);
  imgUrl = `https://assets.wfcdn.com/im/92129523/resize-h800-w800%5Ecompr-r85/2296/${imgUrl}/demo.jpg`;

  useEffect(() => {
    let maxLength = 45;
    if (title.length <= maxLength) {
      setTitle(title);
    } else {
      setTitle(title.substring(0, maxLength) + "...");
    }
  }, []);

  return (
    <>
      <div
        style={{ height: "480px" }}
        className="w-full   rounded-lg border border-gray-200 shadow-lg p-3 cursor-pointer"
      >
        <div className=" flex flex-col    h-full">
          <div className="">
            <div className="flex p-2 justify-center bg-gray-200 rounded-lg  h-36  w-full  ">
              <img className="h-full rounded-lg" src={imgUrl} alt="product image" />
            </div>
            <div className="">
              <p className="text-lg font-semibold text-gray-700 leading-tight">
                {title}
              </p>
              <p className="font-semibold text-xs leading-5 text-gray-400">
                1234580
              </p>
              <div className="leading-10">
                <span className="text-xl font-bold">${price}</span>
                <span className="text-gray-400">/each</span>
              </div>
              <p className="text-teal-500 font-semibold text-sm">
                Saving % 4.6
              </p>
              <div className="text-sm leading-6">
                <span className="font-bold text-gray-700">Supplier:</span>
                <span> {brand}</span>
              </div>
              <div className="text-sm leading-6">
                <span className="font-bold text-gray-700">Delivery By:</span>
                <span> TNTT logistics</span>
              </div>
            </div>
          </div>
          <div className=" mt-auto  w-full ">
            <div className="flex justify-between">
              <div className="flex border-2 font-semibold text-gray-700 border-gray-200 py-2 px-4 w-3/4 justify-around rounded-lg ">
                <p>-</p>
                <p>0</p>
                <p>+</p>
              </div>
              <div className="flex justify-center items-center border w-1/4 ml-3 rounded-lg bg-teal-600 ">
                <HeartIcon className="h-6 text-white" />
              </div>
            </div>
            <div className=" bg-teal-600 text-white font-semibold flex justify-center py-2 rounded-lg mt-2">
              <p>Add To Cart</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
