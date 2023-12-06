import { Loading } from "./components/Loading/Loading.tsx";
import { Skeleton } from "./components/Loading/Skeleton.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import { fetchAllProducts, fetchData } from "./redux/action.ts";
import { AllRoutes } from "./routes/Allroutes";
import {useEffect, useState} from "react"
import {useDispatch} from "react-redux"

function App() {

  const dispatch = useDispatch();
  const [isLoading,setIsLoading]=useState(true)
  
  useEffect(()=>{
    const isPresent = localStorage.getItem("persist:persist-sotre");
    if (!isPresent) {
      dispatch(fetchAllProducts())
      dispatch(fetchData());
      
    }
    setIsLoading(false)
      
  },[])

  return (
    <>
      <div>
        <Navbar/>
        
        {!isLoading?<AllRoutes/>:<Skeleton/>}

      </div>
    </>
  );
}
export default App;
