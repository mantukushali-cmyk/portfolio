import "./Hero.css";
import profile from "../../assets/images/hero.png";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section id="home" className="hero-section-custom">
      {/* Background Particles */}
      <div className="particles-container">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* ================= LEFT ================= */}
      <div className="hero-left-content">
        <span className="greeting-text">👋 Hello, I'm</span>

        <h1 className="hero-main-title">
          <span className="name-white">Mantu</span> <span className="name-blue">Kushali</span>
        </h1>

        <h2 className="hero-dynamic-subtitle">
          <Typewriter
            words={[
              "Full Stack Developer",
              "AI Enthusiast",
              "React Developer",
              "Python Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={45}
            delaySpeed={1800}
          />
        </h2>

        <p className="hero-description-paragraph">
          4th Year <strong>B.Tech CSE</strong> student at{" "}
          <strong>Adamas University</strong>. Passionate about building
          scalable web applications using <strong>React</strong>,{" "}
          <strong>Node.js</strong>, <strong>MongoDB</strong> and{" "}
          <strong>Python</strong>. I enjoy developing AI-powered solutions such
          as the <strong>Tender Audit System</strong>.
        </p>

        <div className="hero-action-buttons">
          <a href="/resume.pdf" download className="btn-custom btn-primary-custom">
            <FaDownload />
            Download Resume
          </a>

          <a href="#projects" className="btn-custom btn-secondary-custom">
            View Projects
            <FaArrowRight />
          </a>
        </div>

        <div className="hero-social-networks">
          <a
            href="https://github.com/mantukushali-cmyk"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/mantu-kushali-2a8252299"
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

      {/* ================= RIGHT ================= */}
      <div className="hero-right-content">
        <div className="hero-image-display-wrapper">
          {/* Background Glow Ring Elements */}
          <div className="bg-glow-circle"></div>

          {/* Static profile image sizing (No floating animation) */}
          <img src={profile} alt="Mantu Kushali" className="hero-profile-photo" />

          {/* Info Card */}
          <div className="tech-stack-info-card">
            <h3>Tech Stack</h3>
            <div className="tech-tag-list">
              <span>⚛ React</span>
              <span>🚀 Node.js</span>
              <span>🍃 MongoDB</span>
              <span>🐍 Python</span>
              <span>🤖 AI / LLM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;