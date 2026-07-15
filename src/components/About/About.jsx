import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">

      <div className="container">

        <h2 className="section-title">
          About Me
        </h2>

        <p className="about-text">
          I'm <span>Mantu Kushali</span>, a passionate
          <strong> 4th Year B.Tech Computer Science & Engineering student</strong>
          who enjoys building modern web applications and AI-powered solutions.
          I love solving real-world problems through clean, scalable, and
          user-friendly software.
        </p>

        <p className="about-text">
          My primary expertise is in
          <strong> React, Node.js, MongoDB, Python, and JavaScript</strong>.
          Recently, I've been working on AI-based applications, including a
          <strong> Tender Audit System</strong> that automates document
          verification using OCR and Large Language Models.
        </p>

        <div className="about-grid">

          <div className="about-card">
            <h3>🎓 Education</h3>
            <p>B.Tech Computer Science & Engineering</p>
            <p>4th Year Student</p>
          </div>

          <div className="about-card">
            <h3>💻 Interests</h3>
            <p>Full Stack Development</p>
            <p>Artificial Intelligence</p>
          </div>

          <div className="about-card">
            <h3>🚀 Current Focus</h3>
            <p>MERN Stack</p>
            <p>AI Automation</p>
          </div>

          <div className="about-card">
            <h3>📍 Goal</h3>
            <p>Software Development Engineer</p>
            <p>AI Engineer</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;