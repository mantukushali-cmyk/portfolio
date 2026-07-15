import "./Internship.css";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Internship = () => {
  return (
    <section className="internship" id="internship">

      <h2 className="section-title">
        Internship Experience
      </h2>

      <div className="internship-card">

        <div className="internship-icon">
          <FaBriefcase />
        </div>

        <div className="internship-content">

          <h3>Indian Oil Corporation Limited (IOCL)</h3>

          <h4>Summer Intern</h4>

          <p className="duration">
            <FaCalendarAlt /> June 2026 – Present
          </p>

          <p className="location">
            <FaMapMarkerAlt /> India
          </p>

          <p className="description">
            Currently undergoing industrial training and gaining practical
            experience in enterprise software systems, database technologies,
            and digital transformation processes while working with industry
            professionals.
          </p>

          <div className="skills">

            <span>Industrial IT</span>

            <span>Database Systems</span>

            <span>Software Development</span>

            <span>Problem Solving</span>

            <span>Team Collaboration</span>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Internship;