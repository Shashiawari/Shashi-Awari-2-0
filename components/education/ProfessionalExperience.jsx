"use client";

import { useLanguage } from "@/components/lib/LanguageContext";
import "./education.css";

export default function ProfessionalExperience() {
  const { isGerman } = useLanguage();
  return (
    <>
      <section className="education container" aria-labelledby="experience-title">
        <h2 id="experience-title">{isGerman ? "Berufserfahrung" : "Work Experience"}</h2>
        <div className="education-grid">
          <article className="education-card">
            <p className="education-date">{isGerman ? "Dez. 2023 – Jan. 2024" : "Dec 2023 – Jan 2024"}</p>
            <h3>{isGerman ? "Forschungspraktikant für Deep Learning" : "Deep Learning Research Intern"}</h3>
            <p>National Institute of Technology Warangal, {isGerman ? "Indien" : "India"}</p>
            <h4 className="experience-topic">Text Analysis using Deep Learning Techniques</h4>
            <p>{isGerman
              ? "Ich setzte BERT-basierte Modelle zur Textanalyse und Sentimentklassifikation ein. Dazu gehörten Datenvorverarbeitung, Merkmalsextraktion und Modellevaluation. Die Ergebnisse dokumentierte ich in einem betreuten Projektbericht."
              : "Applied BERT-based models to text analysis and sentiment classification. Handled data preprocessing, feature extraction, and model evaluation, and documented the work in a supervised project report."}</p>
          </article>
          <article className="education-card">
            <p className="education-date">{isGerman ? "Mai 2024 – Juni 2024" : "May 2024 – Jun 2024"}</p>
            <h3>{isGerman ? "Praktikant in der Entwicklung großer Sprachmodelle" : "Large Language Model Developer Intern"}</h3>
            <p>National Institute of Technology Warangal, {isGerman ? "Indien" : "India"}</p>
            <h4 className="experience-topic">Development of Large Language Model</h4>
            <p>{isGerman
              ? "Unter der Betreuung von Dr. Tene Ramakrishnudu arbeitete ich an der Entwicklung großer Sprachmodelle. Mein Schwerpunkt lag auf transformerbasierten NLP-Workflows, Datenvorverarbeitung, Training und Evaluation."
              : "Worked on large language model development under Dr. Tene Ramakrishnudu, focusing on transformer-based NLP workflows, data preprocessing, training, and evaluation."}</p>
          </article>
        </div>
      </section>
      <section className="education container" aria-labelledby="presentations-title">
        <h2 id="presentations-title">{isGerman ? "Konferenzvorträge" : "Conference Presentations"}</h2>
        <div className="education-grid">
          <article className="education-card">
            <p className="education-date">{isGerman ? "2.–3. April 2025" : "2–3 April 2025"}</p>
            <h3>Smart Detection of Dermatophyte Fungi</h3>
            <p className="experience-topic">ICLTECAT 2025</p>
            <p>{isGerman ? "Präsentiert am" : "Presented at"} Geethanjali Institute of Science &amp; Technology, Nellore.</p>
          </article>
          <article className="education-card">
            <p className="education-date">{isGerman ? "28.–29. März 2025" : "28–29 March 2025"}</p>
            <h3>Sarcasm Detection Using BERT</h3>
            <p className="experience-topic">ICMDESO 2025</p>
            <p>{isGerman ? "Präsentiert am" : "Presented at"} ANITS, Visakhapatnam.</p>
            <span className="education-status">Paper ID: T5-5001</span>
          </article>
        </div>
      </section>
    </>
  );
}
