import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_KEY } from "../API_KEY";
import { useParams } from 'react-router-dom';
import MovieCard from '../movieCard/MovieCard';

const Search = () => {
    const [search, setSearch] = useState([]);
    const {kinoName} = useParams();



 async   function getSearch(key) {
    let res = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${kinoName}`);
    setSearch(res.data.results);
        
    }


    useEffect(() => {
      getSearch(API_KEY);
      }, [kinoName]);
    return (
        <div className='popular'>
            {search.map((el) => (
                <MovieCard el={el} />
            ))}
        </div>
    );
};

export default Search;