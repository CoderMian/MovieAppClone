import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import moviesReducer from "./movies/movieSlice";
export const store = configureStore(
  {
    reducer: {
      movies: moviesReducer,
    },
  },
  applyMiddleware(thunk)
);
