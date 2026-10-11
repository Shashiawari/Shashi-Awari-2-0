"use client";
import "./projects.css";
import Link from "next/link";
import { useLanguage } from "@/components/lib/LanguageContext";
const projects = [
  { title: "FindH", key: "findh", media: "/findh.webm", anchor: "findh", description: "Check a rental before you commit. FindH connects renters with local agents who visit properties and share verified reports." },
  { title: "Defungi", key: "defungi", media: "/cnn.webm", anchor: "defungi-cnn", description: "A computer vision project that uses a convolutional neural network to identify fungal types in microscope images." },
  { title: "Second Brain AI", key: "secondBrain", media: "/Secai.webm", anchor: "second-brain-ai", description: "Bring your documents and websites together, ask questions, and switch AI models without losing the thread of your conversation." },
];
const Arrow = ({ className }) => <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" /></svg>;
export default function Projects() {
  const { t } = useLanguage();
  return (
    <section className="projects homeProjects mx-4 my-5">
      <div className="container">
        <div className="d-flex d">
          <h2 className="projects-title">{t("projects.title", "Projects")}</h2>
          <Link href="/projects">{t("projects.more", "More")} &rarr;</Link>
        </div>
        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-lg-4 col-12" key={project.key}>
              <article className="card">
                {project.media.endsWith(".png") ? (
                  <img className="homeProjectMedia" src={project.media} alt="Defungi fungal image classification" loading="lazy" />
                ) : (
                  <video className="homeProjectMedia" src={project.media} aria-label={`${project.title} preview`} muted autoPlay loop playsInline preload="metadata" />
                )}
                <h4>{project.title}</h4>
                <p>{t(`projects.${project.key}Summary`, project.description)}</p>
                <Link className="animated-button" href={`/projects#${project.anchor}`} aria-label={`${t("projects.readMore", "Read More")}: ${project.title}`}>
                  <Arrow className="arr-2" /><span className="text">{t("projects.readMore", "Read More")}</span><span className="circle" /><Arrow className="arr-1" />
                </Link>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
