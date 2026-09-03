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
} from "react-icons/si";

import { PublicRoute } from "../../utils/routes.js";
import { SkillCard } from "../../utils/cards.js";

const Skills = () => {
  <FaHtml5 />;
  const skills = [
    {
      name: "HTML",
      logo: <FaHtml5 />,
      level: "Advanced",
    },
    {
      name: "CSS",
      logo: <FaCss3Alt />,
      level: "Advanced",
    },
    { name: "SCSS", logo: <SiSass />, level: "Advanced" },
    {
      name: "JavaScript",
      logo: <IoLogoJavascript />,
      level: "Advanced",
    },
    { name: "P5.js", logo: <SiP5Dotjs />, level: "Skilled" },
    { name: "MongoDB", logo: <SiMongodb />, level: "Skilled" },
    { name: "Express.js", logo: <SiExpress />, level: "Skilled" },
    { name: "React.js", logo: <SiReact />, level: "Advanced" },
    { name: "Node.js", logo: <SiNodedotjs />, level: "Skilled" },
    { name: "Python", logo: <SiPython />, level: "Skilled" },
  ];

  const content = (
    <div className="skills-container">
      {skills.map((skill) => (
        <SkillCard
          key={skill.name}
          name={skill.name}
          logo={skill.logo}
          level={skill.level}
        />
      ))}
    </div>
  );

  return <PublicRoute content={content} title="skills" />;
};

export default Skills;
