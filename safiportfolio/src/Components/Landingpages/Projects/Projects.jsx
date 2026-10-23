import React from 'react';
import './Projects.css';

// Project image imports (folder depth ke mutabiq path adjust kar lein)
import portfliowebsite from '../../Images/portfliowebsite.png'
import golddigger from '../../Images/golddigger.png'
import ragbot from '../../Images/RaGbot.png'

// React Icons import
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-header">
        <h2>My Projects</h2>
        <p>
          Here are some of the projects I've built using modern frontend technologies. 
          These works highlight my ability to create scalable, responsive, and visually engaging web applications.
        </p>
      </div>
      
      <div className="projects-grid">
          {/* Project 1 */}
        <div className="project-card">
          <div className="project-img">
            <img src={portfliowebsite} alt="portfliowebsite.png" />
          </div>
          <div className="project-info">
            <h3>Portfolio</h3>
            <div className="project-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">View Code</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="External link">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <div className="project-img">
            <img src={golddigger} alt="golddigger.png" />
          </div>
          <div className="project-info">
            <h3>Gold Digger</h3>
            <div className="project-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">View Code</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="External link">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <div className="project-img">
            <img src={ragbot} alt="RaGbot.png" />
          </div>
          <div className="project-info">
            <h3>RAG CHAT BOT</h3>
            <div className="project-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">View Code</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="External link">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}