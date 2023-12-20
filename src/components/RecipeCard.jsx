import React from "react";
import { HiHeart } from "react-icons/hi2";
import { Link } from "react-router-dom";

const RecipeCard = ({ id, image, title }) => {
  return (
    <Link
      to={`/recipe/${id}`}
      className="rounded-md shadow-md p-3  flex flex-col justify-between gap-2 "
      key={id}
    >
      <div className="overflow-hidden">
        <img
          src={image}
          width={250}
          className="rounded-md hover:scale-110 transition-all duration-500 ease-in-out cursor-grab"
          alt={title}
        />
      </div>
      <div className="flex justify-between items-center">
        <span className="">
          {title.slice(0, 20)} {title.length > 20 && "..."}
        </span>
        <HiHeart className="text-red-500" />
      </div>
    </Link>
  );
};

export default RecipeCard;
