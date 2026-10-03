import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../API_KEY";
import "./TopRated.css";
import MovieCard from "../movieCard/MovieCard";
import Popular from "../popular/Popular";
import { MovieContext } from "../context";

const TopRated = () => {
  const [popular, setPopular] = useState([]);
    const { lang } = useContext(MovieContext);


  async function getPopular(key) {
    let islam = await axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${lang}&page=1`,
    );
    setPopular(islam.data.results);
  }

  useEffect(() => {
    getPopular(API_KEY);
  }, [lang]);

  return (
    <div id="popular">
      <div className="container">
        <div className="popular">
          {popular.map((el) => (
            <MovieCard el={el} />
          ))}
          <div>
            <br />
            <br />
            <button className="er">More films</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
