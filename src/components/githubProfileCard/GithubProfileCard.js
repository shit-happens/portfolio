import React from "react";
import "./GithubProfileCard.scss";
import SocialMedia from "../socialMedia/SocialMedia";
import {contactInfo, isHireable} from "../../portfolio";
import emoji from "react-easy-emoji";
import Reveal from "../reveal/Reveal";

export default function GithubProfileCard({prof}) {
  return (
    <section className="section gh-profile" id="contact">
      <Reveal className="gh-profile__panel">
        <div className="gh-profile__body">
          <span className="gh-profile__eyebrow">09 / Contact</span>
          <h2 className="gh-profile__title">Reach Out to me!</h2>
          <p className="gh-profile__subtitle">{contactInfo.subtitle}</p>

          <blockquote className="gh-profile__bio">
            {emoji(String(prof.bio))}
          </blockquote>

          <ul className="gh-profile__facts">
            {prof.location !== null && (
              <li>
                <i className="fas fa-map-marker-alt" aria-hidden="true" />
                {prof.location}
              </li>
            )}
            <li>
              <i className="fas fa-briefcase" aria-hidden="true" />
              Open for opportunities: {isHireable ? "Yes" : "No"}
            </li>
          </ul>

          <SocialMedia />
        </div>

        <div className="gh-profile__avatar">
          <img src={prof.avatarUrl} alt={prof.name} />
        </div>
      </Reveal>
    </section>
  );
}
