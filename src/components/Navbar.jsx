import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-between px-3 md:px-4 lg:px-5 shadow-md py-4 mb-10 bg-white">
      <Link to="/" className="font-bold text-lg">
        HomeChef
      </Link>
      <div className="flex gap-3 text-lg ">
        <Link to="/about" className="text-gray-600 hover:text-black">
          About
        </Link>
        <Link to="/Login" className="text-gray-600 hover:text-black">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
