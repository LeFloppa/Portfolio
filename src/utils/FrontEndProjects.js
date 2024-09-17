import React from 'react';
import '../components/Projects/Projects.css';

const projects = [
  {
    title: 'Argent Bank',
    description: `Une banque en ligne sécurisée et interactive, mon projet le plus significatif. Le design est relativement simple mais a su suivre les attentes et la maquette fournie, ça n'en change pas la complexité qui se cache derrière, ayant pour but de tester mes capacités à savoir faire interagir back-end et front-end. <br /><br />Afin de pleinement explorer les fonctionnalités de ce projet, veuillez vous rendre sur la page GitHub pour le déployer localement et non sur la version démo.`,
    tags: ['React', 'Node.js', 'MongoDB', 'Redux', 'CSS'],
    image: require('../assets/images/argentbank-poster.png'),
    githubLink: 'https://github.com/LeFloppa/OpenClassroom-Projet11',
    liveLink: 'https://open-classroom-projet11.vercel.app/home',
  },
  {
    title: 'Kasa App',
    description: "Une application de location immobilière. Ce fut mon premier projet en utilisant React. J'ai pu découvrir l'importance des components et les différentes options qu'offrent ce framework en terme de dynamisme et d'optimisation. Notamment l'usage de React Router qui permet une expérience utilisateur entre les pages plus fluides et adaptée pour la gestion de grands nombres de redirections. <br />Ce projet suit à la lettre la maquette qui a été fourni pour sa réalisation, offrant une expérience à la hauteur des attentes.",
    tags: ['React', 'Node.js', 'SCSS'],
    image: require('../assets/images/kasa-poster.png'),
    githubLink: 'https://github.com/LeFloppa/OpenClassroom-Projet8',
    liveLink: 'https://open-classroom-projet8.vercel.app/home',
  },
  {
    title: 'Portfolio Architecte',
    description: `Ce projet a été dans les premiers que j'ai pu réalisé. M'ayant fourni un backend local et une maquette à reproduire, la réalisation de ce portfolio en JavaScript brut m'a permis d'approfondir ma maîtrise du langage. Le dynamisme était le point central de ce projet, avoir la possibilité de directement ajouter ou retirer des projets via le site et non le code. Tout en offrant une expérience sécurisée pour le propriétaire du protfolio. <br /><br />N'étant qu'un projet basé sur mes compétences en JavaScript, les seuls fonctionnalités disponibles sont l'authentification via la page de "login" où ensuite apparaîtra l'option de gestion des projets afin d'en ajouter et retirer à votre guise. <br /><br />Afin de pleinement explorer les fonctionnalités de ce projet, veuillez vous rendre sur la page github pour le déployer localement et non sur la version démo. `,
    tags: ['JavaScript', 'Node.js', 'CSS'],
    image: require('../assets/images/architect-poster.png'),
    githubLink: 'https://github.com/LeFloppa/OpenClassroom-Projet6',
    liveLink: 'https://lefloppa.github.io/OpenClassroom-Projet6/',
  },
];

const FrontEndProjects = () => {
  return (
    <div className="projects-list">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
          <div className="tags">
            {project.tags.map((tag, idx) => (
              <span className="tag" key={idx}>
                {tag}
              </span>
            ))}
          </div>
          <div className="project-buttons">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
            >
              GitHub
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-button"
            >
              Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FrontEndProjects;
