import React, { useState } from "react";
import "./Projects.css";
import ProjectsSection from "./ProjectsSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../../utils/LanguageContext";
import { translations } from "../../utils/Translations";

const Projects = () => {
  const [activeModal, setActiveModal] = useState(null);
  const { language } = useLanguage();

  const debrisData = [
    {
      id: "frontend",
      label: translations[language].projects.frontEnd,
      category: "frontEndProjects",
    },
    {
      id: "contentwriter",
      label: translations[language].projects.writing,
      category: "contentWriterProjects",
    },
    {
      id: "comingsoon1",
      label: translations[language].projects.comingSoon,
      category: null,
    },
    {
      id: "comingsoon2",
      label: translations[language].projects.comingSoon,
      category: null,
    },
  ];

  const openModal = (type) => setActiveModal(type);
  const closeModal = () => setActiveModal(null);

  return (
    <section id="projects">
      <div className="section-title">
        <div className="line"></div>
        <h2>{translations[language].projects.title}</h2>
        <div className="line"></div>
      </div>
      <div className="debris-container">
        {debrisData.map((debris) => (
          <div
            key={debris.id}
            className={`debris ${!debris.category ? "empty" : ""}`}
            onClick={() => debris.category && openModal(debris.id)}
          >
            {!debris.category ? (
              <FontAwesomeIcon icon={faLock} size="3x" color="#6B50A9" />
            ) : (
              <span>{debris.label}</span>
            )}
          </div>
        ))}
      </div>

      {activeModal &&
        debrisData.find((d) => d.id === activeModal)?.category && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeModal}>
                <FontAwesomeIcon icon={faTimes} size="2x" />
              </button>
              <ProjectsSection
                category={debrisData.find((d) => d.id === activeModal).category}
              />
            </div>
          </div>
        )}
    </section>
  );
};

export default Projects;
