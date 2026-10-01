import { useState } from "react";

import "./style.scss";

import { IoLogoJavascript } from "react-icons/io";
import {
  FaHtml5,
  FaCss3Alt,
  FaLinux,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiSass,
  SiP5Dotjs,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiScratch,
  SiTypescript,
  SiJest,
} from "react-icons/si";

import { PublicRoute } from "../../utils/routes.js";
import { SkillCard } from "../../utils/cards.js";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [showSkillModal, setShowSkillModal] = useState(false);

  const skills = [
    {
      name: "HTML",
      logo: <FaHtml5 />,
      level: "Advanced",
      description:
        "Building accessible, semantic and well-structured web pages using modern HTML standards and best practices.",
    },
    {
      name: "CSS",
      logo: <FaCss3Alt />,
      level: "Advanced",
      description:
        "Creating responsive, visually engaging layouts with precise styling, animations and cross-browser compatibility.",
    },
    {
      name: "SCSS",
      logo: <SiSass />,
      level: "Advanced",
      description:
        "Writing maintainable, modular stylesheets using variables, nesting, mixins and reusable styling patterns.",
    },
    {
      name: "JavaScript",
      logo: <IoLogoJavascript />,
      level: "Advanced",
      description:
        "Developing interactive, dynamic applications using modern JavaScript, asynchronous programming and advanced language features.",
    },
    {
      name: "P5.js",
      logo: <SiP5Dotjs />,
      level: "Skilled",
      description:
        "Creating interactive visual experiences, generative artwork and animations through creative JavaScript programming.",
    },
    {
      name: "MongoDB",
      logo: <SiMongodb />,
      level: "Skilled",
      description:
        "Designing and managing flexible NoSQL databases for efficient data storage, retrieval and application development.",
    },
    {
      name: "Express.js",
      logo: <SiExpress />,
      level: "Skilled",
      description:
        "Building scalable server-side applications and RESTful APIs using Express middleware and routing.",
    },
    {
      name: "React.js",
      logo: <SiReact />,
      level: "Advanced",
      description:
        "Developing reusable, component-driven user interfaces with modern React features, hooks and state management.",
    },
    {
      name: "Node.js",
      logo: <SiNodedotjs />,
      level: "Skilled",
      description:
        "Building server-side applications, handling asynchronous operations and developing backend services using JavaScript.",
    },
    {
      name: "Python",
      logo: <SiPython />,
      level: "Skilled",
      description:
        "Developing versatile applications, automating tasks and solving problems through clean, efficient Python programming.",
    },
    {
      name: "Sratch",
      logo: <SiScratch />,
      level: "Skilled",
      description:
        "Exploring programming fundamentals through visual coding, interactive projects and event-driven logic.",
    },
    {
      name: "Linux",
      logo: <FaLinux />,
      level: "Skilled",
      description:
        "Navigating Linux environments, managing system resources and working confidently with command-line tools.",
    },
    {
      name: "Git",
      logo: <FaGitAlt />,
      level: "Skilled",
      description:
        "Version control system for tracking changes in source code during software development.",
    },
    {
      name: "GitHub",
      logo: <FaGithub />,
      level: "Skilled",
      description:
        "Platform for hosting and collaborating on Git repositories, managing projects and contributing to open-source software.",
    },
    {
      name: "TypeScript",
      logo: <SiTypescript />,
      level: "Skilled",
      description:
        "Enhancing JavaScript with static typing, enabling better tooling, error detection and maintainable code.",
    },
    {
      name: "Jest",
      logo: <SiJest />,
      level: "Skilled",
      description:
        "JavaScript testing framework for writing and running unit tests, ensuring code quality and reliability.",
    },
  ];

  const content = (
    <div className="skills-container">
      {skills.map((skill) => (
        <SkillCard
          key={skill.name}
          onClick={() => {
            setSelectedSkill(skill);
            setShowSkillModal(true);
          }}
          name={skill.name}
          logo={skill.logo}
          level={skill.level}
        />
      ))}
      {showSkillModal && selectedSkill && (
        <div
          className="skill-modal-container"
          onClick={() => setShowSkillModal(false)}>
          <div className="skill-modal">
            <div className="skill-modal-logo">{selectedSkill.logo}</div>
            <h3 className="skill-modal-title">{selectedSkill.name}</h3>
            <p className="skill-modal-level">{selectedSkill.level}</p>
            <p className="skill-modal-description">
              {selectedSkill.description}
            </p>
            <button
              className="skill-modal-button"
              onClick={() => {
                setSelectedSkill(null);
                setShowSkillModal(false);
              }}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return <PublicRoute content={content} title="skills" />;
};

export default Skills;
