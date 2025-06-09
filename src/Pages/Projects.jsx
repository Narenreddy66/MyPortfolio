import React from 'react';
// import ProjectCard from './components/ProjectCard';
import ProjectCard from './ProjectCard';
import '../Styles/Project.css'


function Projects() {
  const projects = [
    {
      title: 'Ezy POS',
      tech: 'Vue.js, Nuxt.js, Tailwind, Frappe, WebSocket',
      description: 'POS system for sales, billing, inventory, and reporting with real-time updates.'
    },
    {
      title: 'Ezy Tags',
      tech: 'React.js, Tailwind, Frappe, QR',
      description: 'QR-based digital menu system with real-time updates.'
    },
    {
      title: 'Ezy Forms',
      tech: 'Vue.js, Tailwind, Frappe',
      description: 'Dynamic form builder for custom forms and validations.'
    },
    {
      title: 'Ezy GST',
      tech: 'Vue.js, Nuxt.js, Frappe',
      description: 'GST billing system for hotel operations with invoice generation.'
    },
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </div>
  );
}

export default Projects;


