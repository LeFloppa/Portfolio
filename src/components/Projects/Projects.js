import React, { useState } from 'react';
import './Projects.css';
import FrontEndProjects from '../../utils/FrontEndProjects';
import ContentWriterProjects from '../../utils/ContentWriterProjects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const debrisData = [
  {
    id: 'frontend',
    label: 'Intégrations Front-End',
    component: FrontEndProjects,
  },
  {
    id: 'contentwriter',
    label: 'Rédactions',
    component: ContentWriterProjects,
  },
  {
    id: 'comingsoon1',
    label: 'À venir',
    component: null,
  },
  {
    id: 'comingsoon2',
    label: 'À venir',
    component: null,
  },
];

const Projects = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (type) => {
    setActiveModal(type);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <section id="projects">
      <div className="section-title">
        <div className="line"></div>
        <h2>PROJETS</h2>
        <div className="line"></div>
      </div>
      <div className="debris-container">
        {debrisData.map((debris) => (
          <div
            key={debris.id}
            className={`debris ${!debris.component ? 'empty' : ''}`}
            onClick={() => debris.component && openModal(debris.id)}>
            {!debris.component ? (
              <FontAwesomeIcon icon={faLock} size="3x" color="#6B50A9" />
            ) : (
              <span>{debris.label}</span>
            )}
          </div>
        ))}
      </div>
      {activeModal && debrisData.find(d => d.id === activeModal)?.component && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} size="2x" />
            </button>
            {React.createElement(debrisData.find(d => d.id === activeModal).component)}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
