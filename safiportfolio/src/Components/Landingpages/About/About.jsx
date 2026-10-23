import React from 'react';
import './About.css';
import about from '../../Images/about.png'

// React Icons import
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <div className="img-box">
          <img src={about} alt="about.png" />
        </div>
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
      
      <div className="about-content">
        <h4>About Me</h4>
        <h2>Transforming Ideas into Scalable Frontend Solutions</h2>
        <span className="sub-title">Frontend Developer & AI Automation Specialist</span>
        <p>
          I am a results-driven Frontend Developer and AI Automation specialist based in Kohat, KPK, with 
          1+ years of experience building scalable, high-performance web applications using React.js, 
          JavaScript, and intelligent agentic workflows. I specialize in reusable component architecture, 
          API integration, and performance optimization.
        </p>
        <p>
          Experienced in remote collaboration and deadline-driven environments, I am actively seeking 
          opportunities to contribute to impactful, performance-focused products.
        </p>
        
        <div className="about-info-grid">
          <div><strong>Name:</strong> Safi Ullah</div>
          <div><strong>Location:</strong> Kohat, KPK, Pakistan</div>
          <div><strong>Experience:</strong> 1+ years</div>
          <div><strong>Email:</strong> safiullahkhattak550@gmail.com</div>
        </div>

        <div className="btn-box">
          <a href="#cv" className="btn">Download CV</a>
          <a href="#contact" className="btn-outline">Call Me</a>
        </div>
      </div>
    </section>
  );
}