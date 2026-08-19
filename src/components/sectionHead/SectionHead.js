import React from "react";
import Reveal from "../reveal/Reveal";

/**
 * The one heading pattern every section uses: a mono eyebrow with an accent
 * dot, a display-scale title, and an optional muted subtitle.
 */
export default function SectionHead({eyebrow, title, subtitle, id}) {
  return (
    <Reveal className="section-head">
      {eyebrow && <span className="section-head__eyebrow">{eyebrow}</span>}
      <h2 className="section-head__title" id={id}>
        {title}
      </h2>
      {subtitle && <p className="section-head__subtitle">{subtitle}</p>}
    </Reveal>
  );
}
