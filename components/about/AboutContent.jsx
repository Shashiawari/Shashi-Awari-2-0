"use client";

import React from "react";
import Link from "next/link";
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
      <div className="services p-5">
        <h1 className="mb-5" style={{ borderBottom: "2px solid gray" }}>
          {t("about.servicesTitle", "Services I Offer")}
        </h1>
        <div className="row">
          <div className="col-12 col-lg-3 col-md-6">
            <div className="card">
              <img
                className="img-fluid"
                src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1721545212/924b0793-457c-406a-b658-01e411026772.png"
                alt="Web Development"
                loading="lazy"
                decoding="async"
              />
              <h3>{t("about.webDevelopment", "Web Development")}</h3>
              <p>{t("about.webDevDesc", "I can build your dream website.")}</p>
              <p>{t("about.webDevServices", "My services include:")}</p>
              <ul>
                <li>{t("about.webDevResponsive", "Responsive web design")}</li>
                <li>{t("about.webDevCustom", "Custom web development")}</li>
                <li>{t("about.webDevEcommerce", "eCommerce solutions")}</li>
                <li>{t("about.webDevSeo", "SEO optimization")}</li>
                <li>{t("about.webDevMaintenance", "Website maintenance")}</li>
              </ul>
              <Link
                className="mt-4"
                href={"/contact"}
                style={{ textDecoration: "none" }}
              >
                <button className="animated-button">
                  <svg
                    viewBox="0 0 24 24"
                    className="arr-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                  <span className="text">{t("about.contactMe", "Contact Me")}</span>
                  <span className="circle"></span>
                  <svg
                    viewBox="0 0 24 24"
                    className="arr-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <div className="card mt-5">
              <img
                className="img-fluid"
                src="https://atriainnovation.com/uploads/2023/11/portada-9.jpg"
                alt="Machine Learning"
                loading="lazy"
                decoding="async"
              />
              <h3>{t("about.machineLearning", "Machine Learning")}</h3>
              <p>{t("about.mlDesc", "I can develop intelligent systems for your needs.")}</p>
              <p>{t("about.mlServices", "My services include:")}</p>
              <ul>
                <li>{t("about.mlDataPreprocessing", "Data preprocessing")}</li>
                <li>{t("about.mlModelDevelopment", "Model development and training")}</li>
                <li>{t("about.mlPredictiveAnalytics", "Predictive analytics")}</li>
                <li>{t("about.mlNlp", "Natural language processing")}</li>
                <li>{t("about.mlModelEvaluation", "Model evaluation and optimization")}</li>
              </ul>
              <Link href={"/contact"}>
                <button className="animated-button">
                  <svg
                    viewBox="0 0 24 24"
                    className="arr-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                  <span className="text">{t("about.contactMe", "Contact Me")}</span>
                  <span className="circle"></span>
                  <svg
                    viewBox="0 0 24 24"
                    className="arr-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <div className="card">
              <img
                className="img-fluid"
                src="https://miro.medium.com/v2/resize:fit:1024/1*86dDGzwyawUu_MpEO2im1g.png"
                alt="Deep Learning"
                loading="lazy"
                decoding="async"
              />
              <h3>{t("about.deepLearning", "Deep Learning")}</h3>
              <p>{t("about.dlDesc", "I can implement advanced neural networks for complex tasks.")}</p>
              <p>{t("about.dlServices", "My services include:")}</p>
              <ul>
                <li>{t("about.dlImageVideo", "Image and video analysis")}</li>
                <li>{t("about.dlSpeechRecognition", "Speech recognition")}</li>
                <li>{t("about.dlTextGeneration", "Text generation")}</li>
                <li>{t("about.dlCustomNeural", "Custom neural network design")}</li>
                <li>{t("about.dlModelDeployment", "Model deployment")}</li>
              </ul>
              <Link href={"/contact"}>
                <button className="animated-button">
                  <svg
                    viewBox="0 0 24 24"
                    className="arr-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                  <span className="text">{t("about.contactMe", "Contact me")}</span>
                  <span className="circle"></span>
                  <svg
                    viewBox="0 0 24 24"
                    className="arr-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <div className="card mt-5">
              <img
                className="img-fluid"
                src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/01/104228210.jpg?auto=format&q=60&w=1280&h=960&fit=crop&crop=faces"
                alt="Web Design"
                loading="lazy"
                decoding="async"
              />
              <h3>{t("about.webDesign", "Web Design")}</h3>
              <p>{t("about.webDesignDesc", "I can create stunning and user-friendly designs.")}</p>
              <p>{t("about.webDesignServices", "My services include:")}</p>
              <ul>
                <li>{t("about.webDesignUiUx", "UI/UX design")}</li>
                <li>{t("about.webDesignGraphic", "Graphic design")}</li>
                <li>{t("about.webDesignResponsive", "Responsive design")}</li>
                <li>{t("about.webDesignBranding", "Branding and identity")}</li>
                <li>{t("about.webDesignPrototyping", "Prototyping")}</li>
              </ul>
              <Link href={"/contact"}>
                <button className="animated-button">
                  <svg
                    viewBox="0 0 24 24"
                    className="arr-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                  <span className="text">{t("about.contactMe", "Contact Me")}</span>
                  <span className="circle"></span>
                  <svg
                    viewBox="0 0 24 24"
                    className="arr-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
