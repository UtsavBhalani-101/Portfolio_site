import React from 'react';
import './Projects.css';

// Using better placeholder images with specific dimensions
const project1Image = 'https://via.placeholder.com/600x400/f5f5f5/333333?text=E-Commerce+Redesign';
const project2Image = 'https://via.placeholder.com/600x400/f0f0f0/333333?text=Finance+App+UI';
const project3Image = 'https://via.placeholder.com/600x400/f8f8f8/333333?text=Travel+Platform';
const project4Image = 'https://via.placeholder.com/600x400/efefef/333333?text=Portfolio+Website';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Redesign",
      description: "Complete redesign of a major fashion retailer's online shopping experience. The new design improved user engagement by 35% and increased mobile conversion rates by 25%. Implemented a new design system that streamlined the development process.",
      technologies: "Figma, React, CSS, User Testing",
      image: project1Image
    },
    {
      title: "Finance App UI",
      description: "Designed a modern, intuitive interface for a personal finance management application. Created a comprehensive design system with reusable components. The app was featured in multiple design publications for its clean, user-friendly interface.",
      technologies: "Sketch, Swift, Prototyping, Analytics",
      image: project2Image
    },
    {
      title: "Travel Platform",
      description: "Developed the UX/UI for a travel booking platform that simplifies the process of planning trips. Conducted extensive user research to identify pain points in existing solutions and designed an experience that addresses these issues.",
      technologies: "Adobe XD, JavaScript, User Research",
      image: project3Image
    },
    {
      title: "Portfolio Website",
      description: "Designed and developed a custom portfolio website for a professional photographer. The site features a minimalist design that puts the focus on the photography while providing an intuitive navigation experience.",
      technologies: "HTML, CSS, JavaScript, Responsive Design",
      image: project4Image
    }
  ];

  return (
    <section className="projects-section">
      <h2 className="section-title">PROJECTS</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-technologies"><strong>Technologies:</strong> {project.technologies}</p>
              <a href="#" className="project-link">View Project →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
