"use client";

import { useEffect } from "react";

export default function PageAnimations() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-page-reveal]"));

    targets.forEach((target, index) => {
      target.classList.add("page-reveal");
      target.style.setProperty("--reveal-delay", `${Math.min(index * 70, 280)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("page-reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return null;
}
