import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Bio from "./components/Bio/Bio";
import LanguageToggle from "./components/Toggle/LanguageToggle";
import { LanguageProvider } from "./utils/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <LanguageToggle />
        <Navbar />
        <section id="home">
          <Header />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="bio">
          <Bio />
        </section>
      </div>
    </LanguageProvider>
  );
}

export default App;
