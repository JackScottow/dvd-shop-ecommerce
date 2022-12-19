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
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e4082d8b6a175161863c83b42482f659&language=en-US&append_to_response=videos
    `)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
      });
  }, []);
  if (movieDetails) {
    document.title = movieDetails.title;
  }
  console.log(movieDetails);
  return (
    <div className="movie-container">
      {movieDetails ? (
        <div className="product-page">
          <div className="product-image-container">
            <img src={movieDetails.poster_path ? `https://www.themoviedb.org/t/p/w440_and_h660_face/${movieDetails.poster_path}` : NoImage} alt={movieDetails.title} className="shadow-sm" />
          </div>
          <div className="product-info-container shadow-sm">
            <h1>{movieDetails.title}</h1>
            <h4>{movieDetails.tagline}</h4>
            <div>{movieDetails.overview}</div>
            <div>Release Date : {movieDetails.release_date}</div>
            <div>Runtime : {movieDetails.runtime} Minutes</div>
            <div>Price £2.99</div>
            <div>
              Genre(s):
              {movieDetails.genres.map((genre) => ` ${genre.name}.`)}
            </div>
            {movieDetails.imdb_id && movieDetails.imdb_id !== "" ? (
              <Button variant="warning" href={`https://www.imdb.com/title/${movieDetails.imdb_id}`} target="_blank">
                View on IMDb
              </Button>
            ) : (
              ""
            )}

            <br />
            <br />
            <Button variant="success" onClick={() => onAdd(movieDetails)} className="add-cart-button">
              {`Add to cart `}
              <FontAwesomeIcon icon={faCartShopping} />
            </Button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Movie;
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
// w440_and_h660_face
