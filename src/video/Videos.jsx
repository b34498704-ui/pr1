import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../API_KEY";
import "./Video.css";

const Videos = ({ videoid }) => {
  const [videos, setVideos] = useState([]);

  async function getVideos(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/${videoid}/videos?api_key=${key}&language=en-US`,
    );

    setVideos(res.data.results);
  }

  useEffect(() => {
    getVideos(API_KEY);
  }, []);
  return (
    <div className="container">
      <div className="video">
        {videos.slice(0, 2).map((el) => (
          <iframe
            width="500"
            height="300"
            src={`https://www.youtube.com/embed/${el.key}`}
            title="Человек-паук: Новый день — Русский трейлер (Дубляж, 2026)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default Videos;
