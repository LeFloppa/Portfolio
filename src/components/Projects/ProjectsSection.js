import React, { useEffect, useState } from "react";
import "../Projects/Projects.css";
import { useLanguage } from "../../utils/LanguageContext";
import { getProjectsData } from "../../utils/getProjectsData";

const ProjectsSection = ({ category }) => {
  const { language } = useLanguage();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const data = await getProjectsData(language);
      setProjects(data[category] || []);
    }
    fetchProjects();
  }, [language, category]);

  if (!projects || projects.length === 0) {
    return <p>No projects available for this category.</p>;
  }

  return (
    <div className="projects-list">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          {project.image && <img src={project.image} alt={project.title} />}
          <h3>{project.title}</h3>
          {project.description && (
            <p
              dangerouslySetInnerHTML={{
                __html: project.description,
              }}
            />
          )}
          {project.tags && (
            <div className="tags">
              {project.tags.map((tag, idx) => (
                <span className="tag" key={idx}>
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="project-buttons">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-button"
              >
                GitHub
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-button"
              >
                Demo
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-button"
              >
                View
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
