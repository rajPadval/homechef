import React from "react";
import { useParams } from "react-router-dom";

const RecipesPage = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default RecipesPage;
