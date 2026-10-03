import React, { useContext, useState } from "react";
import card1 from "../assets/img/headerLogo.svg";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { MdNightlightRound } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import { MovieContext } from "../context";

const Header = () => {
  const [movieName, setMovieName] = useState("");
  const { dark, setDark, lang, setLang } = useContext(MovieContext);
  const nav = useNavigate();

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="headerRight">
            <Link to="/home">
              <img src={card1} alt="" width="300px" />
            </Link>
            <Link to="/popular">Популярные</Link>
            <Link to="/topRated">Топ рейтинг</Link>
            <Link to="/favorite">Избранное</Link>
          </div>
          <div className="headerLeft">
            <div onClick={() => setDark(!dark)}>
              {dark ? <CiSun /> : <MdNightlightRound />}
            </div>
            <select onChange={(e) => setLang(e.target.value)}>
              <option value="ru-RU">RU</option>
              <option value="en-US">EN</option>
            </select>
            {/* <div className="iconcHeader"> */}
            <input
              type="text"
              placeholder="Найти фильм, сериал.."
              onChange={(e) => setMovieName(e.target.value)}
            />
            <a onClick={() => nav(`/search/${movieName}`)}>
              <FaSearch />
            </a>

            {/* </div>  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
