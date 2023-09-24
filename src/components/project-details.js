import React from "react";
import "./project-details.css";
const ProjectDetails = ({ project, onClose }) => {
  return (
    <div className="project-detail">
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <h2>{project.title}</h2>
      <hr />
      <div className="tech-stack">
        Technologies Used:
        <div className="chip-container">
          {project.description.split(", ").map((tech, index) => (
            <span className="chip" key={index}>
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="tech-stack">
        Frontend Techstack:
        <div className="chip-container">
          {project.frontend.split(", ").map((tech, index) => (
            <span className="chip" key={index}>
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="tech-stack">
        Backend Techstack:
        <div className="chip-container">
          {project.backend.split(", ").map((tech, index) => (
            <span className="chip" key={index}>
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="tech-stack">
        Database:
        <div className="chip-container">
          {project.database.length > 0
            ? project.database.split(", ").map((tech, index) => (
                <span className="chip" key={index}>
                  {tech}
                </span>
              ))
            : "N/A"}
        </div>
      </div>
      <div className="tech-stack">
        Infrastructure:
        <div className="chip-container">
          {project.infrastructure.length > 0
            ? project.infrastructure.split(", ").map((tech, index) => (
                <span className="chip" key={index}>
                  {tech}
                </span>
              ))
            : "N/A"}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
