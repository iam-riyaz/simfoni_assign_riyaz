import Navbar from "../components/Navbar";
import { SearchAndFilterAndSort } from "../components/Search and filter section";

export const HomePage = () => {
  return (
    <>
      <div className="pt-4">
        <div className="px-4">
            
          <SearchAndFilterAndSort />
          
          
        </div>
      </div>
    </>
  );
};
