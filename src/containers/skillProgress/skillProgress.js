import React from "react";
import "./Progress.scss";
import {techStack} from "../../portfolio";
import SectionHead from "../../components/sectionHead/SectionHead";
import Reveal from "../../components/reveal/Reveal";

export default function StackProgress() {
  if (!techStack.viewSkillBars) {
    return null;
  }

  return (
    <section className="section proficiency" id="proficiency">
      <SectionHead eyebrow="02 / Stack" title="Proficiency" />

      <div className="proficiency__grid">
        {techStack.experience.map((exp, i) => (
          <Reveal className="meter" key={i} delay={i * 60}>
            <div className="meter__head">
              <span className="meter__name">{exp.Stack}</span>
              <span className="meter__value">{exp.progressPercentage}</span>
            </div>
            <div className="meter__track">
              <span
                className="meter__fill"
                style={{"--target": exp.progressPercentage}}
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
