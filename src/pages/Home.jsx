import React from 'react';
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from '../components/ContactSection';

function Home() {
  return (
    <div>
        <Hero />
        <About />
        <Skills />
        <ProjectsSection />
        <ContactSection />
    </div>
  )
}

export default Home
