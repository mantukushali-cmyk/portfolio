import { useState } from "react";
import skills from "../../data/skills";
import "./Skills.css";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "AI",
  "Tools"
];

export default function Skills() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? skills.flatMap((item) => item.technologies)
      : skills
          .filter((item) => item.category === active)
          .flatMap((item) => item.technologies);

  const marquee = [...filtered, ...filtered];

  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <h2 className="section-title">Technical Skills</h2>
        <div className="title-underline"></div>

        <p className="section-description">
          A curated collection of technologies, frameworks, databases, AI tools,
          and development platforms I use to build scalable, high-performance
          software applications.
        </p>
      </div>

      <div className="tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={active === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="marquee">

        <div className="track">

          {marquee.map((skill, index) => (

            <div className="card" key={index}>

              <img
                src={skill.logo}
                alt={skill.name}
              />

              <span>{skill.name}</span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}