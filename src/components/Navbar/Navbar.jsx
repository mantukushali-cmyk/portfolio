import { useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Mantu <span>Kushali</span>
      </a>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#internship" onClick={closeMenu}>Internship</a></li>
        <li><a href="#education" onClick={closeMenu}>Education</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#certificates" onClick={closeMenu}>Certificates</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download="Mantu_Kushali_Resume.pdf"
        className="resume-btn"
      >
        <FaDownload />
        Resume
      </a>
    </nav>
  );
};

export default Navbar;