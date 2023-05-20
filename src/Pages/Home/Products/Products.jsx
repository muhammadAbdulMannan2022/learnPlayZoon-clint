import { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "../../../Providers/AuthProvider";
const Products = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  useEffect(() => {
    let category;
    if (activeTab === 0) {
      category = "Math_Learning_Toys";
    } else if (activeTab === 1) {
      category = "Engineering_Toys";
    } else {
      category = "Language_Toys";
    }
    fetch(`https://b7-a11.vercel.app/toys/${category}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, [activeTab]);

  return (
    <div className="w-full p-5 bg-gray-100">
      <Tabs
        forceRenderTabPanel
        defaultIndex={1}
        className="w-full mx-auto mt-8"
      >
        <TabList className="flex justify-center mb-4">
          <Tab className="py-2 px-4 border text-3xl border-gray-300 rounded-md mr-2 focus:outline-none focus:ring focus:ring-blue-200">
            Educational and learning toys
          </Tab>
        </TabList>
        <TabPanel>
          <Tabs
            forceRenderTabPanel
            onSelect={(e) => {
              setActiveTab(e);
            }}
          >
            <TabList className="flex justify-center mb-4">
              <Tab className="py-2 px-4 border-b-2 border-transparent hover:border-blue-500 focus:outline-none">
                Math Learning Toys
              </Tab>
              <Tab className="py-2 px-4 border-b-2 border-transparent hover:border-blue-500 focus:outline-none">
                Engineering Toys
              </Tab>
              <Tab className="py-2 px-4 border-b-2 border-transparent hover:border-blue-500 focus:outline-none">
                Language Toys
              </Tab>
            </TabList>
            <TabPanel>
              <div className="flex flex-wrap gap-2 justify-center">
                {toys.map((toy) => (
                  <Card
                    key={toy?._id}
                    user={user}
                    _id={toy?._id}
                    image={toy?.toy_imageUrl}
                    price={toy?.price}
                    name={toy?.toyname}
                    rating={toy?.rating}
                    description={toy?.description}
                  />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-wrap gap-2 justify-center">
                {toys.map((toy) => (
                  <Card
                    key={toy?._id}
                    user={user}
                    _id={toy?._id}
                    image={toy?.toy_imageUrl}
                    price={toy?.price}
                    name={toy?.toyname}
                    rating={toy?.rating}
                    description={toy?.description}
                  />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-wrap gap-2 justify-center">
                {toys.map((toy) => (
                  <Card
                    key={toy?._id}
                    user={user}
                    _id={toy?._id}
                    image={toy?.toy_imageUrl}
                    price={toy?.price}
                    name={toy?.toyname}
                    rating={toy?.rating}
                    description={toy?.description}
                  />
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

const Card = ({ _id, image, name, price, rating, description, user }) => {
  const descriptionSliced = description.slice(0, 200);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div data-aos="fade-right" className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-64" src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p title={description}>{descriptionSliced}....</p>
        <h1>Price : ${price}</h1>
        <div className="flex items-center justify-between">
          <button className="btn btn-primary">
            <Link to={`/toys/details/${_id}`}>view details</Link>
          </button>
          <div className="btn text-xl">
            <FaStar /> {rating}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
