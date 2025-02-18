import React from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../Css/Movie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NoImage from "../Images/NoImage.jpg";

const Movie = ({ onAdd }) => {
  const movieId = useLocation().state;
  const [movieDetails, setMovieDetails] = useState(null);

  // e4082d8b6a175161863c83b42482f659
  // https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e4082d8b6a175161863c83b42482f659&language=en-US&append_to_response=videos`)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
      });
  }, [movieId]);

  if (movieDetails) {
    document.title = movieDetails.title;
  }

  return (
    <div className="movie-container">
      {movieDetails ? (
        <div className="product-page">
          <div className="product-image-container">
            <img src={movieDetails.poster_path ? `https://www.themoviedb.org/t/p/w440_and_h660_face/${movieDetails.poster_path}` : NoImage} alt={movieDetails.title} />
          </div>

          <div className="product-info-container">
            <h1 className="movie-title">{movieDetails.title}</h1>
            {movieDetails.tagline && <h2 className="movie-tagline">{movieDetails.tagline}</h2>}

            <p className="movie-overview">{movieDetails.overview}</p>

            <div className="movie-details">
              <div className="movie-detail-item">
                <span className="detail-label">Release Date</span>
                <span className="detail-value">{movieDetails.release_date}</span>
              </div>

              <div className="movie-detail-item">
                <span className="detail-label">Runtime</span>
                <span className="detail-value">{movieDetails.runtime} Minutes</span>
              </div>

              <div className="movie-detail-item">
                <span className="detail-label">Genres</span>
                <div className="movie-genres">
                  {movieDetails.genres.map((genre) => (
                    <span key={genre.id} className="genre-tag">
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="movie-price">£2.99</div>

            <div className="movie-actions">
              {movieDetails.imdb_id && (
                <Button variant="warning" href={`https://www.imdb.com/title/${movieDetails.imdb_id}`} target="_blank" className="action-button imdb-button">
                  View on IMDb
                </Button>
              )}

              <Button variant="success" onClick={() => onAdd(movieDetails)} className="action-button add-cart-button">
                Add to Cart
                <FontAwesomeIcon icon={faCartShopping} />
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};

export default Movie;
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
// w440_and_h660_face
