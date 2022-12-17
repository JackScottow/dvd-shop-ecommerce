import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import genreList from "../Data/Genres";
import { Card } from "react-bootstrap";
import Pagination from "./Pagination";

const Genre = () => {
  const genreName = useParams().genre;
  const genreId = genreList.filter((item) => item.name === genreName).map((item) => item.id);

  const [array, setArray] = useState(null);
  // e4082d8b6a175161863c83b42482f659
  // https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg
  useEffect(() => {
    Promise.all([
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e4082d8b6a175161863c83b42482f659&with_genres=${genreId}&region=US&page=1`),
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e4082d8b6a175161863c83b42482f659&with_genres=${genreId}&region=US&page=2`),
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e4082d8b6a175161863c83b42482f659&with_genres=${genreId}&region=US&page=3`),
    ])
      .then((res) => Promise.all(res.map((r) => r.json())))
      .then((i) => {
        setArray([...i[0].results, ...i[1].results, ...i[2].results]);
      });
  }, []);

  return (
    <div>
      <h1 className="page-title">{genreName}</h1>
      {array ? (
        <div className="products-container">
          <Pagination list={array} />
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Genre;
