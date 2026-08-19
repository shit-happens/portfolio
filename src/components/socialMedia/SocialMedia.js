import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";

const NETWORKS = [
  {key: "github", label: "GitHub", icon: "fab fa-github"},
  {key: "linkedin", label: "LinkedIn", icon: "fab fa-linkedin-in"},
  {key: "gmail", label: "Email", icon: "fas fa-envelope", mailto: true},
  {key: "gitlab", label: "GitLab", icon: "fab fa-gitlab"},
  {key: "facebook", label: "Facebook", icon: "fab fa-facebook-f"},
  {key: "instagram", label: "Instagram", icon: "fab fa-instagram"},
  {key: "twitter", label: "Twitter", icon: "fab fa-twitter"},
  {key: "medium", label: "Medium", icon: "fab fa-medium"},
  {
    key: "stackoverflow",
    label: "Stack Overflow",
    icon: "fab fa-stack-overflow"
  },
  {key: "kaggle", label: "Kaggle", icon: "fab fa-kaggle"}
];

export default function SocialMedia({className = ""}) {
  if (!socialMediaLinks.display) {
    return null;
  }

  return (
    <ul className={`socials ${className}`.trim()}>
      {NETWORKS.filter(network => socialMediaLinks[network.key]).map(
        network => (
          <li key={network.key}>
            <a
              href={
                network.mailto
                  ? `mailto:${socialMediaLinks[network.key]}`
                  : socialMediaLinks[network.key]
              }
              className={`socials__link socials__link--${network.key}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={network.label}
              title={network.label}
            >
              <i className={network.icon} aria-hidden="true" />
            </a>
          </li>
        )
      )}
    </ul>
  );
}
