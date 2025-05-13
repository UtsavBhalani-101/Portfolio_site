import './Links.css';

const Links = () => {
  const links = [
    {
      name: "Twitter",
      url: "https://x.com/ScottLa94864311",
      icon: "→"
    },
    {
      name: "LinkedIn",
      url: "http://www.linkedin.com/in/utsav-bhalani-827286276",
      icon: "→"
    },
    {
      name: "GitHub",
      url: "https://github.com/UtsavBhalani-101",
      icon: "→"
    }
  ];

  return (
    <section className="links-section" id="contact-section">
      <div className="section-label">LINKS</div>
      <div className="links-grid">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="link-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="link-name">{link.name}</span>
            <span className="link-icon">{link.icon}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Links;
