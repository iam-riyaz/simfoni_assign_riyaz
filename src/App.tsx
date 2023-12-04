import Navbar from "./components/Navbar/Navbar.tsx";
import { AllRoutes } from "./routes/Allroutes";

function App() {
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
