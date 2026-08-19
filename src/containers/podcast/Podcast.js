import React from "react";
import "./Podcast.scss";
import {podcastSection} from "../../portfolio";
import SectionHead from "../../components/sectionHead/SectionHead";
import Reveal from "../../components/reveal/Reveal";

export default function Podcast() {
  if (!podcastSection) {
    console.error("podcastSection object for Podcast section is missing");
    return null;
  }

  if (!podcastSection.display) {
    return null;
  }

  return (
    <section className="section podcasts" id="podcast">
      <SectionHead
        eyebrow="Podcast"
        title={podcastSection.title}
        subtitle={podcastSection.subtitle}
      />

      <div className="podcast-grid">
        {podcastSection.podcast.map((podcastLink, i) => {
          if (!podcastLink) {
            console.log(`Podcast link for ${podcastSection.title} is missing`);
          }
          return (
            <Reveal className="podcast" key={i} delay={i * 80}>
              <iframe
                className="podcast__frame"
                src={podcastLink}
                frameBorder="0"
                scrolling="no"
                title={`Podcast ${i + 1}`}
              />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
