import React from "react";
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Pagination from "./Pagination";
import "../Css/Gallery.css";

const Search = ({ onAdd }) => {
  let searchTerm = useParams().searchterm;
  const [array, setArray] = useState(null);
  // e4082d8b6a175161863c83b42482f659
  // https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg
  //   useEffect(() => {
  //     Promise.all([fetch(`https://api.themoviedb.org/3/search/movie?api_key=e4082d8b6a175161863c83b42482f659&language=en-US&page=1&include_adult=false&query=${searchTerm}&page=1`), fetch(`https://api.themoviedb.org/3/search/movie?api_key=e4082d8b6a175161863c83b42482f659&language=en-US&page=1&include_adult=false&query=${searchTerm}&page=1`), fetch(`https://api.themoviedb.org/3/search/movie?api_key=e4082d8b6a175161863c83b42482f659&language=en-US&page=1&include_adult=false&query=${searchTerm}&page=1`)])

  //       .then((res) => Promise.all(res.map((r) => r.json())))
  //       .then((i) => {
  //         setArray([...i[0].results, ...i[1].results, ...i[2].results]);
  //       });
  //   });
  return (
    <div>
      {array ? (
        <div className="products-container">
          <Pagination list={array} onAdd={onAdd} />
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Search;
