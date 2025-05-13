import './Skills.css';

const Skills = () => {
  const skills = [
    "Python",
    "C++",
    "Java",
    "Data Collection/Gathering",
    "Data cleaning and preprocessing",
    "Exploratory Data Analysis (EDA)",
    "Univariate/Bivariate Analysis",
    "Data visualization",
    "ML algorithms",
    "Feature Engineering"
  ];

  return (
    <section className="skills-section">
      <div className="skills-inner-container">
        <div className="section-label">SKILLS</div>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-pill">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
