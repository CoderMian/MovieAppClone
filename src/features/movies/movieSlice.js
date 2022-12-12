import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi";
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const APIKey = "18ba99c7";
    const response = await MovieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie`
    );
    // console.log("inner movies data:", response.data);
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "shows/fetchAsyncShows",
  async (term) => {
    const APIKey = "18ba99c7";

    const response = await MovieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=series`
      // "https://www.omdbapi.com/?i=tt3896198&apikey=18ba99c7&s=friend&type=series"
    );
    return response.data;
  }
);

export const fetchAsyncDetails = createAsyncThunk(
  "moviesShows/fetchAsyncDetails",
  async (id) => {
    // console.log("asyn id:", id);
    const APIKey = "18ba99c7";
    const response = await MovieApi.get(`?apikey=${APIKey}&i=${id}&Plot=Full`);
    return response.data;
  }
);

const initialState = {
  movies: [],
  shows: [],
  selectedMovieShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncShows.pending]: () => {
      // console.log("Pending");
    },
    [fetchAsyncShows.rejected]: (state, obj) => {
      console.log({ rejected: obj });
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      // console.log("Fetched Successfully");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      // console.log("Fetched Movie Successfully");
      return { ...state, movies: payload };
    },
    [fetchAsyncDetails.fulfilled]: (state, { payload }) => {
      // console.log("Fetched Detail Successfully");
      return { ...state, selectedMovieShow: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllMoviesorShows = (state) => state.movies.selectedMovieShow;
export default movieSlice.reducer;
