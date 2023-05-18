import Header from "../Pages/shared/Header/Header";
import Navbar from "../Pages/shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Header />
    </div>
  );
};

export default MainLayout;
