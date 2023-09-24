import React from "react";
import "./project-card.css";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <div className="project-card-content">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="tech-stack">
          Frontend:
          <p>{project.frontend}</p>
        </div>
        <div className="tech-stack">
          Backend:
          <p>{project.backend}</p>
        </div>
        <div className="tech-stack">
          Database:
          <p>{project.database}</p>
        </div>
        <div className="tech-stack">
          Infrastructure:
          <p>{project.infrastructure}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
