import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section className="education" id="education">

      <h2 className="section-title">
        Education
      </h2>

      <div className="education-card">

        <div className="education-icon">
          <FaGraduationCap />
        </div>

        <div className="education-content">

          <h3>Bachelor of Technology</h3>

          <h4>Computer Science & Engineering</h4>

          <p>Adamas University</p>

          <p>2023 - 2027</p>

          <p>
            Currently pursuing my B.Tech with a strong interest in
            Full Stack Development, Artificial Intelligence,
            Machine Learning, and Software Engineering.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Education;