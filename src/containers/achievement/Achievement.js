import React from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import SectionHead from "../../components/sectionHead/SectionHead";
import {achievementSection} from "../../portfolio";

export default function Achievement() {
  if (!achievementSection.display) {
    return null;
  }

  return (
    <section className="section achievements" id="achievements">
      <SectionHead
        eyebrow="07 / Recognition"
        title={achievementSection.title}
        subtitle={achievementSection.subtitle}
      />

      <div className="achievement-grid">
        {achievementSection.achievementsCards.map((card, i) => (
          <AchievementCard
            key={i}
            index={i}
            cardInfo={{
              title: card.title,
              description: card.subtitle,
              date: card.date,
              image: card.image,
              imageAlt: card.imageAlt,
              footer: card.footerLink
            }}
          />
        ))}
      </div>
    </section>
  );
}
