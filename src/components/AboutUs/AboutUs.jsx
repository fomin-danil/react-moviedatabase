import React from "react";
import { Link, Outlet } from "react-router-dom";

export const AboutUs = () => {
  return (
    <div>
      <Link to="contacts">Наши контакты</Link>
      <br />
      <Link to="about">Наша компания</Link>
      <Outlet />
    </div>
  );
};
