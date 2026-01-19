import React, { useState } from "react";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectCard from "./components/ProjectCard";
import "./App.css";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addProject = (project) => {
    setProjects([...projects, { ...project, id: Date.now() }]);
  };

  const filteredProjects = projects.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="app-container">
      <div className="form-section">
        <h2>Add Project</h2>
        <ProjectForm addProject={addProject} />
      </div>

      <div className="project-list-section">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
