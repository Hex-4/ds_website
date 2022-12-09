import { BsFillLightningFill, BsDiamondFill, BsPeopleFill} from 'react-icons/bs';
import {Link} from "react-router-dom";
import {HiSquares2X2} from "react-icons/hi2"


const SideBar = () => {
    
    
    return (
            <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary shadow-lg text-secondary">
                <Link to="home"><SideBarIcon icon={<BsDiamondFill size="28" />} text="Home" /></Link>
                <Link to="projects"><SideBarIcon icon={<HiSquares2X2 size="32" />} text="Projects"/></Link>
                <SideBarIcon icon={<BsFillLightningFill size="20" />}text="Go HYPR" />
                <SideBarIcon icon={<BsPeopleFill size="20" />} text="The Team"/>
            </div>
    );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
    <div className="sidebar-icon group flex-none">
      {icon}
  
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
  
export default SideBar;