import { useContext, useState } from "react";
import { FaBars, FaSearch, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [focus, setFocus] = useState(false);
  const [searchResault, setSearchResault] = useState([]);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleSearch = (e) => {
    const text = e.target.value;
    // console.log(text);
    if (text === "") {
      setSearchResault([]);
    } else {
      fetch(`http://localhost:5000/search/${text}`)
        .then((res) => res.json())
        .then((data) => setSearchResault(data))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="navbar w-full bg-base-100 px-5 flex-col lg:flex-row space-y-2">
        <div className="navbar-start flex w-full justify-center lg:w-1/2 lg:justify-normal">
          <Link
            to="/"
            className="normal-case text-3xl font-mono font-extrabold italic"
          >
            LearnPlayZone
          </Link>
        </div>
        <div className="navbar-end space-x-2 flex justify-center w-full lg:w-1/2 lg:justify-end">
          {user ? (
            <>
              <button onClick={logOut} className="btn">
                Log Out
              </button>
              <button className="">
                {user ? (
                  <>
                    {user?.photoURL ? (
                      <img
                        className="w-10 h-10 rounded-full border overflow-hidden"
                        src={user?.photoURL}
                        alt={user?.displayName}
                        title={user?.displayName}
                      />
                    ) : (
                      <FaUserCircle className="w-10 h-10" />
                    )}
                  </>
                ) : (
                  ""
                )}
              </button>
            </>
          ) : (
            <>
              <button className="btn">
                <Link to="/register">Register</Link>
              </button>
              <button className="btn">
                <Link to="/login">Login</Link>
              </button>
            </>
          )}
        </div>
      </div>
      <hr className="horizontal" />
      <div className="navbar px-5 bg-base-100 w-full lg:flex lg:justify-between">
        <div className={`navbar-start lg:w-0 lg:hidden`}>
          <li
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className={`btn me-4 lg:hidden`}
          >
            <FaBars className="h-5 w-5" />
          </li>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`navbar-center bg-white shadow z-10 lg:z-0 m-0 p-2 lg:p-0 lg:shadow-none space-x-2 transition-all ${
            isOpen ? "translate-x-0 ms-0" : "-translate-x-full -ms-5"
          } lg:translate-x-0 menu menu-vertical z-20 absolute top-44 lg:relative lg:top-auto lg:menu-horizontal px-1`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/alltoys">All Toys</Link>
          </li>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/addToy">Add a toy</Link>
              </li>
              <li>
                <Link to="/mytoys">My toy</Link>
              </li>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="navbar-end">
          <div className="form-control relative">
            <div className="input">
              <input
                onFocus={() => {
                  setFocus(true);
                }}
                onBlur={() => {
                  setTimeout(() => {
                    setFocus(false);
                  }, 500);
                }}
                onChange={(e) => {
                  handleSearch(e);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
                type="text"
                placeholder="Search…"
                className={`input input-bordered transition-all lg:w-auto p-4`}
              />
              {/* {console.log(searchResault)} */}
            </div>
            <div
              className={`bg-white z-20 border rounded shadow-md py-2 px-1 w-full h-auto absolute top-14 left-0 ${
                focus ? "block" : "hidden"
              }`}
            >
              {searchResault.length !== 0 && !searchResault[0]?.data ? (
                searchResault.map((searchResaul) => {
                  const { _id, toy_imageUrl, toyname, price } = searchResaul;
                  return (
                    <Link
                      to={`/toys/details/${_id}`}
                      className="flex border hover:bg-slate-100 py-2 gap-2 items-center shadow mb-1 cursor-pointer rounded"
                      key={_id}
                    >
                      <img
                        className="w-12 h-12"
                        src={toy_imageUrl}
                        alt={toyname}
                      />
                      <div>
                        <h1 className="text-xl text-gray-900 font-bold">
                          {toyname}
                        </h1>
                        <p className="text-gray-700 font-bold">
                          price : ${price}
                        </p>
                      </div>
                    </Link>
                  );
                })
              ) : (
                <div>
                  <h1 className="text-2xl text-gray-900 text-center font-bold">
                    No toy found <br /> type a valid name
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr className="horizontal" />
    </>
  );
};

export default Navbar;
