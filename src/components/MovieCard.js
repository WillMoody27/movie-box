import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {
  const { movie } = props;
  return (
    <div className="movie-card-component">
      <div className="movie">
        <div className="movie-details">
          {/* Provide image poster if no image avail for movie */}
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400"
            }
            alt={movie.Title}
          />
          <div className="movie-year">
            <p>{movie.Year}</p>
          </div>
          <div className="movie-info">
            <span className="movie-type">{movie.Type}</span>
            <h3 className="movie-title">{movie.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
