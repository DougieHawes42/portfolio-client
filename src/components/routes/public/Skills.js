import { useState } from "react";

import "./style.scss";

import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiSass,
  SiP5Dotjs,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiScratch,
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
      description: "Markup language for creating web pages",
    },
    {
      name: "CSS",
      logo: <FaCss3Alt />,
      level: "Advanced",
      description: "Styling language for web pages",
    },
    {
      name: "SCSS",
      logo: <SiSass />,
      level: "Advanced",
      description: "CSS preprocessor for more efficient styling",
    },
    {
      name: "JavaScript",
      logo: <IoLogoJavascript />,
      level: "Advanced",
      description: "Programming language for web development",
    },
    {
      name: "P5.js",
      logo: <SiP5Dotjs />,
      level: "Skilled",
      description: "JavaScript library for creative coding",
    },
    {
      name: "MongoDB",
      logo: <SiMongodb />,
      level: "Skilled",
      description: "NoSQL database for modern applications",
    },
    {
      name: "Express.js",
      logo: <SiExpress />,
      level: "Skilled",
      description: "Web framework for Node.js",
    },
    {
      name: "React.js",
      logo: <SiReact />,
      level: "Advanced",
      description: "JavaScript library for building user interfaces",
    },
    {
      name: "Node.js",
      logo: <SiNodedotjs />,
      level: "Skilled",
      description: "JavaScript runtime for server-side development",
    },
    {
      name: "Python",
      logo: <SiPython />,
      level: "Skilled",
      description: "General-purpose programming language",
    },
    {
      name: "Sratch",
      logo: <SiScratch />,
      level: "Skilled",
      description: "Visual programming language for beginners",
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
