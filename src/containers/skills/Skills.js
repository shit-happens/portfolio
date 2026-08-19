import React from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import SectionHead from "../../components/sectionHead/SectionHead";
import Reveal from "../../components/reveal/Reveal";
import {skillsSection} from "../../portfolio";

export default function Skills() {
  if (!skillsSection.display) {
    return null;
  }

  return (
    <section className="section skills" id="skills">
      <SectionHead
        eyebrow="01 / Skills"
        title={skillsSection.title}
        subtitle={skillsSection.subTitle}
      />

      <div className="skills__grid">
        <ul className="skills__list">
          {skillsSection.skills.map((skill, i) => (
            <Reveal as="li" className="skills__item" key={i} delay={i * 90}>
              {skill}
            </Reveal>
          ))}
        </ul>

        <Reveal className="skills__stack" delay={120}>
          <span className="skills__stack-label">Toolbox</span>
          <SoftwareSkill />
        </Reveal>
      </div>
    </section>
  );
}
