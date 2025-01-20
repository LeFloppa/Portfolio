import React from "react";
import "./Bio.css";
import SkillItem from "../../utils/SkillItems";
import { useLanguage } from "../../utils/LanguageContext";
import { translations } from "../../utils/Translations";

const Bio = () => {
  const { language } = useLanguage();
  return (
    <section id="bio">
      <div className="section-title">
        <div className="line"></div>
        <h2>{translations[language].bio.title}</h2>
        <div className="line"></div>
      </div>
      <div className="bio-content">
        <div className="bio-text">
          <p
            dangerouslySetInnerHTML={{
              __html: translations[language].bio.content,
            }}
          />
        </div>
        <div className="bio-image">
          <img src={require("../../assets/images/astro.png")} alt="Astroboy" />
        </div>
      </div>
      <div className="skills-section">
        <h3>{translations[language].bio.skills}</h3>
        <SkillItem />
      </div>
    </section>
  );
};

export default Bio;
