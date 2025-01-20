import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { useLanguage } from "../../utils/LanguageContext";
import { translations } from "../../utils/Translations";

const Navbar = () => {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "bio"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="menu-toggle" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={menuOpen ? "show" : ""}>
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className={`nav-link ${
              activeSection === "home" ? "highlight" : ""
            }`}
            onClick={closeMenu}
          >
            {translations[language].nav.home}
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className={`nav-link ${
              activeSection === "projects" ? "highlight" : ""
            }`}
            onClick={closeMenu}
          >
            {translations[language].nav.projects}
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="bio"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className={`nav-link ${activeSection === "bio" ? "highlight" : ""}`}
            onClick={closeMenu}
          >
            {translations[language].nav.about}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
