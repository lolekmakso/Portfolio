import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

type ProjectProps = {
  title: string;
  img: string;
  index: number;
};

export const Project: React.FC<ProjectProps> = ({ title, img, index }) => {
  return (
    <NavLink to={`/project/${index}`}>
      <li className="project" data-aos="zoom-in">
        <img
          className="project__img"
          src={`${import.meta.env.BASE_URL}${img}`}
          alt={title}
        />
        <h3 className="project__title">{title}</h3>
      </li>
    </NavLink>
  );
};
