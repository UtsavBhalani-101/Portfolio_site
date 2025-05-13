import './OngoingProjects.css';

const OngoingProjects = () => {
  const ongoingProjects = [
    {
      title: "B2B Dropshipping",
      description: "Developing a dropshipping platfrom for B2B clients specifically for Gujarat. Also planning to integrate Agentic AI to improve sales, reduce costs, improve customer service so the team can focus on their core business.",
      technologies: ["React.js", "Node.js", "Restfull APIs", "MySQL", "Scraping", "AWS"],
      progress: 5
    },
    {
      title: "AI for 3D Model Creation",
      description: "Building and training AI models to create 3D models better, faster and streamline the process.",
      technologies: ["n8n", "Blender", "Python"],
      progress: 7
    }
  ];

  return (
    <section className="ongoing-projects-section">
      <div className="section-label">ONGOING PROJECTS</div>
      <div className="ongoing-projects-content">
        <ul className="projects-list">
          {ongoingProjects.map((project, index) => (
            <li key={index} className="project-item">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                <span className="tech-label">Technologies:</span>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="progress-container">
                <div className="progress-label">Progress: {project.progress}%</div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OngoingProjects;
