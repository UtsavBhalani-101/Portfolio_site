
import './Sidebar.css';

const Sidebar = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="sidebar">
      <div className="sidebar-content">

        <div className="profile-info">
          <h1 className="profile-name">
            Hi I'm<br />
            <span className="name">Utsav Bhalani</span>
          </h1>

          <p className="profile-title">
            Data Scientist, ML engineer,
            Developer
          </p>

          <div className="availability">
            <span className="status-dot"></span>
            <span className="status-text">Available for work</span>
          </div>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <i className="contact-icon">✉️</i>
            <span>utsavbhalani07@gmail.com</span>
          </div>
        </div>

        <div className="sidebar-buttons">
          <a href="#contact-section" className="btn btn-filled" onClick={scrollToContact}>Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
