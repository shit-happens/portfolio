import React, {useEffect, useState} from "react";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("");

  const links = [
    skillsSection.display && {href: "#skills", label: "Skills"},
    workExperiences.display && {href: "#experience", label: "Work Experiences"},
    openSource.display && {href: "#opensource", label: "Open Source"},
    achievementSection.display && {
      href: "#achievements",
      label: "Achievements"
    },
    blogSection.display && {href: "#blogs", label: "Blogs"},
    talkSection.display && {href: "#talks", label: "Talks"},
    resumeSection.display && {href: "#resume", label: "Resume"},
    {href: "#contact", label: "Contact Me"}
  ].filter(Boolean);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section currently owns the upper half of the viewport.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const sections = links
      .map(link => document.querySelector(link.href))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive("#" + entry.target.id);
        });
      },
      {rootMargin: "-96px 0px -55% 0px", threshold: 0}
    );
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the page from scrolling behind the open mobile sheet.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="site-header__inner">
        <a href="#greeting" className="brand" onClick={() => setIsOpen(false)}>
          <span className="brand__bracket">&lt;</span>
          <span className="brand__name">{greeting.username}</span>
          <span className="brand__bracket">/&gt;</span>
        </a>

        <nav className={`nav ${isOpen ? "is-open" : ""}`}>
          <ul className="nav__list">
            {links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav__link ${
                    active === link.href ? "is-active" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          {greeting.resumeLink && (
            <a
              className="header-resume"
              href={greeting.resumeLink}
              download={greeting.resumeFileName}
              target="_blank"
              rel="noopener noreferrer"
              title="Download resume"
              aria-label="Download resume"
            >
              <i className="fas fa-file-download" aria-hidden="true" />
              <span className="header-resume__label">Resume</span>
            </a>
          )}
          <ToggleSwitch />
          <button
            type="button"
            className={`nav-toggle ${isOpen ? "is-open" : ""}`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(open => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <span className="site-header__hairline" aria-hidden="true" />
    </header>
  );
}
export default Header;
