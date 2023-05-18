import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const sToy = useLoaderData();
  const {
    _id,
    description,
    price,
    quantity,
    rating,
    seller_email,
    seller_name,
    sub_category,
    toy_imageUrl,
    toyname,
  } = sToy;

  return (
    <div id={_id} className="flex flex-col md:flex-row px-4 py-10 md:px-6">
      <div className="md:w-2/3 w-full flex flex-col items-center justify-center">
        <img
          className="max-w-full w-96 border"
          src={toy_imageUrl}
          alt={toyname}
        />
        <p className="text-start self-start mt-5">{description}</p>
      </div>
      <div className="md:w-1/3 w-full">
        <p className="font-bold my-1">name : {toyname}</p>
        <p className="font-bold my-1">seller name : {seller_name}</p>
        <p className="font-bold my-1">seller email : {seller_email}</p>
        <p className="font-bold my-1">category : {sub_category}</p>
        <p className="font-bold my-1">Price : {price}</p>
        <p className="font-bold my-1">Quantity available : {quantity} </p>
        <p className="font-bold flex items-center ">
          Rating : <FaStar className="text-yellow-400" /> {rating}
        </p>
        <button className="btn btn-success mt-14">buy now</button>
      </div>
    </div>
  );
};

export default Details;
