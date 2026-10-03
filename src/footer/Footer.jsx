import React from "react";
import d4 from "../assets/img/Без названия.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="containerr">
        <div className="footer">
          <br />
          <br />
          <div>
            <br />
            <br />
            <br />
            <img src={d4} alt="" width="300px" />
          </div>
          <br />
          <div>
            <br />
            <h1>Главное</h1>
            <br />
            <p>О TMDB</p>
            <br />
            <p>Документация API</p>
            <br />
            <p>API для Бизнеса</p>
            <br />
            <p>Статус системы</p>
          </div>
          <div>
            <br />
            <h1>Участвуйте</h1>
            <br />
            <p>Библия редакторов</p>
            <br />
            <p>Добавить новый фильм</p>
            <br />
            <p>Добавить новый сериал</p>
          </div>
          <div>
            <br />
            <h1>Сообщество</h1>
            <br />
            <p>Руководства</p>
            <br />
            <p>Доска почёта</p>
            <br />
            <p>Форумы поддержки</p>
          </div>
          <div>
            <br />
            <h1>О праве</h1>
            <br />
            <p>Условия использования</p>
            <br />
            <p>API Правила использования</p>
            <br />
            <p>Политика конфиденциальности</p>
            <br />
            <p>Политика CDMCA</p>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Footer;
