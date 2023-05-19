import { Outlet } from "react-router-dom";
import Footer from "../Pages/shared/Footer/Footer";
import Navbar from "../Pages/shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
