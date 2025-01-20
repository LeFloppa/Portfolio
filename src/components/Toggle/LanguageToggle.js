import React from "react";
import { useLanguage } from "../../utils/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import "./LanguageToggle.css";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  const handleToggle = () => {
    toggleLanguage();
  };

  return (
    <button className="language-toggle-button" onClick={handleToggle}>
      <FontAwesomeIcon
        icon={faLanguage}
        size="lg"
        style={{ marginRight: "0.5rem" }}
      />
      <span className="lang-text">{language === "en" ? "EN" : "FR"}</span>
    </button>
  );
};

export default LanguageToggle;
