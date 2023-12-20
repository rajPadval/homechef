import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipesPage = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState();

  const getRecipe = async () => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    const data = await res.data;
    setRecipe(data.meals[0]);
  };

  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <div className="flex justify-center items-center mb-10">
      <div className="bg-white w-[60vw] p-5">
        <div className="flex justify-evenly items-center">
          <img
            src={recipe?.strMealThumb}
            alt={recipe?.strMeal}
            width={250}
            className="rounded-full"
          />
          <div>
            <h1 className="text-5xl text-center flex-1">{recipe?.strMeal}</h1>
          </div>
        </div>
        <div className="my-5">
          <span className="font-bold text-gray-800 text-xl">Recipe</span>
          <p>{recipe?.strInstructions}</p>
        </div>
        <div className="mb-5 flex flex-col gap-2">
          <span className="font-bold text-gray-800 text-xl">Ingredients </span>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-gray-300 p-1 rounded-md">
              {recipe?.strIngredient1} {recipe?.strMeasure1}
            </span>
            <span className="bg-gray-300 p-1 rounded-md">
              {recipe?.strIngredient2} {recipe?.strMeasure2}
            </span>
            <span className="bg-gray-300 p-1 rounded-md">
              {recipe?.strIngredient3} {recipe?.strMeasure3}
            </span>
            <span className="bg-gray-300 p-1 rounded-md">
              {recipe?.strIngredient4} {recipe?.strMeasure4}
            </span>
            <span className="bg-gray-300 p-1 rounded-md">
              {recipe?.strIngredient5} {recipe?.strMeasure5}
            </span>
            <span className="bg-gray-300 p-1 rounded-md">
              {recipe?.strIngredient6} {recipe?.strMeasure6}
            </span>
            <span className="bg-gray-300 p-1 rounded-md">
              {recipe?.strIngredient7} {recipe?.strMeasure7}
            </span>
            <span className="bg-gray-300 p-1 rounded-md">
              {recipe?.strIngredient8} {recipe?.strMeasure8}
            </span>
            <span className="bg-gray-300 p-1 rounded-md">
              {recipe?.strIngredient9} {recipe?.strMeasure9}
            </span>
            <span className="bg-gray-300 p-1 rounded-md">
              {recipe?.strIngredient10} {recipe?.strMeasure10}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesPage;
