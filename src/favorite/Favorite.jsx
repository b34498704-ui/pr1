import React, { useContext } from "react";
import { MovieContext } from "../context";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import './Favorite.css'

const Favorite = () => {
  const { favorite, setFavorite } = useContext(MovieContext);

  function deleteFavorite(proId) {
    let res = favorite.filter((el) => el.id !== proId);
    localStorage.setItem("favorite", JSON.stringify(res));
    setFavorite(res);
  }
  return (
    <div className="popular">
      {favorite.map((el) => (
        <div key={el.id} className="popularCard">
              <Link to={`/movieDeatil/${el.id}`}>
              <img src={`https://image.tmdb.org/t/p/w440_and_h660_face//${el.poster_path} `} alt="" width='250px'/>
              </Link>
              <h1>{el.title} </h1>
              <p>{el.release_date} </p>
               <h2 className="deleteIcon">
                <MdDelete onClick={() => deleteFavorite(el.id)} />
               </h2>
            </div>
        
      ))}
    </div>
  );
};

export default Favorite;
