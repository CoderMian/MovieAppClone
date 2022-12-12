import React from "react";
import Slider from "react-slick";
import { Settings } from "../../common/Setting";
import { useSelector } from "react-redux";
import { getAllShows, getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
const MovieListing = () => {
  let renderShows = "";
  let renderMovies = "";
  const movies = useSelector(getAllMovies);
  // console.log("Movies....", movies);
  const shows = useSelector(getAllShows);

  if (shows.length === 0) {
    // console.log("Data not fetched.....");
  } else {
    renderShows =
      shows.Response === "True" ? (
        shows.Search.map((show, index) => {
          return <MovieCard key={index} data={show}></MovieCard>;
        })
      ) : (
        <div className="movies-error">
          <h3>{shows.Error}</h3>
        </div>
      );
  }
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie}></MovieCard>;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <Slider className="movie-container" {...Settings}>
          {renderMovies}
        </Slider>
      </div>
      <div className="movie-list">
        <h2>Shows</h2>
        <Slider className="movie-container" {...Settings}>
          {renderShows}
        </Slider>
      </div>
    </div>
  );
};

export default MovieListing;
