import React from 'react';
// import './ProjectCard.css';
import '../Styles/ProjectCard.css'


function ProjectCard({ title, tech, description }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="tech">Tech Used: {tech}</span>
    </div>
  );
}

export default ProjectCard;
