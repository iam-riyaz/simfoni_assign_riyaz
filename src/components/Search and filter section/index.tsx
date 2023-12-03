import { FilterBox } from "./FilterBox";
import { SearchBox } from "./SearchBox";
import { SortBox } from "./SortBox";

export const SearchAndFilterAndSort = () => {
  return (
    <>
      <div className="flex justify-between pb-4">
        <div className="w-8/12">
          <SearchBox />
        </div>
        <div className="flex ml-10 w-1/3">
          <FilterBox />
          <FilterBox/>
          
        </div>
      </div>
    </>
  );
};
