import React from "react";
import { CategoriesSection } from "../components/Categories";
import { PeopleSearchFor } from "../components/PeopleSearchFor";
import { ProductDetail } from "../components/ProductDetail";
import { SearchAndFilterAndSort } from "../components/Search and filter section";


export const ProductDetailPage = () => {
  return (
    <>
      <div className="pt-4">
        <div className="px-4">
          <SearchAndFilterAndSort />
          <CategoriesSection />
        </div>

        <div className="px-4 mt-4">
          <ProductDetail  />
          <PeopleSearchFor/>
        </div>
      </div>
    </>
  );
};
