import React, {useEffect, useRef, useState} from "react";

/**
 * Fades + lifts its children into view once, the first time they intersect the
 * viewport. Replaces react-reveal so sections keep their own layout box
 * (react-reveal injected wrapper divs that broke grid/flex parents).
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Anything already on screen at mount reveals right away, so the first
    // paint never depends on an observer callback landing.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {threshold: 0.12, rootMargin: "0px 0px -60px 0px"}
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{"--reveal-delay": `${delay}ms`}}
      {...rest}
    >
      {children}
    </Tag>
  );
}
