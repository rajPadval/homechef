import React, { useEffect } from "react";
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login(user));
      } else {
        dispatch(logout());
      }
    });

    return () => {
      unsubscribe(); // Unsubscribe from the auth state change listener when component unmounts
    };
  }, []);

  return (
    <nav className="flex justify-between px-3 md:px-4 lg:px-5 shadow-md py-4 mb-10 bg-white">
      <Link to="/" className="font-bold text-xl TEXT-FONT text-red-500">
        HomeChef
      </Link>
      <div className="flex gap-3 text-md justify-center items-center ">
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
            className="text-gray-600  hover:text-red-500"
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
