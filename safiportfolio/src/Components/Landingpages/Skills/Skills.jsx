import React from 'react';
import './Skills.css';

// React Icons import 
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaWordpress,
  FaRobot, 
  FaCogs 
} from 'react-icons/fa';

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-header">
        <h4>My Skills</h4>
        <h2>Technical Expertise & Core Skill Set</h2>
        <p>
          I bring 1+ years of experience in building responsive, scalable, and high-performing 
          web applications using React.js and modern frontend technologies, alongside building 
          intelligent AI automation workflows. My focus is on clean architecture, reusable components, 
          performance optimization, and delivering seamless digital solutions.
        </p>
      </div>

      <div className="skills-grid">
        <div className="skill-card">
          <FaReact className="skill-icon" />
          <h3>React.js</h3>
          <div className="percentage">90%</div>
        </div>

        <div className="skill-card">
          <FaJs className="skill-icon" />
          <h3>JavaScript</h3>
          <div className="percentage">88%</div>
        </div>

        <div className="skill-card">
          <FaHtml5 className="skill-icon" />
          <h3>HTML5</h3>
          <div className="percentage">95%</div>
        </div>

        <div className="skill-card">
          <FaCss3Alt className="skill-icon" />
          <h3>CSS3</h3>
          <div className="percentage">92%</div>
        </div>

        <div className="skill-card">
          <FaBootstrap className="skill-icon" />
          <h3>Bootstrap</h3>
          <div className="percentage">95%</div>
        </div>

        <div className="skill-card">
          <FaWordpress className="skill-icon" />
          <h3>Wordpress</h3>
          <div className="percentage">90%</div>
        </div>

        {/* AI Automation Card 1 */}
        <div className="skill-card">
          <FaRobot className="skill-icon" />
          <h3>AI Workflows & Agents</h3>
          <div className="percentage">85%</div>
        </div>

        {/* AI Automation Card 2 */}
        <div className="skill-card">
          <FaCogs className="skill-icon" />
          <h3>n8n Automation</h3>
          <div className="percentage">90%</div>
        </div>
      </div>
    </section>
  );
}