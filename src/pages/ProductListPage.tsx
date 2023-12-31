import { useEffect, useState } from "react";
import { CategoriesSection } from "../components/Categories";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { SearchAndFilterAndSort } from "../components/Search and filter section";
import { useSelector, useDispatch } from "react-redux";
import { Skeleton } from "../components/Loading/Skeleton";
import { Loading } from "../components/Loading/Loading";
import axios from "axios";
import { fetchSingleProduct } from "../redux/action";
import { useNavigate } from "react-router-dom";

export const ProductListPage: React.FC = () => {
  const [productListData, setProductListData]: any = useState([]);
  const [page, setPage] = useState(1);
  const [isloading, setIsLoading] = useState(false);
  const [isSearchedPage, setIsSearchedPage] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { productList, allProducts, searchedProducts, loading, error } =
    useSelector((state: any) => state);

  const [pageTitle, setPageTitle] = useState("no title");

  const title = localStorage.getItem("pageTitle");
  const apikey = import.meta.env.VITE_APIKEY;

  useEffect(() => {
    if (title == "ALL PRODUCTS") {
      setPageTitle(title);
      if (!loading && !error && allProducts) {
        setProductListData(allProducts);
      }
    } else if (title?.split("-")[0] == "Searched") {
      setIsSearchedPage(true);
      setPageTitle(title);
      if (!loading && !error && searchedProducts) {
        setProductListData(searchedProducts)
        console.log({ searchedProducts });
      }
    } else if (title) {
      setPageTitle(title);
      if (!loading && !error && productList?.category?.browse?.products) {
        setProductListData(productList?.category?.browse?.products);
      }
    }
  }, [productList, allProducts, loading, error]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const options = {
        method: "GET",
        url: "https://wayfair.p.rapidapi.com/products/list",
        params: {
          categoryId: "214970",
          itemsPerPage: "20",
          page: page,
        },
        headers: {
          "X-RapidAPI-Key": apikey,
          "X-RapidAPI-Host": "wayfair.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      setProductListData((prevProducts: any) => [
        ...prevProducts,
        ...response.data.response.data.category.browse.products,
      ]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    console.log("hit");
  }, [page]);

  // Add a handler to load more products when the user scrolls to the bottom
  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
    
    if (
      scrollTop + clientHeight + 1 >= scrollHeight &&
      !loading &&
      !isSearchedPage
    ) {
      // console.log({page})
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (data: any) => {
    const sku = data.sku;

    dispatch(fetchSingleProduct(sku));

    localStorage.setItem("productTitle", data.name);

    navigate("/productDetail");
  };

  return (
    <>
      <div className="pt-4">
        <div className="px-4">
          <SearchAndFilterAndSort />
          <CategoriesSection />
          <div className=" mt-4">
            <div className="w-full  pb-4">
              <div className="bg-white border rounded-lg border-gray-200 lg:px-28 px-10 pb-8">
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold py-5 ">{pageTitle}</p>
                </div>

                {/*card div  */}
                {!loading ? (
                  <div className="grid lg:grid-cols-5 md:grid-cols-2 md:gap-x-3 lg:gap-x-10 gap-y-6 w-full ">
                    {!isSearchedPage
                      ?
                       productListData.map((data: any) => {
                          return (
                            <div onClick={() => handleClick(data)}>
                              <ProductCard
                                name={data?.name}
                                brand={data?.manufacturer?.name}
                                price={
                                  data?.pricing?.customerPrice?.unitPrice?.value
                                }
                                imgUrl={data?.leadImage?.id}
                              />
                            </div>
                          );
                        })
                      : productListData.splice(0,20).map((data: any) => {
                          return (
                            <div onClick={() => handleClick(data)}>
                              <ProductCard
                                name={data?.name}
                                brand={data?.manufacturer?.name}
                                price={
                                  data?.item_price
                                }
                                imgUrl={data?.leadImage?.id}
                                image_url={data?.image_url}
                              />
                            </div>
                          );
                        })}
                  </div>
                ) : (
                  <Skeleton />
                )}
                {isloading ? <Loading /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
