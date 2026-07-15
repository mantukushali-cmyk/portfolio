import "./Certificates.css";
import certificates from "../../data/certificates";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const Certificates = () => {
  return (
    <section className="certificates" id="certificates">

      <div className="container">

        <h2 className="section-title">
          Certifications
        </h2>

        <p className="section-subtitle">
          Professional certifications that enhanced my technical knowledge.
        </p>

        <div className="certificate-grid">

          {certificates.map((certificate) => (

            <div
              className="certificate-card"
              key={certificate.id}
            >

              <div className="certificate-icon">
                <FaCertificate />
              </div>

              <h3>{certificate.title}</h3>

              <p className="issuer">
                {certificate.issuer}
              </p>

              <span className="badge">
                {certificate.category}
              </span>

              <p className="year">
                {certificate.year}
              </p>

              <a
                href={certificate.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn"
              >
                View Certificate
                <FaExternalLinkAlt />
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Certificates;