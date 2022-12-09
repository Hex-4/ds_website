import Home from "./pages/home"
import './App.css';
import SideBar from './SideBar';
import { Outlet } from "react-router-dom";

function App() {
  return (
    
    <div>
      
      <SideBar />
      <Outlet />
    </div>
  );
}

export default App;
