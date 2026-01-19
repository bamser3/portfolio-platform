import React, { useState } from "react";

const ProjectForm = ({ addProject }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // In ProjectForm.jsx
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) return;
    addProject({
      name,
      description,
      image: "https://placehold.co/80x80",
    });
    setName("");
    setDescription("");
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Project Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Project</button>
    </form>
  );
};

export default ProjectForm;
