import "./Projects.css";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2 className="projects-title">
          Featured Projects
        </h2>

        <div className="title-underline"></div>

        <p className="projects-subtitle">
          Explore a selection of production-ready applications showcasing my
          expertise in full-stack development, AI integration, and scalable
          software engineering.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;