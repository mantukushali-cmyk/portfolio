import tender from "../assets/images/projects/tender.png";
import portfolio from "../assets/images/projects/portfolio.png";
import optimalway from "../assets/images/projects/optimalway.png";
import fiteats from "../assets/images/projects/fiteats.png";

const projects = [
  {
    id: 1,
    title: "Tender Audit System",
    image: tender,
    description:
      "AI-powered tender auditing system that automatically verifies vendor documents, extracts requirements from tender PDFs, and generates evaluation reports using OCR, MongoDB, and LLMs.",
    technologies: [
      "React",
      "Python",
      "MongoDB",
      "OCR",
      "LLM"
    ],
    github: "https://github.com/mantukushali-cmyk/tender-audit",
    demo: ""
  },

  {
    id: 2,
    title: "Portfolio Website",
    image: portfolio,
    description:
      "Responsive personal portfolio built using React and Vite.",
    technologies: [
      "React",
      "CSS",
      "Vite"
    ],
    github: "https://github.com/mantukushali-cmyk/portfolio",
    demo: ""
  }
  

  
];

export default projects;