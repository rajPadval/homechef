import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    recipes: [],
    reloadedRecipes: [],
  },
  reducers: {
    setRecipes: (state, action) => {
      state.recipes = action.payload;
    },
    setReloadedRecipes: (state, action) => {
      state.reloadedRecipes = action.payload;
    },
  },
});

export const { setRecipes, setReloadedRecipes } = recipeSlice.actions;
export default recipeSlice.reducer;
