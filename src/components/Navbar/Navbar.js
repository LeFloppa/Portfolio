import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'bio'];
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

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500} className="nav-link">Accueil </Link>
        </li>
        <li>
          <Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500} className="nav-link">Projets </Link>
        </li>
        <li>
          <Link activeClass="active" to="bio" spy={true} smooth={true} offset={0} duration={500} className="nav-link">A Propos </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
