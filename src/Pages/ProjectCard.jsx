import React from 'react';
import '../Styles/ProjectCard.css';

function ProjectCard({ title, tech, description, image }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p><strong>Tech:</strong> {tech}</p>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
