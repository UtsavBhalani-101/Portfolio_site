import React from 'react';
import './TechStack.css';



const TechStack = () => {
  const technologies = [
    {
      name: "Figma",
      logo: "🎨" // This will be replaced with actual logo
    },
    {
      name: "Framer",
      logo: "🖼️" // This will be replaced with actual logo
    },
    {
      name: "Zapier",
      logo: "⚡" // This will be replaced with actual logo
    },
    {
      name: "Notion",
      logo: "📝" // This will be replaced with actual logo
    },
    {
      name: "Tailwind",
      logo: "💨" // This will be replaced with actual logo
    },
    {
      name: "TypeScript",
      logo: "📘" // This will be replaced with actual logo
    }
  ];

  return (
    <section className="techstack-section">
      <div className="section-label">TECH STACK</div>
      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <div key={index} className="tech-item">
            <div className="tech-logo">{tech.logo}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
