import React from 'react';
import './Testimonials.css';

// Client image imports (apne folder path ke mutabiq adjust kar lein)
import muhammad from '../../Images/muhammad.png'
import waqas from '../../Images/waqas.png'

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="section-header">
        <h4>Testimonials</h4>
        <h2>What Clients Say</h2>
        <p>Feedback from clients and team leads who have collaborated with me on various web solutions and AI automations.</p>
      </div>

      <div className="testimonials-grid">
        {/* Testimonial 1 */}
        <div className="testimonial-card">
          <div className="client-img-box">
            <img src={muhammad} alt="muhammad.png" />
          </div>
          <p>"Safi delivered an exceptional frontend architecture and seamless AI automation workflows for our web app. Highly professional, responsive, and timely!"</p>
          <h4>Muhammad ullah</h4>
          <span>Project Manager</span>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial-card">
          <div className="client-img-box">
            <img src={waqas} alt="waqas.png" />
          </div>
          <p>"His code is clean, well-structured, and easy to maintain. Absolute pleasure working with him on our React components and n8n automations."</p>
          <h4>Muhammad Waqas</h4>
          <span>Product Director</span>
        </div>
      </div>
    </section>
  );
}