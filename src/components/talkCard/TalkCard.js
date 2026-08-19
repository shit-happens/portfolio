import React from "react";
import "./TalkCard.scss";
import Reveal from "../reveal/Reveal";

export default function TalkCard({talkDetails, index = 0}) {
  return (
    <Reveal className="talk" delay={(index % 3) * 80}>
      <h3 className="talk__title">{talkDetails.title}</h3>
      <p className="talk__subtitle">{talkDetails.subtitle}</p>

      <div className="talk__links">
        {talkDetails.slides_url && (
          <a
            href={talkDetails.slides_url}
            target="_blank"
            rel="noopener noreferrer"
            className="talk__link"
          >
            Slides
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </a>
        )}
        {talkDetails.event_url && (
          <a
            href={talkDetails.event_url}
            target="_blank"
            rel="noopener noreferrer"
            className="talk__link"
          >
            Event
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </a>
        )}
      </div>
    </Reveal>
  );
}
