import React, { useContext } from "react";
import Header from "./header/Header";
import { Route, Routes } from "react-router-dom";
import TopRated from "./topRated/TopRated";
import Popular from "./popular/Popular";
import Home from "./home/Home";
import MovieDeatil from "./movieDeatil/MovieDeatil";
import Footer from "./footer/Footer";
import { MovieContext } from "./context";
import Actors from "./actors/Actors";
import Search from "./search/Search";
import Favorite from "./favorite/Favorite";

const App = () => {
  const {dark} = useContext(MovieContext)
  return (
    <div id="app" style={{
      background : dark ? 'white' : "black",
      color : dark ? 'black' : "white",
    }}>
    

    <div >
      <Header />
      <Routes>
        <Route path="/popular" element={<Popular />} />
        <Route path="/topRated" element={<TopRated />} />
        <Route path="/movieDeatil/:movieid" element={<MovieDeatil />} />
        <Route path="/home" element={<Home />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/search/:kinoName" element={<Search />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      <Footer />
    </div>
  </div>  
  );
};

export default App;
