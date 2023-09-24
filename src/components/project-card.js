import React from "react";
import "./project-card.css";
import ProjectDetails from "./project-details";

const ProjectCard = ({ project, onClick }) => {
  const [showDetails, setShowDetails] = React.useState(false);

  const toggleDetail = () => {
    setShowDetails((prev) => !prev);
    console.log(`toggle ${showDetails}`);
  };

  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <div className="project-card-content">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="tech-stack">
          Frontend:
          {/* <div className="chip-container">
            {project.frontend.split(", ").map((tech, index) => (
              <span className="chip" key={index}>{tech}</span>
            ))}
          </div> */}
          <p>{project.frontend}</p>
        </div>
        <div className="tech-stack">
          Backend:
          {/* <div className="chip-container">
            {project.backend.split(", ").map((tech, index) => (
              <span className="chip" key={index}>
                {tech}
              </span>
            ))}
          </div> */}
          <p>{project.backend}</p>
        </div>
        <div className="tech-stack">
          Database:
          {/* <div className="chip-container">
            {project.database.length > 0
              ? project.database.split(", ").map((tech, index) => (
                  <span className="chip" key={index}>
                    {tech}
                  </span>
                ))
              : "N/A"}
          </div> */}
          <p>{project.database}</p>
        </div>
        <div className="tech-stack">
          Infrastructure:
          {/* <div className="chip-container">
            {project.infrastructure.length > 0
              ? project.infrastructure.split(", ").map((tech, index) => (
                  <span className="chip" key={index}>
                    {tech}
                  </span>
                ))
              : "N/A"}
          </div> */}
          <p>{project.infrastructure}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
