import { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import { PuffLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { setRecipes } from "../../redux/slices/recipeSlice";

const Home = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipe.recipes);

  // const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("No recepies to show");

  // function to search recipes
  const searchRecipes = async (e) => {
    setIsLoading(true);

    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${e.target.value}`
    );

    const data = await res.data;
    dispatch(setRecipes(data.meals));
    setIsLoading(false);
  };

  const getInitialRecipes = async () => {
    setIsLoading(true);

    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=`
    );

    const data = await res.data;
    dispatch(setRecipes(data.meals));
    setIsLoading(false);
  };

  useEffect(() => {
    getInitialRecipes();
  }, []);

  return (
    <main className=" flex flex-col justify-between items-center">
      {/*search input below  */}
      <div className="flex justify-between  lg:w-[60vw] mb-10">
        <input
          type="text"
          name="search"
          id="search"
          onChange={searchRecipes}
          placeholder="Enter the ingredient"
          className="border px-5 py-3 rounded-xl shadow-md  lg:flex-1 focus:border-red-500 outline-none"
        />
      </div>

      {/* we will be going to map the component according to the data, to get list dynamically */}
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 mb-10">
        {isLoading ? (
          <PuffLoader color="#36d7b7" />
        ) : recipes === null || recipes.length === 0 ? (
          <h1 className="text-2xl text-center col-span-4">{message}</h1>
        ) : (
          recipes?.map((recipe) => {
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
    </main>
  );
};

export default Home;
