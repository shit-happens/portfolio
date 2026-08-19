import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import SectionHead from "../../components/sectionHead/SectionHead";
import {educationInfo} from "../../portfolio";

export default function Education() {
  if (!educationInfo.display) {
    return null;
  }

  return (
    <section className="section education" id="education">
      <SectionHead eyebrow="03 / Education" title="Education" />
      <div className="education__list">
        {educationInfo.schools.map((school, index) => (
          <EducationCard key={index} school={school} index={index} />
        ))}
      </div>
    </section>
  );
}
