import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from "react-icons/fa";
import "./Education.css";

const Education = () => {
  const timelineData = [
    {
      title: "Bachelor of Technology",
      subtitle: "Computer Science & Engineering",
      institution: "Adamas University",
      duration: "2023 - 2027",
      details:
        "Currently pursuing my B.Tech (CGPA: 7.2 up to 3rd year) with a strong focus on Full Stack Development, Artificial Intelligence, Machine Learning, and Software Engineering.",
    },
    {
      title: "Higher Secondary (Class 12)",
      subtitle: "Science Stream",
      institution: "Ramjibonpur Babulal Institution",
      duration: "Passed: 2023",
      details: "Completed higher secondary education with a score of 67%.",
    },
    {
      title: "Secondary (Class 10)",
      subtitle: "General Studies",
      institution: "Ramjibonpur Babulal Institution",
      duration: "Passed: 2021",
      details: "Completed secondary education with a score of 75%.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
        delayChildren: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.2 },
    },
  };

  const cardVariants = {
    hidden: (isLeft) => ({
      opacity: 0,
      x: isLeft ? -80 : 80,
      y: 40,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 18,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="education" id="education">
      <div className="education-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-subtitle">My Journey</span>
          <h2 className="section-title">Education</h2>
          <p className="section-description">
            A timeline of my academic background and educational milestones.
          </p>
        </motion.div>

        <motion.div
          className="education-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div
            className="timeline-line"
            variants={lineVariants}
          ></motion.div>

          {timelineData.map((edu, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`timeline-row ${isLeft ? "left" : "right"}`}
                custom={isLeft}
                variants={cardVariants}
              >
                <motion.div
                  className="timeline-icon"
                  variants={iconVariants}
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaGraduationCap />
                </motion.div>

                <motion.div
                  className="education-card"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="card-glow"></div>

                  <div className="card-header">
                    <h3>{edu.title}</h3>
                    <span className="duration-tag">
                      <FaCalendarAlt />
                      {edu.duration}
                    </span>
                  </div>

                  <h4 className="card-subtitle">{edu.subtitle}</h4>

                  <p className="institution">
                    <FaUniversity />
                    {edu.institution}
                  </p>

                  <p className="details">{edu.details}</p>

                  <div className="card-progress">
                    <motion.div
                      className="progress-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: 0.4,
                        ease: "easeOut",
                      }}
                    ></motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;