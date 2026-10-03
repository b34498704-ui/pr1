import {  useEffect, useState } from "react";
import { MovieContext } from ".";

const RootContext = ({children}) => {
    const [dark, setDark] = useState(true);
    const [lang, setLang] = useState('ru-RU');
    const [favorite, setFavorite] = useState([]);

    function getFavorite() {
      let res = JSON.parse(localStorage.getItem("favorite")) || [];
       setFavorite(res)
    }


     useEffect(() => {
        getFavorite();
      }, []);


  return <MovieContext.Provider value={{lang, setLang, dark, setDark, favorite, setFavorite}}>
   {children}
   </MovieContext.Provider>;
};

export default RootContext;
