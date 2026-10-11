"use client";
import { useLanguage } from "@/components/lib/LanguageContext";
import "./education.css";
export default function Education() {
  const { isGerman } = useLanguage();
  return (
    <section id="education" className="education container" aria-labelledby="education-title">
      <h2 id="education-title">{isGerman ? "Ausbildung" : "Education"}</h2>
      <div className="education-grid">
        <article className="education-card">
          <p className="education-date">{isGerman ? "Oktober 2025 – heute" : "October 2025 – Present"}</p>
          <h3>M.Sc. Applied Computer Science</h3>
          <p>Hochschule Schmalkalden, {isGerman ? "Deutschland" : "Germany"}</p>
          <span className="education-status">{isGerman ? "Laufendes Studium" : "Currently pursuing"}</span>
        </article>
        <article className="education-card">
          <p className="education-date">{isGerman ? "Dezember 2021 – Juni 2025" : "December 2021 – June 2025"}</p>
          <h3>B.Tech. Computer Science and Engineering (AI and ML)</h3>
          <p>Vaagdevi College of Engineering, {isGerman ? "Indien" : "India"}</p>
          <span className="education-status">{isGerman ? "Abgeschlossen" : "Completed"}</span>
        </article>
      </div>
    </section>
  );
}
