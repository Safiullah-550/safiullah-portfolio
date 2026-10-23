import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Landingpages/Home';
import Navbar from './Components/Landingpages/Navbar/Navbar';
import Herosection from './Components/Landingpages/Herosection/Herosection';
import About from './Components/Landingpages/About/About';
import Skills from './Components/Landingpages/Skills/Skills';
import Projects from './Components/Landingpages/Projects/Projects';
import Testimonials from './Components/Landingpages/Testimonials/Testimonials';
import Contact from './Components/Landingpages/Contact/Contact';
import Footer from './Components/Landingpages/Footer/Footer';

export default function App() {
  return (
    <div>
        {/* Yahan basename add kiya hai */}
        <BrowserRouter basename="/safiullah-portfolio">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Navbar" element={<Navbar />} />
                <Route path="/Herosection" element={<Herosection />} />
                <Route path="/About" element={<About />} />
                <Route path="/Skills" element={<Skills />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Testimonials" element={<Testimonials />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Footer" element={<Footer />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}