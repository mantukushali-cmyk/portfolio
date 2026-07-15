import "./Hero.css";
import profile from "../../assets/images/profile.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="hero">

      <div className="hero-left">
        <span className="greeting">👋 Hello, I'm</span>

        <h1>
          Mantu <span>Kushali</span>
        </h1>

        <h2>B.Tech CSE Student | Full Stack Developer</h2>

        <p>
          Passionate about building modern web applications using
          <strong> React, Node.js, MongoDB, Python</strong> and developing
          AI-powered solutions like the <strong>Tender Audit System</strong>.
        </p>

        <div className="hero-buttons">
          <a href="/resume.pdf" download className="btn primary">
            Download Resume
          </a>

          <a href="#projects" className="btn secondary">
            View Projects
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:mantukushali@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img src={profile} alt="Mantu Kushali" />
      </div>

    </section>
  );
};

export default Hero;