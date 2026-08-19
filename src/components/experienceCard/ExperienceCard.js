import React from "react";
import "./ExperienceCard.scss";
import Reveal from "../reveal/Reveal";

export default function ExperienceCard({cardInfo, index = 0}) {
  return (
    <Reveal as="li" className="job" delay={index * 100}>
      <div className="job__marker" aria-hidden="true">
        <span className="job__dot" />
      </div>

      <div className="job__inner">
        <header className="job__head">
          <div className="job__logo">
            <img src={cardInfo.companylogo} alt={cardInfo.company} />
          </div>
          <div className="job__titles">
            <h3 className="job__role">{cardInfo.role}</h3>
            <p className="job__company">
              {cardInfo.company}
              {cardInfo.location && (
                <span className="job__location"> · {cardInfo.location}</span>
              )}
            </p>
          </div>
          <span className="job__date">{cardInfo.date}</span>
        </header>

        {cardInfo.desc && <p className="job__desc">{cardInfo.desc}</p>}

        {cardInfo.descBullets && cardInfo.descBullets.length > 0 && (
          <ul className="job__bullets">
            {cardInfo.descBullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </Reveal>
  );
}
