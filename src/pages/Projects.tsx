import { Project } from "../components/project/Project";

import projectsList from "../helpers/projectsList.json";

export const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1" data-aos="fade-down">
          My Projects
        </h2>
        <ul className="projects">
          {projectsList.map((project, index) => {
            return (
              <Project
                key={project.title}
                title={project.title}
                img={project.img}
                index={index}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};
