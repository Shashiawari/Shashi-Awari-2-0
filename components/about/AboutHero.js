"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/lib/LanguageContext";

const AboutHero = () => {
  const heroRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    let cleanup = () => {};
    let active = true;

    const initAnimation = async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (!active || !heroRef.current) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      const context = gsap.context(() => {
        const races = heroRef.current.querySelector(".races");
        const racesWrapper = heroRef.current.querySelector(".racesWrapper");

        if (!races || !racesWrapper) {
          return;
        }

        const scrollDistance = () =>
          Math.max(races.scrollWidth - window.innerWidth, 0);

        const tween = gsap.to(races, {
          x: () => -scrollDistance(),
          duration: 3,
          ease: "none",
        });

        ScrollTrigger.create({
          trigger: racesWrapper,
          start: "top 20%",
          end: () => `+=${scrollDistance()}`,
          pin: true,
          animation: tween,
          scrub: 1,
          invalidateOnRefresh: true,
          markers: false,
        });
      }, heroRef);

      cleanup = () => context.revert();
    };

    initAnimation();

    return () => {
      active = false;
      cleanup();
    };
  }, []);

  return (
    <div ref={heroRef} className="about-content d-none d-lg-block p-3">
      <div className="racesWrapper">
        <div className="races">
          <h2>{t("about.hello", "HELLO!!")}</h2>
          <h2>{t("about.welcome", "Welcome.")}</h2>
        </div>
      </div>

      <div className="space-100vh lightBG"></div>
    </div>
  );
};

export default AboutHero;
