import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useRef } from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothX = useSpring(rotateX, {
    stiffness: 180,
    damping: 18
  });

  const smoothY = useSpring(rotateY, {
    stiffness: 180,
    damping: 18
  });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    rotateY.set(((x / rect.width) - 0.5) * 18);
    rotateX.set(-((y / rect.height) - 0.5) * 18);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      className="premium-card"
      style={{
        rotateX: smoothX,
        rotateY: smoothY,
        transformPerspective: 1200
      }}
      initial={{
        opacity: 0,
        y: 80
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.18
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
    >
      {/* Animated Border */}
      <div className="gradient-border"></div>

      {/* Browser Frame */}
      <div className="browser">
        <div className="browser-top">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>

        <div className="image-wrapper">
          <img
            src={project.image}
            alt={project.title}
          />
          <div className="shine"></div>
        </div>
      </div>

      {/* Content */}
      <div className="premium-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        {/* Technologies */}
        <div className="premium-tech">
          {project.technologies.map((tech, i) => (
            <span key={i}>
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="premium-buttons">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="demo"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;