export const FilterDropdown = () => {
  return (
    <>
      <div className="w-full shadow-lg  bg-white rounded-lg">
        <ul>
          <li className="h-10 flex items-center cursor-pointer border-b px-2   hover:bg-teal-600 hover:text-white">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200   rounded-full peer   rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-teal-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Top Selling
              </span>
            </label>
          </li>
          <li className="h-10 flex items-center cursor-pointer border-b px-2  hover:bg-teal-600 hover:text-white">
            Title: From Z to A
          </li>
          <li className="h-10 flex items-center cursor-pointer border-b px-2   hover:bg-teal-600 hover:text-white">
            Price: High to Low
          </li>
          <li className="h-10 flex items-center cursor-pointer border-b px-2   hover:bg-teal-600 hover:text-white">
            Price: Low to High
          </li>
        </ul>
      </div>
    </>
  );
};
