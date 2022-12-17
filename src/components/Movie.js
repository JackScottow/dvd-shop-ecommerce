import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Basket from "./Basket";
import "../Css/Movie.css";

const Movie = (props) => {
  const { onAdd, cart } = props;
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
            <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${movieDetails.poster_path}`} alt={movieDetails.title} className="shadow" />
          </div>
          <div className="product-info-container shadow">
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
            <Button variant="dark" href={`https://www.imdb.com/title/${movieDetails.imdb_id}`} target="_blank">
              View on IMDb
            </Button>
            <br />
            <br />
            <Button variant="dark" onClick={() => props.onAdd(movieDetails)} className="add-cart-button">
              Add to cart
            </Button>
          </div>
        </div>
      ) : (
        // <Container fluid="sm">
        //   <Row className="mb-3">
        //     <Col>
        //       <Image src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${movieDetails.poster_path}`} />
        //     </Col>
        //     <Col>
        //   <h3>{movieDetails.title}</h3>
        //   <p>{movieDetails.tagline}</p>
        //   <p>{movieDetails.overview}</p>
        //   <p>Release Date : {movieDetails.release_date}</p>
        //   <p>Runtime : {movieDetails.runtime} Minutes</p>
        //   <p>Price £3.99</p>
        //   <p>
        //     Genre(s):
        //     {movieDetails.genres.map((genre) => ` ${genre.name}.`)}
        //   </p>
        //   <a href={`https://www.imdb.com/title/${movieDetails.imdb_id}`}>View on IMDb</a>
        //   <br />
        //   <br />
        //       <Button variant="dark">Add to Cart</Button>
        //     </Col>
        //   </Row>
        // </Container>
        ""
      )}
    </div>
  );
};

export default Movie;
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
// w440_and_h660_face
