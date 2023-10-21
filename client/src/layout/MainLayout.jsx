import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function MainLayout() {
  return (
    <div className="relative min-h-[1000px] max-w-[1600px] m-auto flex flex-col ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
