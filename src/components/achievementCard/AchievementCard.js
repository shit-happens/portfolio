import React from "react";
import "./AchievementCard.scss";
import Reveal from "../reveal/Reveal";

export default function AchievementCard({cardInfo, index = 0}) {
  return (
    <Reveal className="cert" delay={(index % 3) * 80}>
      <div className="cert__head">
        <div className="cert__thumb">
          <img src={cardInfo.image} alt={cardInfo.imageAlt || cardInfo.title} />
        </div>
        <h3 className="cert__title">{cardInfo.title}</h3>
      </div>

      <p className="cert__desc">{cardInfo.description}</p>

      {cardInfo.footer && cardInfo.footer.length > 0 && (
        <div className="cert__footer">
          {cardInfo.footer.map((link, i) => (
            <a
              key={i}
              className="cert__link"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </a>
          ))}
        </div>
      )}
    </Reveal>
  );
}
