import "./style.scss";

import instagram from "./../../img/icons/instagram.svg";
// import twitter from "./../../img/icons/twitter.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a
                href="https://www.instagram.com/lolekmakso/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Instagram" />
              </a>
            </li>
            {/* <li className="social__item">
              <a
                href="https://twitter.com/?lang=ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="Twitter" />
              </a>
            </li> */}
            <li className="social__item">
              <a
                href="https://github.com/lolekmakso"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gitHub} alt="GitHub" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.linkedin.com/in/%D0%BC%D0%B0%D0%BA%D1%81-%D1%82%D0%B0%D1%80%D0%B0%D1%81%D0%BE%D0%B2-9a56a3290/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedIn} alt="LinkedIn" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© {currentYear} Maksym Tarasov. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
