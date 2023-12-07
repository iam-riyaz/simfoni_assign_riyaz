import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ProductListPage } from "../pages/ProductListPage";
import { ProductDetailPage } from "../pages/ProductDetailPage";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<ProductListPage />} />
        <Route path="/productDetail" element={<ProductDetailPage />} />
      </Routes>
    </>
  );
};
