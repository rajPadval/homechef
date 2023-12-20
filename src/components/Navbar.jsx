import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login, logout } from "../../redux/slices/authSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import toast from "react-hot-toast";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("Logged out successfully");
        dispatch(logout());
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  useLayoutEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(login(user));
    });
  }, []);

  return (
    <nav className="flex justify-between px-3 md:px-4 lg:px-5 shadow-md py-4 mb-10 bg-white">
      <Link to="/" className="font-bold text-lg">
        HomeChef
      </Link>
      <div className="flex gap-3 text-lg ">
        <Link to="/about" className="text-gray-600 hover:text-black">
          About
        </Link>
        {isAuth && (
          <Link to="/favourites" className="text-gray-600 hover:text-black">
            Favourites
          </Link>
        )}

        {isAuth ? (
          <button
            className="text-gray-600 hover:text-black"
            onClick={logoutUser}
          >
            Logout
          </button>
        ) : (
          <Link to="/Login" className="text-gray-600 hover:text-black">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
