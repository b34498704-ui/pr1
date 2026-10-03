import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../API_KEY";
import "./Actors.css";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context";
import Videos from "../video/Videos";

const Actors = ({ kinoid }) => {
  const [actors, setActors] = useState([]);
  const { lang } = useContext(MovieContext);
  const { movieid } = useParams();
  console.log(actors);

  async function getActors(key) {
    let actorApi = await axios(
      `https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=${key}&language=${lang}`,
    );
    let { data } = actorApi;
    setActors(data.cast);
  }

  useEffect(() => {
    getActors(API_KEY);
  }, [lang]);

  return (
    <div className="actors">
      <div className="contaib">
        <br />
        <h3>В главных ролях</h3>
        <br />
        <br />

        <br />

        <div className="reto">
          {actors.map((el) => (
            <div className="tard">
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w440_and_h660_face//${el.profile_path}`}
                  alt=""
                  width="150px"
                />
              </div>

              <div>
                <h1> {el.original_name}</h1>
                <h2> {el.character}</h2>
              </div>
            </div>
          ))}
          ;
        </div>

        <br />
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
       <Videos videoid={movieid} />
       </div>
    </div>
       
  );
};

export default Actors;
