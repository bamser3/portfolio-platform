import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img
        src={project.image || "https://placehold.co/80x80"}
        alt={project.name}
      />
      <div className="project-info">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
