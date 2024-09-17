// src/components/Projects/ContentWriterProjects.js

import React from 'react';
import '../components/Projects/Projects.css'; // Assurez-vous que les styles sont dans ce fichier

const projects = [
  {
    title: 'Document 1',
    genre: 'Article',
    purpose: 'Blog',
    image: require('../assets/images/astro.png'),
    link: 'lien/vers/document1.pdf',
  },
  // Ajoutez d'autres projets
];

const ContentWriterProjects = () => {
  return (
    <div className="content-projects-list">
      {projects.map((project, index) => (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="content-project-card"
          key={index}
        >
          <img src={project.image} alt={project.title} />
          <div className="content-project-info">
            <h3>{project.title}</h3>
            <div className="tags">
              <span className="tag">{project.genre}</span>
              <span className="tag">{project.purpose}</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ContentWriterProjects;
