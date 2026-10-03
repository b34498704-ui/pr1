import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../API_KEY";
import axios from "axios";
import { MdFavoriteBorder, MdMenu } from "react-icons/md";
import { IoMdBookmark } from "react-icons/io";
import "./MovieDeatil.css";
import { MovieContext } from "../context";
import Actors from "../actors/Actors";
import { useParams } from "react-router-dom";


const MovieDeatil = () => {
  const [movieDeatil, setMovieDeatil] = useState({});
  const { lang,setFavorite } = useContext(MovieContext);
  const { movieid } = useParams();


  function addTofavorite(item) {
    let res = JSON.parse(localStorage.getItem("favorite")) || [];
    let result = [...res,item];
    localStorage.setItem("favorite" , JSON.stringify(result));
    setFavorite(result)
  }

  async function getMovieDeatil(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/${movieid}?api_key=${key}&language=${lang}&page=1 `,
    );
    console.log(res.data);
    setMovieDeatil(res.data);
  }

  useEffect(() => {
    getMovieDeatil(API_KEY);
  }, [lang]);
  return (
    
    <div
      id="movieDeatil"
      style={{
        background: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movieDeatil.backdrop_path})  `,
      }}
    >
<br />
<br />
<br />

      <div className="container">
        <br />
        <br />
        <br />

        <div className="movieDeatil">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w440_and_h660_face//${movieDeatil.poster_path} `}
              alt=""
              width="250px"
            />
          </div>
          <div className="movieDeatilTitle">
            <div>
              <h1>
                {movieDeatil.title}({movieDeatil.release_date?.slice(0, 4)})
              </h1>
              <h4>
                {movieDeatil.release_date}
                {movieDeatil.genres?.map((el) => (
                  <span>{el.name} </span>
                ))}
              </h4>
              <h5>{movieDeatil.runtime} </h5>
            </div>
            <div class="rating">
              <span class="rating-value">79%</span>
              <br />
              <br />
              <br />
              <h4>Rating</h4>
            </div>
            <div className="by">
              <button className="asrc">
                <MdFavoriteBorder onClick={() => addTofavorite(movieDeatil)}/>
              </button>
              <button className="asrc">
                <MdMenu />
              </button>
              <button className="asrc">
                <IoMdBookmark />
              </button>
            </div>
            <h3>{movieDeatil.tagline} </h3>
            <p>{movieDeatil.overview} </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
      <Actors />
      {/* <div>
        <Videos videoid={movieid} />
      </div> */}
      
    </div>
  );
};

export default MovieDeatil;
