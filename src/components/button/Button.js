import React from "react";
import "./Button.scss";

/**
 * variant: "primary" (filled accent) | "ghost" (outlined)
 */
export default function Button({
  text,
  className = "",
  href,
  newTab,
  variant = "primary",
  download,
  icon
}) {
  return (
    <a
      className={`btn btn--${variant} ${className}`.trim()}
      href={href}
      download={download}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      <span className="btn__label">{text}</span>
      {icon && <i className={`btn__icon ${icon}`} aria-hidden="true" />}
    </a>
  );
}
