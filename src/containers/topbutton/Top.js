import React, {useEffect, useState} from "react";
import "./Top.scss";

export default function Top() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({top: 0, behavior: "smooth"});

  return (
    <button
      onClick={scrollToTop}
      className={`top-button ${isVisible ? "is-visible" : ""}`}
      title="Go to top"
      aria-label="Scroll back to top"
      type="button"
    >
      <i className="fas fa-arrow-up" aria-hidden="true" />
    </button>
  );
}
