import { useState, useEffect } from 'react'
import './App.css'
import Sidebar from './components/Sidebar.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Links from './components/Links.jsx'
import OngoingProjects from './components/OngoingProjects.jsx'
import Footer from './components/Footer.jsx'
import ScrollWheel from './components/ScrollWheel.jsx'

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if viewport is mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div className={`app ${isMobile ? 'mobile-view' : ''}`}>
      {!isMobile && <Sidebar />}
      <div className="content">
        <div className="main-content">
          <About />
          <Skills />
          <Experience />
          <OngoingProjects />
          <Links />
        </div>
        <Footer />
      </div>
      {!isMobile && <ScrollWheel />}
    </div>
  )
}

export default App
