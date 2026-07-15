import "./Skills.css";
import skills from "../../data/skills";

const Skills = () => {
  return (
    <section className="skills" id="skills">

      <h2 className="section-title">
        Technical Skills
      </h2>

      <p className="section-subtitle">
        Technologies and tools I use to build modern applications.
      </p>

      <div className="skills-container">

        {skills.map((group, index) => (

          <div className="skill-category" key={index}>

            <h3>{group.category}</h3>

            <div className="skill-list">

              {group.technologies.map((tech, i) => (
                <span className="skill-chip" key={i}>
                  {tech}
                </span>
              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Skills;