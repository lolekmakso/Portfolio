import "./style.scss";
import CV from "./cvTarasov.pdf";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title" data-aos="fade-zoom-in">
          <strong>
            {" "}
            Hi, my name is <em>Maksym</em>{" "}
          </strong>
          <br />a frontend developer
        </h1>

        <a
          href={CV}
          target="_blank"
          download
          className="btn"
          data-aos="fade-up"
        >
          {" "}
          Download CV{" "}
        </a>
      </div>
    </header>
  );
};
