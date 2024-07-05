import React, { useEffect } from 'react';
import About from './components/About';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  useEffect(() => {
    document.title = 'Portfolio';
  }, []);
  
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Certification />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
