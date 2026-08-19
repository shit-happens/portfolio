import React from "react";
import "./Footer.scss";
import {greeting, contactInfo} from "../../portfolio";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <a href="#greeting" className="site-footer__brand">
          <span className="site-footer__bracket">&lt;</span>
          {greeting.username}
          <span className="site-footer__bracket">/&gt;</span>
        </a>

        <div className="site-footer__notes">
          <p>
            © {new Date().getFullYear()} Anshit Vishwakarma
            {contactInfo.location ? ` · ${contactInfo.location}` : ""}
          </p>
        </div>
      </div>
    </footer>
  );
}
