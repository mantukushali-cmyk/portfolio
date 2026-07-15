import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">

          <h2>Mantu Kushali</h2>

          <p>
            Full Stack Developer | AI Solutions Builder
          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#education">Education</a>

          <a href="#contact">Contact</a>

        </div>

        <div className="footer-social">

          <h3>Connect</h3>

          <div className="social-icons">

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

            <a href="mailto:yourmail@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Mantu Kushali. All Rights Reserved.
        </p>

        <a href="#home" className="top-btn">
          <FaArrowUp />
        </a>

      </div>

    </footer>
  );
};

export default Footer;