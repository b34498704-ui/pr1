import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../API_KEY";
import './Hero.css'
import { MovieContext } from "../context";
import { Link } from 'react-router-dom';

const Hero  = ({ home }) => {
    const [hero , setHero] = useState([]);
      const { lang } = useContext(MovieContext);
 async   function getHero(key) {
        let res = await axios(
            `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${lang}&page=1`
        )
        setHero (res.data.results);
    }
    useEffect(() => {
        getHero (API_KEY)
    },[lang]);


    return (
            <div className='fr'>
             <div className='contai'>
                <br />
                <br />
                <br />
                 <h3>В тренде</h3>
                <br />
                
               
             <div className="tero">
                
               {hero.map((el) =>(
                 <div className='Vard'>
                 <div>
                     <Link to={`/movieDeatil/${el.id}`}>
              <img src={`https://image.tmdb.org/t/p/w440_and_h660_face//${el.poster_path} `} alt="" width='160px'/>
              </Link>
                 </div>
                 
                       <div>
                            <h1>    {el.title}</h1>
                       <h2>    {el.release_date}</h2>
                       </div>
                   
                     
                    </div> 
               ))};
               </div>
                <br />
                      <br />
                      <br />
                      <br />
                </div>
                
                </div>
    );
};

export default Hero;