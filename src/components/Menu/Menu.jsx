import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

export const Menu = () => {
  return (
    <nav>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        <li>
          <NavLink to="/">Главная</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">О нас</NavLink>
        </li>
        <li>
          <NavLink to="/movie-list">Список фильмов</NavLink>
        </li>
      </ul>
    </nav>
  );
};
