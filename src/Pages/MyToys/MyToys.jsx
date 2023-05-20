import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";
import { Helmet } from "react-helmet";

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);
  const [updateId, setUpdateId] = useState(null);
  const [ascending, setAscending] = useState("ascending");
  const closeRef = useRef();
  useEffect(() => {
    fetch(
      `https://b7-a11.vercel.app/mytoys?email=${user?.email}&sort=${ascending}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((err) => console.log(err));
  }, [user, ascending]);
  const handleUpdate = (e) => {
    e.preventDefault();
    const from = e.target;
    const { price, quantity } = from;
    // console.log(from.decription.value);
    const updatedObj = {
      price: price.value,
      quantity: quantity.value,
      description: from.decription.value,
    };
    fetch(`https://b7-a11.vercel.app/toy/${updateId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedObj),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const restof = toys.filter((toy) => toy._id !== updateId);
        const updated = toys.find((toy) => toy._id === updateId);
        updated.price = data.price;
        updated.quantity = data.quantity;
        updated.description = data.description;
        setToys([...restof, updated]);
        closeRef.current.click();
        swal("Update!", "the toy has been updated!", "success");
      })
      .catch((err) => console.log(err));
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
        fetch(`https://b7-a11.vercel.app/toy/${id}`, {
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
    <>
      <div className="w-full pt-5 px-5 flex justify-end">
        <div className="border w-36">
          <select
            onChange={(e) => setAscending(e.target.value)}
            className="select w-auto outline-none border-none"
          >
            {/* {console.log(ascending)} */}
            <option defaultValue="ascending">ascending</option>
            <option>descending</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto w-full mb-10 mt-5">
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
          {/* {console.log(toys)} */}
          {console.log(toys)}
          <tbody>
            {/* row 1 */}
            {toys.map((toy) => {
              return (
                <TR
                  toy={toy}
                  setUpdateId={setUpdateId}
                  handleDelete={handleDelete}
                  key={toy?._id}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      {/* modal */}
      <div className="modal" id="my-modal-2">
        <div className="modal-box relative">
          {/* modal form */}
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={(e) => handleUpdate(e)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="price"
                  name="price"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">available quantity</span>
                </label>
                <input
                  type="text"
                  placeholder="available quantity"
                  name="quantity"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">description</span>
                </label>
                <textarea
                  type="text"
                  placeholder="description"
                  name="decription"
                  className="input input-bordered resize-none h-40"
                />
              </div>
              <div className="form-control mt-6 modal-action">
                <button type="submit" className="btn btn-success">
                  Update
                </button>
              </div>
              <label
                htmlFor="my-modal-2"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                <a ref={closeRef} href="#">
                  ✕
                </a>
              </label>
            </form>
          </div>
          {/* end form */}
        </div>
      </div>
    </>
  );
};
const TR = ({ toy, handleDelete, setUpdateId }) => {
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
          <a
            href="#my-modal-2"
            onClick={() => {
              setUpdateId(_id);
            }}
            className="btn btn-xs"
          >
            edit
          </a>
          <button onClick={() => handleDelete(_id)} className="btn btn-xs">
            delete
          </button>
        </div>
      </th>
    </tr>
  );
};
export default MyToys;
