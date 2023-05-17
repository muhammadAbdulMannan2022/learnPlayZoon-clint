import { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  return (
    <div className="navbar bg-base-100 w-full">
      <div className="navbar-start">
        <li onClick={() => setIsOpen(!isOpen)} className={`btn me-4 lg:hidden`}>
          <FaBars className="h-5 w-5" />
        </li>
        <Link
          to="/"
          className="normal-case text-2xl font-mono font-extrabold italic"
        >
          LearnPlayZone
        </Link>
      </div>
      <div
        className={`navbar-center shadow m-0 p-3 lg:p-0 lg:shadow-none space-x-2 transition-all ${
          isOpen ? "translate-x-0 ms-0" : "-translate-x-full -ms-5"
        } lg:translate-x-0 menu menu-vertical absolute top-20 lg:relative lg:top-auto lg:menu-horizontal px-1`}
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
        <li>
          <Link to="/">Add a toy</Link>
        </li>
        <li>
          <Link to="/">My toy</Link>
        </li>
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
  );
};

export default Navbar;
