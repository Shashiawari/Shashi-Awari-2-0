"use client";

import React from "react";
import { useLanguage } from "@/components/lib/LanguageContext";
import "./about.css";
const AboutContent = () => {
  const { t } = useLanguage();

  return (
    <>
      <div className="c-2 mt-5  ">
        <h3>{t("about.title", "ABOUT ME")}</h3>
        <div className="row fd p-5 d-flex justify-content-center align-items-center">
          <div className="parent">
            <div className="div1">
              <h2>
                <span>
                  <div className="dyno"></div>
                </span>{" "}
                {t("about.earlyMorningRoutine", "Early Morning Routine")}
              </h2>
              <p>
                {t("about.earlyMorningP1", "I wake up every morning with the sun, starting my day with focus and clarity. These early hours are my most productive time, allowing me to prioritize my tasks and set my goals for the day.")}
              </p>
              <p>
                {t("about.earlyMorningP2", "As soon as I get up, I spend a few moments in silence to gather my thoughts and practice mindfulness. This helps me stay centered and focused throughout the day. Afterward, I prepare for my workout session, which not only boosts my energy but also sharpens my mental clarity.")}
              </p>
              <p>
                {t("about.earlyMorningP3", "I believe that having a structured morning routine builds discipline and sets a positive tone for the entire day. By establishing these healthy habits, I stay on track, ready to tackle any challenges that come my way with a refreshed mind and body.")}
              </p>
            </div>

            <div className="div2">
              <h2>
                {" "}
                <span>
                  <div className="dyno"></div>
                </span>
                {t("about.physicalFitness", "Physical Fitness")}
              </h2>
              <p>
                {t("about.physicalFitnessDesc", "Fitness is a core part of who I am. Every day, I work out and go for a run to maintain my physical well-being. I believe that staying fit is key to achieving discipline, both physically and mentally.")}
              </p>
            </div>

            <div className="div3">
              <h2>
                {" "}
                <span>
                  <div className="dyno"></div>
                </span>
                {t("about.mentalStrength", "Mental Strength")}
              </h2>
              <p>
                {t("about.mentalStrengthDesc", "I am proud of my mental toughness. By continually pushing my limits, I ensure that I remain resilient and capable of handling challenges with a positive mindset and unwavering determination.")}
              </p>
            </div>

            <div className="div4">
              <h2>
                {" "}
                <span>
                  <div className="dyno"></div>
                </span>
                {t("about.creativeInnovative", "Creative and Innovative")}
              </h2>
              <p>
                {t("about.creativeInnovativeDesc", "Creativity and innovation drive me. I love to explore new ideas, solve problems in unique ways, and challenge myself to think outside the box. I bring these qualities to both my personal and professional endeavors.")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
