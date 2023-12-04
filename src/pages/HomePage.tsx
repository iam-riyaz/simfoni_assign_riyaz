import { AllIteams } from "../components/AllIteams";
import { BestSellingCategory } from "../components/BestSellingCategory";
import { BestSellingItems } from "../components/BestSellingItems";
import { CategoriesSection } from "../components/Categories";
import { HeroCarousel } from "../components/HeroCarousel";
import { NewArrivals } from "../components/NewArrivals";
import { PeopleSearchFor } from "../components/PeopleSearchFor";
import { SearchAndFilterAndSort } from "../components/Search and filter section";

export const HomePage = () => {
  return (
    <>
      <div className="pt-4">
        <div className="px-4">
          <SearchAndFilterAndSort />
          <CategoriesSection />
        </div>
        <HeroCarousel />
        <div className="px-4 mt-4">
          <BestSellingCategory />
          <BestSellingItems/>
          <AllIteams/>
          <NewArrivals/>
          <PeopleSearchFor />
        </div>
      </div>
    </>
  );
};
