import { FilterBox } from "./FilterBox";
import { SearchBox } from "./SearchBox";
import { SortBox } from "./SortBox";

export const SearchAndFilterAndSort = () => {
  return (
    <>
      <div className="lg:flex z-50 lg:justify-between pb-4">
        <div className="lg:w-8/12 w-full">
          <SearchBox />
        </div>
        <div className="hidden lg:flex lg:ml-10 lg:w-1/3 ">
          <FilterBox  />
          <SortBox/>
          
        </div>
      </div>
    </>
  );
};
