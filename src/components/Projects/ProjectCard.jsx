import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./ProjectCard.css";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="browser-frame">
        <div className="browser-header">
          <span className="browser-dot red"></span>
          <span className="browser-dot yellow"></span>
          <span className="browser-dot green"></span>
        </div>

        <div className="image-container">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="project-thumbnail"
            loading="lazy"
          />
        </div>
      </div>

      <div className="project-body">
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>

        <div className="project-footer">
          <div className="tech-tag-group">
            {project.technologies?.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="card-action-group">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action btn-github"
              >
                <FaGithub />
                <span>Source</span>
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action btn-demo"
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string,
    demo: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;