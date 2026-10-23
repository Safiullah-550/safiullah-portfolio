import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    // Yahan aap apni API call ya email service integrate kar sakte hain
    setFormData({ fullName: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="section-header">
        <h4>Get In Touch</h4>
        <h2>Contact Me</h2>
        <p>Feel free to reach out for collaborations, projects, or remote opportunities.</p>
      </div>
      
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-box">
            <input 
              type="text" 
              name="fullName"
              placeholder="Full Name" 
              value={formData.fullName}
              onChange={handleChange}
              required 
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email Address" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <input 
            type="text" 
            name="subject"
            placeholder="Subject" 
            value={formData.subject}
            onChange={handleChange}
            required 
          />
          <textarea 
            name="message"
            cols="30" 
            rows="6" 
            placeholder="Your Message" 
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}