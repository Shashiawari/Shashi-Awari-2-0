"use client";

import { useEffect } from "react";

const selector = "#lineDrawing .lines path";

const HeroLineAnimation = () => {
  useEffect(() => {
    const paths = Array.from(document.querySelectorAll(selector));

    if (!paths.length) {
      return undefined;
    }

    const animations = paths.map((path, index) => {
      const length = path.getTotalLength();

      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;

      return path.animate(
        [
          { strokeDashoffset: length },
          { strokeDashoffset: 0 },
        ],
        {
          duration: 3000,
          delay: index * 80,
          easing: "ease-in-out",
          direction: "alternate",
          iterations: Infinity,
          fill: "forwards",
        }
      );
    });

    return () => {
      animations.forEach((animation) => animation.cancel());
      paths.forEach((path) => {
        path.style.removeProperty("stroke-dasharray");
        path.style.removeProperty("stroke-dashoffset");
      });
    };
  }, []);

  return null;
};

export default HeroLineAnimation;
