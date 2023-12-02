import Navbar from "./components/Navbar";
import { AllRoutes } from "./routes/Allroutes";

function App() {
  return (
    <>
      <div className="bg-zinc-100">
        <Navbar/>
        
        <AllRoutes/>

      </div>
    </>
  );
}
export default App;
