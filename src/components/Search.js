import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Pagination from "./Pagination";
import "../Css/Gallery.css";

const Search = ({ onAdd }) => {
  const searchTerm = useParams().searchterm;
  const [array, setArray] = useState(null);

  // e4082d8b6a175161863c83b42482f659
  // https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=e4082d8b6a175161863c83b42482f659&language=en-US&page=1&include_adult=false&query=${searchTerm}`
    )
      .then((response) => response.json())
      .then((data) => setArray([...data.results]));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

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
