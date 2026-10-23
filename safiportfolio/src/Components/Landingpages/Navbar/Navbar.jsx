import React, { useState } from 'react';
import './Navbar.css';

// React Icons import for mobile menu toggle
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <a href="#home" className="logo">Safi Ullah</a>
      
      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      
      <nav className={`navbar ${isMobileMenuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
        <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
      </nav>

      <a href="#contact" className="download-btn">Contact Me</a>
    </header>
  );
}