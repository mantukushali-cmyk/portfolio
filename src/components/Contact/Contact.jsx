import "./Contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        <div className="contact-info">

          <h2 className="section-title">
            Contact Me
          </h2>

          <p className="contact-text">
            I'm currently looking for internships and full-time opportunities.
            Feel free to reach out if you'd like to discuss a project,
            collaboration, or job opportunity.
          </p>

          <div className="contact-item">
            <FaEnvelope />
            <span>mantukushali@gmail.com</span>
          </div>

          <div className="contact-item">
            <FaPhone />
            <span>+91 83272 01242</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>West Bengal, India</span>
          </div>

          <div className="social-icons">

            <a
              href="https://github.com/mantukushali-cmyk"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/mantu-kushali-2a8252299"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        <div className="contact-form">

          <form>

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              placeholder="Subject"
              required
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;