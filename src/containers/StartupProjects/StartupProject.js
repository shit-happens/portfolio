import React from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import SectionHead from "../../components/sectionHead/SectionHead";
import Reveal from "../../components/reveal/Reveal";

export default function StartupProject() {
  if (!bigProjects.display) {
    return null;
  }

  return (
    <div className="band">
      <section className="section startups" id="projects">
        <SectionHead
          eyebrow="06 / Internships"
          title={bigProjects.title}
          subtitle={bigProjects.subtitle}
        />

        <div className="startup-grid">
          {bigProjects.projects.map((project, i) => (
            <Reveal className="startup" key={i} delay={(i % 3) * 90}>
              {project.image && (
                <div className="startup__logo">
                  <img src={project.image} alt={project.projectName} />
                </div>
              )}

              <h3 className="startup__name">{project.projectName}</h3>
              <p className="startup__desc">{project.projectDesc}</p>

              {project.footerLink && (
                <div className="startup__links">
                  {project.footerLink.map((link, j) => (
                    <a
                      key={j}
                      className="startup__link"
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
          ))}
        </div>
      </section>
    </div>
  );
}
