import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Products = () => {
  const [activeTab, setActiveTab] = useState(0);
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
    fetch(`http://localhost:5000/toys/${category}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [activeTab]);

  return (
    <div className="w-full p-5 bg-gray-100">
      <Tabs forceRenderTabPanel defaultIndex={1}>
        <TabList>
          <Tab>Educational and learning toys</Tab>
        </TabList>
        <TabPanel>
          <Tabs
            forceRenderTabPanel
            onSelect={(e) => {
              setActiveTab(e);
            }}
          >
            <TabList>
              <Tab>Math Learning Toys</Tab>
              <Tab>Engineering Toys</Tab>
              <Tab>Language Toys</Tab>
            </TabList>
            <TabPanel>
              <div className="flex flex-wrap gap-2 justify-center">
                {toys.map((toy) => (
                  <Card
                    key={toy?._id}
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

const Card = ({ _id, image, name, price, rating, description }) => {
  const descriptionSliced = description.slice(0, 200);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
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
