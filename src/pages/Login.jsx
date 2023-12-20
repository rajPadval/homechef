import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast.success("Logged in successfully");
        dispatch(login(user));
        navigate("/")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
          <div className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
            Login
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-normal mb-2"
              for="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              v-model="form.email"
              type="email"
              required
              autofocus
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-normal mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              v-model="form.password"
              type="password"
              placeholder="Password"
              name="password"
              required
              autocomplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
              onClick={loginUser}
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="text-xs mt-2">
            <span className="mr-2 ">Or</span>
            <Link to="/signup" className="text-blue-500 hover:underline">
              Create an account
            </Link>
          </div>
        </div>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 HomeChef. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
