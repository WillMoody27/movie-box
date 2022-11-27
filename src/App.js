import React from "react";
import { useEffect } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import { useState } from "react";

const API_URL = "http://www.omdbapi.com/?apikey=532aa81e";

const App = () => {
  // Static Object Movie
  // const movie1 = {
  //   Title: "The Amazing Spider-Man",
  //   Year: "2012",
  //   imdbID: "tt0948470",
  //   Type: "movie",
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg",
  // };

  // Set default state of movies to empty array
  const [movies, setMovies] = useState([]);
  // setState for Search
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch Data From API
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    // Set movies for search state
    setMovies(data.Search);
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="app">
      <h1 className="main-head">Movie-Box</h1>
      {/* Search */}
      <div className="search">
        <input
          className="search-input"
          type="text"
          placeholder="Search Films"
          value={searchTerm}
          // Dynamically set value using onChange for input
          onChange={(e) => {
            setSearchTerm(e.target.value); // Dynamically re-render movies
          }}
        />
        <button
          className="search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        >
          Search Films
        </button>
      </div>
      {/* Search */}
      {/* Dynamically map through movie into new array */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            // Set the key of the movies
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        // If no Movies are available in DB
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
