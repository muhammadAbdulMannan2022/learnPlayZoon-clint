import { useContext, useState } from "react";
import { FaBars, FaSearch, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
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
          className={`navbar-center bg-white shadow z-10 lg:z-0 m-0 p-2 lg:p-0 lg:shadow-none space-x-2 transition-all ${
            isOpen ? "translate-x-0 ms-0" : "-translate-x-full -ms-5"
          } lg:translate-x-0 menu menu-vertical absolute top-44 lg:relative lg:top-auto lg:menu-horizontal px-1`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">All Toys</Link>
          </li>
          <li>
            <Link to="/">Blogs</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/addToy">Add a toy</Link>
              </li>
              <li>
                <Link to="/">My toy</Link>
              </li>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="navbar-end">
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className={`input input-bordered transition-all ${
                  searchIsOpen ? "w-auto" : "w-0 p-0 m-0"
                } lg:w-auto p-4`}
              />
              <button
                onClick={() => {
                  setSearchIsOpen(!searchIsOpen);
                }}
                className={`btn rounded-full lg:btn-square`}
              >
                <FaSearch className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="horizontal" />
    </>
  );
};

export default Navbar;
