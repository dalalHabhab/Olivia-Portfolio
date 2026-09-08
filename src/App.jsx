import { useState } from "react";
import "./App.css";
import me from "./assets/me.png";

function OliveBranch() {
  return (
    <svg
      className="olive-branch-svg"
      viewBox="0 0 500 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main branch */}
      <path
        d="M40 350 C130 280, 190 220, 260 150 C330 80, 390 55, 470 35"
        fill="none"
        stroke="#59683d"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Small branches */}
      <path
        d="M130 285 C125 235, 105 195, 75 165"
        fill="none"
        stroke="#66754a"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M195 220 C190 170, 175 135, 145 105"
        fill="none"
        stroke="#66754a"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M275 145 C280 105, 300 75, 330 55"
        fill="none"
        stroke="#66754a"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Leaves */}
      <ellipse
        cx="90"
        cy="180"
        rx="14"
        ry="45"
        transform="rotate(-55 90 180)"
        fill="#738653"
      />

      <ellipse
        cx="120"
        cy="220"
        rx="14"
        ry="45"
        transform="rotate(45 120 220)"
        fill="#81945f"
      />

      <ellipse
        cx="155"
        cy="120"
        rx="14"
        ry="45"
        transform="rotate(-50 155 120)"
        fill="#66784b"
      />

      <ellipse
        cx="185"
        cy="175"
        rx="14"
        ry="48"
        transform="rotate(50 185 175)"
        fill="#879765"
      />

      <ellipse
        cx="225"
        cy="145"
        rx="14"
        ry="48"
        transform="rotate(-55 225 145)"
        fill="#66784b"
      />

      <ellipse
        cx="275"
        cy="95"
        rx="14"
        ry="48"
        transform="rotate(50 275 95)"
        fill="#82935d"
      />

      <ellipse
        cx="320"
        cy="90"
        rx="14"
        ry="48"
        transform="rotate(-55 320 90)"
        fill="#617447"
      />

      <ellipse
        cx="370"
        cy="55"
        rx="14"
        ry="48"
        transform="rotate(55 370 55)"
        fill="#84965f"
      />

      <ellipse
        cx="410"
        cy="55"
        rx="14"
        ry="48"
        transform="rotate(-55 410 55)"
        fill="#63764a"
      />

      {/* Olives */}
      <circle cx="135" cy="260" r="13" fill="#788a42" />
      <circle cx="235" cy="180" r="14" fill="#829344" />
      <circle cx="330" cy="120" r="14" fill="#74863e" />
      <circle cx="400" cy="80" r="13" fill="#829444" />
    </svg>
  );
}
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();

  setMessageSent(true);

  e.target.reset();
};

  return (
    <div className="app">

      {/* Navigation */}
      <nav className="navbar">

  <a href="#home" className="logo">OLIVIA</a>

  <div className={`nav-links ${menuOpen ? "active" : ""}`}>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </div>

  <div className="social-links">

    <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank">
      in
    </a>

    <a href="https://www.facebook.com/" target="_blank">
      f
    </a>

    <a href="https://www.linkedin.com/" target="_blank">
      ◎
    </a>

  </div>

  <button
    className="menu-button"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    ☰
  </button>

</nav>

      {/* Hero Section */}
<section id="home" className="hero">

  <div className="floating-leaf leaf-1">✦</div>
  <div className="floating-leaf leaf-2">✦</div>

  <div className="hero-text">

    <p className="subtitle">
      WELCOME TO MY PORTFOLIO
    </p>

    <h1>
      I'm Dalal Alhabhab,
      <br />
      <span>A Full-Stack Developer</span>
      <br />
      that helps you bring your ideas to digital life!
    </h1>

    <p className="hero-description">
      I'm a creative developer who loves building clean,
      simple and meaningful digital experiences inspired
      by nature.
    </p>

    <a href="#projects" className="hero-button">
      Explore My Work →
    </a>

  </div>

  {/* Animated Olive Branch */}
  <div className="hero-branch">

    <div className="branch-glow"></div>

    <OliveBranch />

  </div>

</section>

      {/* About Section */}
      <section id="about" className="about section">

        <div className="section-title">
          <p>WHO I AM</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">

        <div className="about-icon">
            <img src={me} alt="About Me" />
        </div>

          <div>
            <h3>Inspired by nature, powered by technology.</h3>

            <p>
              I enjoy combining creativity and technology to
              create websites that are simple, elegant and easy
              to use.
            </p>

            <p>
              My goal is to transform ideas into digital
              experiences that feel natural and enjoyable.
            </p>
            <div className="about-info">

    <div className="info-item">
        <h3>Education</h3>
        <p>Computer Science</p>
    </div>

    <div className="info-item">
        <h3>Focus</h3>
        <p>Web Development</p>
    </div>

    <div className="info-item">
        <h3>University</h3>
        <p>Al Maaref University</p>
    </div>

</div>
          </div>

        </div>

      </section>
{/* Skills Section */}
<section id="skills" className="skills section">

  <div className="section-title">
    <p>MY EXPERTISE</p>
    <h2>Skills</h2>
  </div>

  <div className="skills-grid">

   <div className="skill-card" style={{ "--final-width": "90%" }}>
      <div className="skill-icon">🌿</div>

      <h3>Frontend Development</h3>
      <p>90%</p>

      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>
    </div>


    <div className="skill-card" style={{ "--final-width": "85%" }}>
      <div className="skill-icon">💻</div>

      <h3>Backend Development</h3>
      <p>85%</p>

      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>
    </div>


   <div className="skill-card" style={{ "--final-width": "80%" }}>
      <div className="skill-icon">🔐</div>

      <h3>Cyber Security</h3>
      <p>80%</p>

      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>
    </div>


    <div className="skill-card" style={{ "--final-width": "75%" }}>
      <div className="skill-icon">📊</div>

      <h3>Data Science</h3>
      <p>75%</p>

      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>
    </div>

  </div>

</section>

      {/* Projects Section */}
<section id="projects" className="projects section">

  <div className="section-title">
    <p>MY RECENT WORK</p>
    <h2>Projects</h2>
  </div>

  <div className="projects-grid">

    {/* Project 01 - Image + Information */}
    <div className="project-card featured-project">

      <div className="project-image"></div>

      <div className="project-info">

        <span>01</span>

        <h2>Olive Garden</h2>

        <p>Web Design</p>

          <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View Project →
        </a>

      </div>

    </div>


    {/* Project 02 */}
    <div className="project-card">

      <span>02</span>

      <div>🖥️</div>

      <h3>ElectroShop</h3>

      <p>E-Commerce</p>

        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View Project →
        </a>
    </div>


    {/* Project 03 */}
    <div className="project-card">

      <span>03</span>

      <div>🌱</div>

      <h3>Nature Blog</h3>

      <p>Web Development</p>

      <a
      href="https://www.google.com"
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
    >
      View Project →
    </a>

    </div>


    {/* Project 04 */}
    <div className="project-card">

      <span>04</span>

      <div>🎞️</div>

      <h3>The Film House</h3>

      <p>UI Design</p>

          <a
      href="https://www.google.com"
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
    >
      View Project →
    </a>

    </div>

    {/* Project 05 */}
    <div className="project-card">

      <span>05</span>

      <div>📚</div>

      <h3>Anarava</h3>

      <p>E-Learning Platform </p>

          <a
      href="https://www.google.com"
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
    >
      View Project →
    </a>

    </div>

  </div>
  

</section>

      {/* Contact Section */}
      <section id="contact" className="contact section">

        <div className="section-title">
          <p>LET'S TALK</p>

          <h2>
            Let's grow something
            <br />
            <span>beautiful together.</span>
          </h2>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
          type="text"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          required
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>

          <button type="submit">
            Send Message →
          </button>

        </form>

       {messageSent && (
        <p className="success-message">
          Your message has been sent successfully!
        </p>
      )}
      </section>

      {/* Footer */}
      <footer>
        <h3>OLIVIA</h3>
        <p>© 2026 Olivia Portfolio</p>
      </footer>

    </div>
  );
}

export default App;