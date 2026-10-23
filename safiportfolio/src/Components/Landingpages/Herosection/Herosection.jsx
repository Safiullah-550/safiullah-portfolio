import React from 'react';
import "./Herosection.css";
import safi from '../../Images/safi.png'

// React Icons import
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Herosection() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello It's Me</h3>
        <h1>Safi Ullah</h1>
        <h2>And I'm a <span>Frontend Developer & AI Automation</span></h2>
        <p>
          Front-End Developer and AI Automation specialist with expertise in React JS, 
          JavaScript, and intelligent agentic workflows to build modern, scalable digital solutions.
        </p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="home-img">
        <div className="img-box">
          <img src={safi} alt="Safi Profile" />
        </div>
      </div>
    </section>
  );
}