import React from "react";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import Reveal from "../../components/reveal/Reveal";
import {
  greeting,
  workExperiences,
  educationInfo,
  isHireable
} from "../../portfolio";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }

  const currentRole =
    workExperiences.display && workExperiences.experience.length
      ? workExperiences.experience[0]
      : null;
  const school =
    educationInfo.display && educationInfo.schools.length
      ? educationInfo.schools[0]
      : null;

  return (
    <section className="hero" id="greeting">
      <div className="hero__inner">
        <Reveal className="hero__eyebrow" delay={0}>
          <span className="hero__status" aria-hidden="true" />
          Open for opportunities: {isHireable ? "Yes" : "No"}
        </Reveal>

        <Reveal as="h1" className="hero__title" delay={80}>
          {greeting.title} <span className="hero__wave">{emoji("👋")}</span>
        </Reveal>

        <Reveal as="p" className="hero__lede" delay={160}>
          {greeting.subTitle}
        </Reveal>

        <Reveal className="hero__actions" delay={240}>
          <Button text="Contact me" href="#contact" variant="primary" />
          {greeting.resumeLink && (
            <Button
              text="Download my resume"
              href={require("./resume.pdf")}
              download="Resume.pdf"
              variant="ghost"
              icon="fas fa-arrow-down"
            />
          )}
        </Reveal>

        <Reveal delay={320}>
          <SocialMedia />
        </Reveal>
      </div>

      {(currentRole || school) && (
        <Reveal className="hero__meta" delay={400}>
          {currentRole && (
            <div className="hero__meta-item">
              <span className="hero__meta-label">Currently</span>
              <span className="hero__meta-value">
                {currentRole.role}, {currentRole.company}
              </span>
              <span className="hero__meta-note">{currentRole.date}</span>
            </div>
          )}
          {school && (
            <div className="hero__meta-item">
              <span className="hero__meta-label">Education</span>
              <span className="hero__meta-value">{school.schoolName}</span>
              <span className="hero__meta-note">{school.duration}</span>
            </div>
          )}
        </Reveal>
      )}
    </section>
  );
}
