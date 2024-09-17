import React from 'react';
import './Bio.css';
import SkillItem from '../../utils/SkillItems';

const Bio = () => {
  return (
    <section id="bio">
      <div className="section-title">
        <div className="line"></div>
        <h2>À propos de moi</h2>
        <div className="line"></div>
      </div>
      <div className="bio-content">
        <div className="bio-text">
          <p> Jeune développeur front-end passionné, avec un vrai sens du détail. Au cours de mon apprentissage, j'ai travaillé sur des projets concrets où l'intégration de design, l’optimisation SEO, l’utilisation d’API, et la création d’expériences responsive étaient au cœur de mes objectifs. Chaque ligne de code est pour moi une occasion d’allier créativité et rigueur technique pour offrir des solutions sur-mesure, modernes et efficaces. Je suis motivé à l’idée de relever de nouveaux défis et de prouver ma valeur dans chaque projet auquel je participe. <br /><br />Mais mon expertise ne s’arrête pas là. Écrivain dans l’âme, je donne vie aux mots avec autant de passion que je le fais avec le code. Que ce soit pour rédiger des articles, des scripts, ou des histoires, ma seule limite est mon imagination. Chaque texte que je crée est pensé pour résonner avec son audience, en éveillant des émotions et en racontant une histoire qui fait vibrer.<br /><br /> Si vous cherchez quelqu’un capable de captiver à travers l’écrit ou le code, je suis prêt à donner corps à vos idées.</p>
        </div>
        <div className="bio-image">
          <img src={require('../../assets/images/astro.png')} alt='Astroboy' />
        </div>
      </div>
      <div className="skills-section">
        <h3>Langages et Technologies</h3>
        <SkillItem />
      </div>
    </section>
  );
};

export default Bio;
