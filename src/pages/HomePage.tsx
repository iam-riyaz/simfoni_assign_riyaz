import { CategoriesSection } from "../components/Categories";
import { HeroCarousel } from "../components/HeroCarousel";
import { PeopleSearchFor } from "../components/PeopleSearchFor";
import { SearchAndFilterAndSort } from "../components/Search and filter section";

export const HomePage = () => {
  return (
    <>
      <div className="pt-4">
        <div className="px-4">
          <SearchAndFilterAndSort />
          <CategoriesSection/>
        </div>
         <HeroCarousel/>
         <div className="px-4 mt-4">
         <PeopleSearchFor/>
         </div>
      </div>
    </>
  );
};
