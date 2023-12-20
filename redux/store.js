import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import recipeSlice from "./slices/recipeSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    recipe: recipeSlice,
  },
});

export default store;
