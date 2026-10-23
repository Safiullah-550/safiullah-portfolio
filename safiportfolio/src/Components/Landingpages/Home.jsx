import React from 'react'
import Navbar from './Navbar/Navbar'
import Herosection from './Herosection/Herosection'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Testimonials from './Testimonials/Testimonials'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <About/>
      <Skills/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}
