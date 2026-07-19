import tender from "../assets/images/projects/tender.png";
import portfolio from "../assets/images/projects/portfolio.png";
import resumeBuilder from "../assets/images/projects/resume-builder.png"; // Import the image

const projects = [
  {
  id: 1,
  title: "Tender Audit System",
  image: tender,
  description:
    "AI-powered tender auditing system that extracts tender requirements, verifies vendor compliance, performs OCR-based document analysis, and generates evaluation reports using MongoDB and local LLMs.",
  technologies: [
    "React",
    "Python",
    "MongoDB",
    "OCR",
    "LLM",
    "Streamlit"
  ],
  github: "https://github.com/mantukushali-cmyk/AI-Tender-Audit-System",
  demo: ""
},

{
  id: 2,
  title: "AI Resume Builder",
  image: resumeBuilder,   // Import this image
  description:
    "AI-powered resume builder that helps users create professional ATS-friendly resumes with customizable templates, real-time preview, and PDF export.",
  technologies: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "AI"
  ],
  github: "https://github.com/mantukushali-cmyk/Resume-builder",
  demo: ""
},

{
  id: 3,
  title: "Portfolio Website",
  image: portfolio,
  description:
    "Modern responsive portfolio website showcasing my projects, skills, certifications, internship experience, and contact information.",
  technologies: [
    "React",
    "Vite",
    "CSS"
  ],
  github: "https://github.com/mantukushali-cmyk/portfolio",
  demo: ""
}


  
];

export default projects;