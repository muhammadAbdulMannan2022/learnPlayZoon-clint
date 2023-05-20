import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";
import { Helmet } from "react-helmet";
const AddToy = () => {
  const { user } = useContext(AuthContext);
  const [imageUrl, setImageUrl] = useState("");
  const [toyName, setToyName] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const { displayName, email } = user;
    setSellerName(displayName);
    setSellerEmail(email);
  }, [user]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const toy = {
      toyname: toyName,
      toy_imageUrl: imageUrl,
      seller_name: sellerName,
      seller_email: sellerEmail,
      sub_category: subCategory,
      price: price,
      quantity: quantity,
      description: description,
      rating: rating,
    };
    if (price > 1 && rating > 1 && quantity >= 1) {
      fetch("https://b7-a11.vercel.app/addtoy", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(toy),
      })
        .then((resault) => {
          toast.success("Toy successfully added");
          console.log(resault);
          setImageUrl("");
          setToyName("");
          setSubCategory("");
          setPrice("");
          setRating("");
          setQuantity("");
          setDescription("");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.error("provide valid data");
    }
    // Perform form submission or API request to add the toy
    // Reset form fields
  };
  return (
    <>
      <Helmet>
        <title>LPZ || Add a Toy</title>
      </Helmet>
      <div className="px-2 py-5 lg:px-10">
        <div className="container mx-auto mt-8">
          <h2 className="text-4xl font-bold mb-4 text-center">Add Toy</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-4">
              <label htmlFor="image-url" className="mb-2 font-medium">
                Image URL
              </label>
              <input
                type="text"
                id="image-url"
                placeholder="Image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="toy-name" className="mb-2 font-medium">
                Name of the Toy
              </label>
              <input
                type="text"
                id="toy-name"
                placeholder="name of the toy"
                value={toyName}
                onChange={(e) => setToyName(e.target.value)}
                className="p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="seller-name" className="mb-2 font-medium">
                Seller Name
              </label>
              <input
                type="text"
                id="seller-name"
                value={sellerName}
                readOnly
                className="p-2 border border-gray-300 rounded bg-gray-100"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="seller-email" className="mb-2 font-medium">
                Seller Email
              </label>
              <input
                type="text"
                id="seller-email"
                value={sellerEmail}
                readOnly
                className="p-2 border border-gray-300 rounded bg-gray-100"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="sub-category" className="mb-2 font-medium">
                Sub Category
              </label>
              <input
                type="text"
                id="sub-category"
                placeholder="sub-category"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
                className="p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="price" className="mb-2 font-medium">
                Price
              </label>
              <input
                type="number"
                id="price"
                placeholder="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="rating" className="mb-2 font-medium">
                Rating
              </label>
              <input
                type="number"
                id="rating"
                placeholder="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="quantity" className="mb-2 font-medium">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                placeholder="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="description" className="mb-2 font-medium">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                placeholder="description"
                onChange={(e) => setDescription(e.target.value)}
                className="p-2 border border-gray-300 rounded resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddToy;
