import { Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import { HomePage } from "../pages/HomePage"

export const AllRoutes= ()=>{
   return(
    <>
    <Routes>
        <Route path="/" element={<HomePage/>}/>

        
    </Routes>
    </>
   )
}