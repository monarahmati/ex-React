import { Route, Routes } from "react-router-dom";
import "./App.css";
//components
import Home from "./Home/index";
import Operations from "./Home/Operations";
import Marketing from "./Home/Marketing";
import Supports from "./Home/Supports";
import SupportStaff from "./Home/Supports/supportStaff";
import TechnicalSupport from './Home/Supports/technicalSupport'
import Remote from "./Home/Supports/supportStaff/remote";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Operations" element={<Operations />} />
      <Route path="/Marketing" element={<Marketing />} />
      <Route path="/Supports" element={<Supports />} />
      <Route path="/supportStaff" element={<SupportStaff />} />
      <Route path="/technicalSupport" element={<TechnicalSupport />} />  
      <Route path="/remote" element={<Remote/>} />      


    </Routes>
    
  );
}

export default App;
