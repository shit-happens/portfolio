import React from "react";
import "./Footer.scss";
import emoji from "react-easy-emoji";
import {greeting} from "../../portfolio";

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
          <p>{emoji("Made with ❤️ by DeveloperFolio Team")}</p>
          <p>
            Theme by{" "}
            <a
              href="https://github.com/saadpasta/developerFolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              developerFolio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
