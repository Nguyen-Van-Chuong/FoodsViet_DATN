import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../css/admin.css";
const DashboardLayout = () => {
  return (
    <div className="text-xs text-white main bg-main-bg">
      <Navbar></Navbar>
      <div className="flex containersim">
        <div className="menuCotainer sm:border-r sm:border-[#8b8b8b] w-2/12 sm:w-1/12 md:w-2/12">
          <Sidebar></Sidebar>
        </div>
        <div className="pr-2.5 sm:px-2.5 lg:px-5 py-2 contentCotainer w-10/12 sm:w-11/12 md:w-10/12 min-h-screen">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
