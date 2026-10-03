import React from 'react';
import { Link } from 'react-router-dom';


const MovieCard = ({el}) => {
    
    
    return (
        <div>
             <div className="popularCard">
              <Link to={`/movieDeatil/${el.id}`}>
              <img src={`https://image.tmdb.org/t/p/w440_and_h660_face//${el.poster_path} `} alt="" width='250px'/>
              </Link>
              <h1>{el.title} </h1>
              <h2>{el.release_date} </h2>
            </div>
            
        </div>
    );
};

export default MovieCard;