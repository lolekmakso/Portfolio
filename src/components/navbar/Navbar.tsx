import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./style.scss";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    if (nav) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [nav]);

  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Lolek</strong> Maksym
          </NavLink>

          <BtnDarkMode />

          {/* Бургер-меню */}
          <div
            onClick={() => setNav(!nav)}
            className={nav ? "menu-icon active" : "menu-icon"}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Затемняющий фон */}
          <div
            className={nav ? "overlay overlay--active" : "overlay"}
            onClick={() => setNav(false)}
          ></div>

          <ul className={nav ? "nav-list nav-list--active" : "nav-list"}>
            <li className="nav-list__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                onClick={() => setNav(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                onClick={() => setNav(false)}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                onClick={() => setNav(false)}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
