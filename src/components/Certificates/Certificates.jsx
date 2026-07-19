import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import certificates from "../../data/certificates";
import "./Certificates.css";

const Certificates = () => {
  // Stagger wrapper config for the grid container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Card slide-up and fade-in configuration
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 14,
      },
    },
  };

  return (
    <section className="certificates" id="certificates">
      {/* Animated cosmic background blobs */}
      <div className="certificates-bg">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="grid-overlay" />
      </div>

      <div className="container certificates-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Credentials</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Professional certifications that enhanced my technical knowledge and
            validated my expertise across modern engineering technologies.
          </p>
        </motion.div>

        <motion.div 
          className="certificate-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {certificates.map((certificate) => (
            <motion.article
              className="certificate-card"
              key={certificate.id}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              {/* Radial cursor hover highlight overlay */}
              <div className="card-glow" />

              <div className="certificate-icon-wrapper">
                <div className="certificate-icon">
                  <FaCertificate />
                </div>
              </div>

              <div className="certificate-content">
                <h3 className="certificate-title">{certificate.title}</h3>
                <p className="issuer">{certificate.issuer}</p>

                <div className="certificate-meta">
                  <span className="badge">{certificate.category}</span>
                  <span className="year">{certificate.year}</span>
                </div>
              </div>

              <a
                href={window.location.origin + certificate.pdf} // Forces the absolute URL path
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn"
                aria-label={`View ${certificate.title} certificate`}
              >
                <span>View Certificate</span>
                <FaExternalLinkAlt />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;