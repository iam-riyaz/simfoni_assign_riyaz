import Navbar from "./components/Navbar/Navbar.tsx";
import { fetchData } from "./redux/action.ts";
import { AllRoutes } from "./routes/Allroutes";
import {useEffect} from "react"
import {useDispatch} from "react-redux"

function App() {

  const dispatch = useDispatch();
  
  useEffect(()=>{
    const isPresent = localStorage.getItem("persist:persist-sotre");
    if (!isPresent) {
      dispatch(fetchData());
      
    }
    
      
  },[])

  return (
    <>
      <div>
        <Navbar/>
        
        <AllRoutes/>

      </div>
    </>
  );
}
export default App;
