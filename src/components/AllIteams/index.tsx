import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ProductCard } from "../ProductCard/ProductCard";

export const AllIteams = () => {
  return (
    <>
      <div className="w-full  pb-4">
        <div className="bg-white border rounded-lg border-gray-200 lg:px-28 px-10 pb-8">
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold py-5 ">ALL ITEMS</p>

            <div className="flex cursor-pointer ">
            <p className="inline text-teal-600 text-xs font-bold py-5">show more  </p>
            <div className="inline text-teal-600 text-xs font-bold py-6 text-auto">
            <ChevronRightIcon className="h-3"/>
            </div>
            </div>
          </div>

          {/*card div  */}
          <div className="grid grid-cols-5 gap-x-10 gap-y-6 w-full ">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
};
