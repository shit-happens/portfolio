import React from "react";
import "./SplashScreen.css";
import {greeting, splashScreen} from "../../portfolio";

export default function SplashScreen() {
  return (
    <div className="splash">
      <div className="splash__mark">
        <span className="splash__bracket">&lt;</span>
        <span className="splash__name">{greeting.username}</span>
        <span className="splash__bracket">/&gt;</span>
      </div>
      <div className="splash__bar" aria-hidden="true">
        <span style={{animationDuration: `${splashScreen.duration}ms`}} />
      </div>
    </div>
  );
}
