import React from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import SectionHead from "../../components/sectionHead/SectionHead";
import {workExperiences} from "../../portfolio";

export default function WorkExperience() {
  if (!workExperiences.display) {
    return null;
  }

  return (
    <div className="band">
      <section className="section experience" id="experience">
        <SectionHead eyebrow="04 / Career" title="Experiences" />

        <ol className="timeline">
          {workExperiences.experience.map((card, i) => (
            <ExperienceCard key={i} cardInfo={card} index={i} />
          ))}
        </ol>
      </section>
    </div>
  );
}
