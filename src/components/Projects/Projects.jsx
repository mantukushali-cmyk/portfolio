import "./Projects.css";
import projects from "../../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="projects" id="projects">

      <h2 className="section-title">
        Featured Projects
      </h2>

      <p className="section-subtitle">
        Some of the projects I've built using modern web technologies and AI.
      </p>

      <div className="projects-grid">

        {projects.map((project) => (

          <div className="project-card" key={project.id}>

            <img
              src={project.image}
              alt={project.title}
            />

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">

                {project.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}

              </div>

              <div className="project-buttons">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-btn"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="demo-btn"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Projects;