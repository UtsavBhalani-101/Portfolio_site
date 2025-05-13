import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: "CVM Hackathon",
      role: "Personalized Social Media Analysis platform to keep track of your X(Twitter), Youtube and Instagram accounts as well managing budget, providing personalized tips based on the content and platform, campaign and agency management.",
      // period: "Aug 24 - Present",
      logo: "🟪" // This will be replaced with an actual image, 
    
    },
    {
      company: "Nosu Hackathon",
      role: "Built a tool for Education with AI with personalized learning by ",
      // period: "Sep 2023 - Aug 24",
      logo: "🔵" // This will be replaced with an actual image
    },
    {
      company: "Level SuperMind Hackathon",
      role: "Built a Social Media Analyzer tool using DataStax, Langflow and Retrievel Augmented Generation(RAG).",
      // period: "Aug 2023 - Sep 23",
      logo: "🟩" // This will be replaced with an actual image
    }
  ];

  return (
    <section className="experience-section">
      <div className="section-label">SELECTED WORKS</div>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="company-logo">{exp.logo}</div>
            <div className="experience-details">
              <h3 className="company-name">{exp.company}</h3>
              <p className="role">{exp.role}</p>
            </div>
            <div className="experience-period">
              {exp.period}
              {/* <span className="dropdown-arrow">▼</span> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
