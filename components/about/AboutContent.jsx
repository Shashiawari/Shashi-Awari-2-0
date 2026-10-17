"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/lib/LanguageContext";
import "./AboutProfile.css";

const tools = [
  ["React", "⚛", "#61dafb"], ["Next.js", "N", "#ffffff"],
  ["Python", "Py", "#f4ce57"], ["Node.js", "JS", "#82c968"],
  ["TensorFlow", "TF", "#ff9e48"], ["PyTorch", "PT", "#ef795f"],
  ["PostgreSQL", "Pg", "#7db5df"], ["MongoDB", "M", "#72ce99"],
];

export default function AboutContent() {
  const { isGerman } = useLanguage();
  const copy = (en, de) => isGerman ? de : en;
  const highlights = [
    ["◇", copy("M.Sc. Student", "Masterstudent"), "Hochschule Schmalkalden, Germany"],
    ["</>", copy("Full-Stack & AI", "Full-Stack & KI"), copy("From interfaces to intelligent systems", "Von Interfaces bis zu intelligenten Systemen")],
    ["↗", copy("2 Research Internships", "2 Forschungspraktika"), "National Institute of Technology, Warangal"],
    ["⌖", copy("Based in Germany", "In Deutschland"), copy("Open to internships & opportunities", "Offen für Praktika und neue Möglichkeiten")],
  ];
  return (
    <section className="aboutProfile" aria-labelledby="about-profile-title">
      <header className="aboutProfileBanner">
        <div className="aboutProfileHeading">
          <p className="aboutProfileEyebrow">/ 01 &nbsp; {copy("ABOUT ME", "ÜBER MICH")}</p>
          <h1 id="about-profile-title">{copy("HELLO,", "HALLO,")}<br />{copy("I’M", "ICH BIN")} <span>SHASHI</span></h1>
          <p className="aboutProfileTagline">{copy("A developer who turns ideas into impact", "Ein Entwickler, der Ideen Wirklichkeit werden lässt")}</p>
        </div>
      </header>

      <div className="aboutProfileGrid">
        <div className="aboutProfilePortrait">
          <Image src="/about.png" alt={copy("Illustration of Shashi working on a laptop", "Illustration von Shashi am Laptop")} width={1254} height={1254} />
          <span className="aboutProfileLocation"><i />{copy("Currently in Germany", "Aktuell in Deutschland")} <span aria-hidden="true">↗</span></span>
        </div>
        <div className="aboutProfileIntro">
          <p className="aboutProfileEyebrow">/ 02 &nbsp; {copy("INTRODUCTION", "VORSTELLUNG")}</p>
          <h2>{copy("I’m a Computer Science student specializing in", "Ich studiere Informatik mit Schwerpunkt")} <span>{copy("AI and Full-Stack Development.", "KI und Full-Stack-Entwicklung.")}</span></h2>
          <p>{copy("I enjoy building useful applications and figuring out how things work. My interests span web development, machine learning, natural language processing, and computer vision.", "Ich entwickle gerne nützliche Anwendungen und finde heraus, wie Dinge funktionieren. Meine Interessen reichen von Webentwicklung und Machine Learning bis zu Sprachverarbeitung und Computer Vision.")}</p>
          <p>{copy("I’m currently pursuing my M.Sc. in Applied Computer Science at Hochschule Schmalkalden, Germany. I learn best by building, experimenting, and sharing ideas with others.", "Aktuell absolviere ich meinen Master in Applied Computer Science an der Hochschule Schmalkalden. Am besten lerne ich durch Entwickeln, Experimentieren und den Austausch mit anderen.")}</p>
          <div className="aboutProfileActions">
            <Link href="/contact" className="aboutProfilePrimary">{copy("Get in Touch", "Kontakt aufnehmen")} <span aria-hidden="true">↗</span></Link>
            <Link href="/projects">{copy("Explore My Work", "Meine Projekte")} <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="aboutProfileHighlights">
          {highlights.map(([icon, title, detail]) => <div className="aboutProfileFact" key={title}><span className="aboutProfileFactIcon" aria-hidden="true">{icon}</span><div><h3>{title}</h3><p>{detail}</p></div></div>)}
        </div>
      </div>

      <section className="aboutProfileTools" aria-labelledby="about-tools-title">
        <div className="aboutProfileToolsHeader">
          <div><p className="aboutProfileEyebrow">/ 03 &nbsp; TECH STACK</p><h2 id="about-tools-title">{copy("Tools I Work With", "Meine Werkzeuge")}</h2></div>
          <p>{copy("The technologies I use to build web applications and explore machine learning.", "Technologien, mit denen ich Webanwendungen entwickle und Machine Learning erkunde.")}</p>
          <Link href="/#skills">{copy("View All Skills", "Alle Kenntnisse")} <span aria-hidden="true">↗</span></Link>
        </div>
        <ul className="aboutProfileToolGrid">{tools.map(([name, mark, color]) => <li key={name}><span style={{ color }} aria-hidden="true">{mark}</span><span>{name}</span></li>)}</ul>
      </section>
    </section>
  );
}
