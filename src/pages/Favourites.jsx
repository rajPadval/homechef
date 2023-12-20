import { collection, doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { useDispatch, useSelector } from "react-redux";

import toast from 'react-hot-toast'
import { PuffLoader } from "react-spinners";
import RecipeCard from "../components/RecipeCard";

const Favourites = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [favRecipes, setFavRecipes] = useState([]);

  const getFavorites = async () => {
    try {
      const docRef = doc(db, "favourites", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const favorites = docSnap.data().favourites;
        setFavRecipes(favorites);
      } else {
        toast.error("No favourites found");
      }
    } catch (error) {
      console.error("Error getting favorites:", error.message);
    } finally {
      setIsLoading(false); // Set loading to false after the request completes or encounters an error
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

  const user = useSelector((state) => state.auth.user);

  return (
    <div className=" flex flex-col justify-between items-center">
      <h1 className="text-2xl text-center mb-10">Favourites</h1>

      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 mb-10">
        {isLoading ? (
          <PuffLoader color="#36d7b7" />
        ) : favRecipes === null || favRecipes.length === 0 ? (
          <h1 className="text-2xl text-center col-span-4 text-gray-600">
            Nothing Added To Favourites
          </h1>
        ) : (
          favRecipes?.map((recipe) => {
            return (
              <RecipeCard
                key={recipe.idMeal}
                id={recipe.idMeal}
                image={recipe.strMealThumb}
                title={recipe.strMeal}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Favourites;
