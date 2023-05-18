import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/mytoys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((err) => console.log(err));
  }, [user]);
  const handleUpdate = (id) => {
    console.log(123);
  };
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete the toy ?",
      icon: "warning",
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        console.log(willDelete);
        fetch(`http://localhost:5000/toy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            const remainig = toys.filter((toy) => toy?._id !== id);
            setToys(remainig);
            swal("Deleted!", "the toy has been deleted!", "success");
          })
          .catch((res) => console.log(res));
      }
    });
  };
  return (
    <div className="overflow-x-auto w-full my-10">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th className="hidden md:table-cell">Seller</th>
            <th className="hidden md:table-cell">Available</th>
            <th className="hidden md:table-cell">Sub Category</th>
            <th>controls</th>
          </tr>
        </thead>
        {console.log(toys)}
        <tbody>
          {/* row 1 */}
          {toys.map((toy) => {
            return (
              <TR
                toy={toy}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                key={toy?._id}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
const TR = ({ toy, handleDelete, handleUpdate }) => {
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
    <tr id={_id}>
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
      <td className="hidden md:table-cell">
        quantity :<span>{quantity}</span>
      </td>
      <td className="hidden md:table-cell">{sub_category}</td>
      <th>
        <div className="space-x-2">
          <button onClick={() => handleUpdate(_id)} className="btn btn-xs">
            edit
          </button>
          <button onClick={() => handleDelete(_id)} className="btn btn-xs">
            delete
          </button>
        </div>
      </th>
    </tr>
  );
};

export default MyToys;
