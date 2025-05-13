import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Links from './components/Links.jsx'
import Projects from './components/Projects.jsx'
import OngoingProjects from './components/OngoingProjects.jsx'
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx'
import ScrollWheel from './components/ScrollWheel.jsx'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <About />
        <Skills />
        <Experience />
        <OngoingProjects />
        <Links />
        <Projects />
        <Testimonials />
        <Footer />
      </div>
      <ScrollWheel />
    </div>
  )
}

export default App
