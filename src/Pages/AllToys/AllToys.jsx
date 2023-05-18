import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div>
      <div className="overflow-x-auto w-full my-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th className="hidden md:table-cell">Seller</th>
              <th className="hidden md:table-cell">Available</th>
              <th className="hidden md:table-cell">Sub Category</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {toys.map((toy) => {
              return <TR toy={toy} key={toy?._id} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
const TR = ({ toy }) => {
  const {
    _id,
    seller_name,
    seller_email,
    toyname,
    toy_imageUrl,
    sub_category,
    quantity,
    price,
  } = toy;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={toy_imageUrl} alt={toyname} />
            </div>
          </div>
          <div>
            <div className="font-bold">{toyname}</div>
            <div className="text-sm opacity-50">Price : ${price}</div>
          </div>
        </div>
      </td>
      <td className="hidden md:table-cell">
        {seller_name}
        <br />
        <span className="badge badge-ghost badge-sm">{seller_email}</span>
      </td>
      <td className="hidden md:table-cell">quantity :{quantity}</td>
      <td className="hidden md:table-cell">{sub_category}</td>
      <th>
        <button className="btn btn-ghost btn-xs">
          <Link to={`/toys/details/${_id}`}>details</Link>
        </button>
      </th>
    </tr>
  );
};
export default AllToys;
