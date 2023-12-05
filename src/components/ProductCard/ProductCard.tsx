import { HeartIcon } from "@heroicons/react/20/solid";

export const ProductCard = () => {
  return (
    <>
      <div
        style={{ height: "500px" }}
        className="w-full   rounded-lg border border-gray-200 shadow-lg p-3 cursor-pointer"
      >
        <div className=" flex flex-col  border border-green-300  h-full">
          <div className="border border-teal-600">
            <div className="flex justify-center bg-gray-100 rounded-lg border h-36  w-full  border-red-200">
              <img
                className="h-full"
                src="https://assets.wfcdn.com/im/36955666/resize-h500-w500%5Ecompr-r85/2213/221369857/default_name.jpg"
                alt="img"
              />
            </div>
            <div className="border border-yellow-400">
              <p className="text-lg font-semibold text-gray-700 leading-tight">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="font-semibold text-xs leading-5 text-gray-400">
                1234580
              </p>
            </div>
          </div>
          <div className="border mt-auto  w-full border-red-200">
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
          </div>
        </div>
      </div>
    </>
  );
};
