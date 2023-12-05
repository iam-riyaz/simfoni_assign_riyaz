import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { ProductListPage } from "../pages/ProductListPage"

export const AllRoutes= ()=>{
   return(
    <>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/list" element={<ProductListPage/>}/>

        
    </Routes>
    </>
   )
}