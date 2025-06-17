import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import '../Styles/Project.css'; // ensure this contains styling

function Projects() {
  const projects = [
    {
      title: 'Ezy POS',
      tech: 'Vue.js, Nuxt.js, Tailwind, Frappe, WebSocket',
      description: 'POS system for sales, billing, inventory, and reporting with real-time updates.',
      image: '/assets/ezypos',
    },
    {
      title: 'Ezy Tags',
      tech: 'React.js, Tailwind, Frappe, QR',
      description: 'QR-based digital menu system with real-time updates.',
      image: '/assets/ezytags2.png',
    },
    {
      title: 'Ezy Forms',
      tech: 'Vue.js, Tailwind, Frappe',
      description: 'Dynamic form builder for custom forms and validations.',
      image: '/assets/ezyforms1.png',
    },
    {
      title: 'Ezy GST',
      tech: 'Vue.js, Nuxt.js, Frappe',
      description: 'GST billing system for hotel operations with invoice generation.',
      image: '/assets/ezyforms.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="projects-container">
      <h2 className="projects-heading">Projects</h2>
      <div className="project-slide fade-in">
        <ProjectCard {...projects[currentIndex]} />
      </div>
      <div className="nav-buttons">
        <button onClick={prevProject}>⬅ Prev</button>
        <button onClick={nextProject}>Next ➡</button>
      </div>
    </div>
  );
}

export default Projects;
