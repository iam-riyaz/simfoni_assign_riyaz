import { CategoriesSection } from "../components/Categories"
import { SearchAndFilterAndSort } from "../components/Search and filter section"

export const ProductListPage=()=>{
    return(
        <>
        <div className="pt-4">
        <div className="px-4">
          <SearchAndFilterAndSort />
          <CategoriesSection />
        </div>
        </div>
        </>
    )
}