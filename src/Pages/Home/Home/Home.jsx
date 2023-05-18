import Header from "../../shared/Header/Header";
import Carouserl from "../Carouserl/Carouserl";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Header />
      <Gallery />
      <Products />
      <Carouserl />
      <Contact />
    </div>
  );
};

export default Home;
