import React from "react";

// importing components to provide routing
import { BrowserRouter, Route, Routes } from "react-router-dom";

// importing page components here
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

// importing Provider and store from redux to provide state to whole app
import { Provider } from "react-redux";
import store from "../redux/store";
import Navbar from "./components/Navbar";
import RecipesPage from "./pages/RecipesPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      {/* Configuring redux-toolkit so that the state can be accessed in whole app */}
      <Provider store={store}>
        {/* Configuring react-router-dom to provide routing */}
        <BrowserRouter>
          {/* Adding Navigation bar here so that it will be visible on all the pages */}
          <Navbar />
          <Toaster position="top-center" reverseOrder={false} />
          <Routes>
            {/* Defining routes for the various pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/recipe/:id" element={<RecipesPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
