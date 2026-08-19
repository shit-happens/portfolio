import React from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Reveal from "../../components/reveal/Reveal";
import {contactInfo} from "../../portfolio";

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
          {contactInfo.number && (
            <a className="contact__phone" href={`tel:${contactInfo.number}`}>
              {contactInfo.number}
            </a>
          )}
        </div>

        <SocialMedia className="contact__socials" />
      </Reveal>
    </section>
  );
}
