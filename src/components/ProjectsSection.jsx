import React from 'react'
import { Link } from "react-router-dom";
import hero from '../assets/images/projects/genesis/hero.png'
import heroHOC from '../assets/images/projects/hoc/heroHOC.png'
import bmaHero from '../assets/images/projects/bma/bmaHero.png'
import cover from '../assets/images/projects/blockCreatives/cover.png'

function ProjectsSection() {
  return (
    <section className='projects'>
      <h1>Projects</h1>
      <div className="project">
        <div className="project-description">
            <h2>Genesis Croshea</h2>
            <h4>Web Development</h4>
            <p>
                Genesis Croshea is a crochet brand that creates custom clothing using yarn and a personal touch of your own.
            </p>
            <button><a href="https://special-doodle-7k4oq4w.pages.github.io/">visit site</a></button>
        </div>
        <div className="project-img">
          <img src={hero} alt="" style={{ width: "550px", height: "300px" }} />
        </div>
      </div>
      <div className="project">
        <div className="project-description">
            <h2>House Of Class</h2>
            <h4>Web Design</h4>
            <p>
                House Of Class is a local barbershop that has just been launched and wants to set itself apart from other traditional barbershops in the area.
            </p>
            <button><Link to="/projects">see project</Link></button>
        </div>
        <div className="project-img">
            <img src={heroHOC} alt="" style={{ width: "550px", height: "300px"}} />
        </div>
      </div>
      <div className="project">
        <div className="project-description">
            <h2>Black Mountain Adventures</h2>
            <h4>SEO</h4>
            <p>
                Black Mountain Adventures is a motorbike touring service provider, they provide tourists with motorbike tours around the Western Cape area, and they have a wide range of day tours to choose from depending on how much motorbiking experience you have.
            </p>
            <button><Link to="/projects">see project</Link></button>
        </div>
        <div className="project-img">
          <img src={bmaHero} alt="" style={{ width: "550px", height: "300px" }} />
        </div>
      </div>
      <div className="project">
        <div className="project-description">
            <h2>Block Creatives</h2>
            <h4>Branding</h4>
            <p>
                Block Creatives is a personal project that I was and am still working on, however for this part of the project I created brand guidelines for the brand in order to ensure and maintain a consistent brand message, tone & voice, colour scheme, fonts, and imagery across different channels and platforms of the brand
            </p>
            <button><Link to="/projects">see project</Link></button>
        </div>
        <div className="project-img">
          <img src={cover} alt="" style={{ width: "550px", height: "300px" }} />
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection;
