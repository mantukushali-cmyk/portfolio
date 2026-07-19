import { useEffect, useRef } from "react";
import "./About.css";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      icon: "🎓",
      title: "Education",
      lines: ["B.Tech Computer Science & Engineering", "4th Year Student"],
    },
    {
      icon: "💻",
      title: "Interests",
      lines: ["Full Stack Development", "Artificial Intelligence"],
    },
    {
      icon: "🚀",
      title: "Current Focus",
      lines: ["MERN Stack", "AI Automation"],
    },
    {
      icon: "📍",
      title: "Goal",
      lines: ["Software Development Engineer", "AI Engineer"],
    },
  ];

  return (
    <section id="about" className="about-section-custom" ref={sectionRef}>
      {/* Animated background blobs */}
      <div className="about-bg-blobs">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div className="about-container">
        <h2 className="about-title reveal">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="about-text-content reveal">
          <p className="about-intro">
            I'm <span className="highlight-blue">Mantu Kushali</span>, a passionate{" "}
            <strong>4th Year B.Tech Computer Science & Engineering student</strong> who enjoys
            building modern web applications and AI-powered solutions. I love solving real-world
            problems through clean, scalable, and user-friendly software.
          </p>
          <p className="about-details">
            My primary expertise is in <strong>React, Node.js, MongoDB, Python, and JavaScript</strong>.
            Recently, I've been working on AI-based applications, including a{" "}
            <span className="highlight-blue">Tender Audit System</span> that automates document
            verification using OCR and Large Language Models.
          </p>
        </div>

        <div className="about-cards-grid">
          {cards.map((card, index) => (
            <div
              className="about-card reveal"
              key={card.title}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="card-glow" />
              <div className="card-header">
                <span className="card-icon">{card.icon}</span>
                <h3>{card.title}</h3>
              </div>
              <div className="card-body">
                {card.lines.map((line, i) =>
                  i === card.lines.length - 1 && card.lines.length > 1 ? (
                    <span key={i} className="card-subtext">
                      {line}
                    </span>
                  ) : (
                    <p key={i}>{line}</p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;