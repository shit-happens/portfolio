import React from "react";
import "./EducationCard.scss";
import Reveal from "../reveal/Reveal";

export default function EducationCard({school, index = 0}) {
  if (!school.logo) {
    console.error(
      `Image of ${school.schoolName} is missing in education section`
    );
  }

  return (
    <Reveal className="edu-card" delay={index * 90}>
      <div className="edu-card__aside">
        {school.logo && (
          <div className="edu-card__logo">
            <img src={school.logo} alt={school.schoolName} />
          </div>
        )}
        <span className="edu-card__duration">{school.duration}</span>
      </div>

      <div className="edu-card__body">
        <h3 className="edu-card__school">{school.schoolName}</h3>
        <p className="edu-card__degree">{school.subHeader}</p>

        {school.desc && <p className="edu-card__desc">{school.desc}</p>}

        {school.descBullets && school.descBullets.length > 0 && (
          <ul className="edu-card__courses">
            {school.descBullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </Reveal>
  );
}
