import React from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import Reveal from "../../components/reveal/Reveal";
import {contactInfo, greeting} from "../../portfolio";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <Reveal className="contact__panel">
        <span className="contact__eyebrow">09 / Contact</span>
        <h2 className="contact__title">{contactInfo.title}</h2>
        <p className="contact__subtitle">{contactInfo.subtitle}</p>

        <div className="contact__details">
          <a
            className="contact__email"
            href={`mailto:${contactInfo.email_address}`}
          >
            {contactInfo.email_address}
          </a>
          <div className="contact__meta">
            {contactInfo.number && (
              <a className="contact__phone" href={`tel:${contactInfo.number}`}>
                {contactInfo.number}
              </a>
            )}
            {contactInfo.location && (
              <span className="contact__location">
                <i className="fas fa-map-marker-alt" aria-hidden="true" />
                {contactInfo.location}
              </span>
            )}
          </div>
        </div>

        {greeting.resumeLink && (
          <div className="contact__resume">
            <Button
              text="Download my resume"
              href={greeting.resumeLink}
              download={greeting.resumeFileName}
              newTab={true}
              variant="primary"
              icon="fas fa-arrow-down"
            />
          </div>
        )}

        <SocialMedia className="contact__socials" />
      </Reveal>
    </section>
  );
}
