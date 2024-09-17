import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Bio from './components/Bio/Bio';

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
