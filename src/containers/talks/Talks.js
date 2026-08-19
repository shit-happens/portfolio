import React from "react";
import "./Talks.scss";
import TalkCard from "../../components/talkCard/TalkCard";
import SectionHead from "../../components/sectionHead/SectionHead";
import {talkSection} from "../../portfolio";

export default function Talks() {
  if (!talkSection.display) {
    return null;
  }

  return (
    <section className="section talks" id="talks">
      <SectionHead
        eyebrow="Talks"
        title={talkSection.title}
        subtitle={talkSection.subtitle}
      />

      <div className="talk-grid">
        {talkSection.talks.map((talk, i) => (
          <TalkCard key={i} talkDetails={talk} index={i} />
        ))}
      </div>
    </section>
  );
}
