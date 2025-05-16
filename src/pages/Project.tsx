import { useParams } from "react-router-dom";
import { BtnGitHub } from "../components/btnGitHub/BtnGitHub";
import projectsList from "./../helpers/projectsList.json";

export const Project = () => {
  const { id } = useParams();
  const project = projectsList.find((_, index) => index.toString() === id);

  if (!project) {
    return <h2>Проект не знайдено</h2>;
  }

  const skillsList =
    typeof project.skills === "string"
      ? project.skills.split(", ")
      : project.skills;

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            className="project-details__cover"
            src={`${import.meta.env.BASE_URL}${project.img}`}
            alt={project.title}
          />

          <div className="project-details__desc">
            <p>Skills:</p>
            <ul>
              {skillsList.map((skill: string, index: number) => (
                <li key={index}>• {skill}✨</li>
              ))}
            </ul>
          </div>

          <div className="project-details__btns">
            <BtnGitHub link={project.gitHubRepo} label="GitHub Repo" />
            <BtnGitHub link={project.gitHubPage} label="Live Demo" />
          </div>
        </div>
      </div>
    </main>
  );
};
