import "./Internship.css";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Internship = () => {
  return (
    <section className="internship" id="internship">
      <div className="internship-header">
        <h2 className="section-title">Internship Experience</h2>
        <div className="title-underline"></div>
      </div>

      <div className="internship-card">
        {/* Decorative ambient background blur behind the card */}
        <div className="card-glow-effect"></div>

        <div className="internship-icon-wrapper">
          <div className="internship-icon">
            <FaBriefcase />
          </div>
          <div className="icon-pulse-ring"></div>
        </div>

        <div className="internship-content">
          <span className="company-badge">IOCL</span>
          <h3>Indian Oil Corporation Limited</h3>
          <h4>Summer Intern</h4>

          <div className="meta-info-row">
            <p className="duration">
              <FaCalendarAlt /> June 2026 – July 2026
            </p>
            <p className="location">
              <FaMapMarkerAlt /> India
            </p>
          </div>

          <p className="description">
            Currently undergoing industrial training and gaining practical
            experience in enterprise software systems, database technologies,
            and digital transformation processes while working with industry
            professionals.
          </p>

          <div className="skills-tags">
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