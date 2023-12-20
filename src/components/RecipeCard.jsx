import React from "react";
import { HiHeart } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import toast from "react-hot-toast";
import {
  arrayUnion,
  doc,
  getDoc,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
const RecipeCard = ({ id, image, title }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const user = useSelector((state) => state.auth.user);

  const addToFavourite = async (id, title, image) => {
    // Get the document reference
    const userDocRef = doc(db, "favourites", user.uid);

    // Check if the document exists
    const docSnapshot = await getDoc(userDocRef);

    if (docSnapshot.exists()) {
      // Document exists, update the favorites array
      await updateDoc(userDocRef, {
        favourites: arrayUnion({
          idMeal: id,
          strMeal: title,
          strMealThumb: image,
        }),
      });
    } else {
      // Document doesn't exist, create it with the favorites array
      const docData = {
        email: user.email,
        favourites: [
          {
            idMeal: id,
            strMeal: title,
            strMealThumb: image,
          },
        ],
      };

      await setDoc(userDocRef, docData);
      toast.success("Added to Favorites");
    }
  };

  return (
    <div
      className="rounded-md shadow-md p-3  flex flex-col justify-between gap-2 "
      key={id}
    >
      <Link to={`/recipe/${id}`} className="overflow-hidden">
        <img
          src={image}
          width={250}
          className="rounded-md hover:scale-110 transition-all duration-500 ease-in-out cursor-grab"
          alt={title}
        />
      </Link>
      <div className="flex justify-between items-center">
        <span className="">
          {title.slice(0, 20)} {title.length > 20 && "..."}
        </span>
        <HiHeart
          className="text-red-500"
          onClick={() => {
            isAuth
              ? addToFavourite(id, title, image)
              : toast.error("Please login to add to favourites");
          }}
        />
      </div>
    </div>
  );
};

export default RecipeCard;
