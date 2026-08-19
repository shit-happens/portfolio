import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <ul className="tool-grid">
      {skillsSection.softwareSkills.map((skill, i) => (
        <li className="tool" key={i} title={skill.skillName}>
          <i
            className={`tool__icon ${skill.fontAwesomeClassname}`}
            aria-hidden="true"
          />
          <span className="tool__name">{skill.skillName}</span>
        </li>
      ))}
    </ul>
  );
}
