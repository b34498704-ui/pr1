import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../API_KEY";
import "./Home.css";
import Hero from "../hero/Hero";




const Home = () => {
   
  const [backgroundImg, setBackgroundImg] = useState("");
  console.log(backgroundImg);
  


  async function getBackgroundImg(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    );
    let {results} = res.data
   results.map((el) => setBackgroundImg(el.backdrop_path));
   let backgroundImg = Math.round(Math.random() * results.length);
   setBackgroundImg(results[backgroundImg]?.backdrop_path );
  
  }
  

  useEffect(() => {
    getBackgroundImg(API_KEY);
  }, []);

  return (
    <div id="home" 
   style={{
        background: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backgroundImg})`
        }}>
     
      

      <div className="home">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <div className="ref">
          <h3>Добро пожаловать.</h3>
          <h4>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h4>
          <div className="asr">
            <input placeholder="Найти фильм, сериал, персону." type="text" />
            <button className="ls">Поиск</button>
          </div>
        </div>
      </div>
      <Hero />
    </div>
    
  );
};

export default Home
