import { Header } from "./../components/header/Header";
import skills from "./../helpers/skills.json";

export const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item" data-aos="fade-up">
              <h2 className="title-2">Frontend 💻</h2>

              <ul className="content-list__item-skills">
                {skills.map((skill, index) => (
                  <li key={index}> {skill}</li>
                ))}
              </ul>
            </li>
            <li className="content-list__item" data-aos="fade-up">
              <h2 className="title-2">Education 🎓</h2>
              <p>
                I study at <u>Yuriy Fedkovych Chernivtsi National University</u>{" "}
                📚,
                <br />
                Faculty of <u>Mathematics and Informatics</u> 🧮,
                <br />
                majoring in <u>Systems Analysis</u> ⚙️.
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};
