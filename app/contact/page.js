"use client";
import React, { useState } from "react";
import "./contact.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { useLanguage } from "@/components/lib/LanguageContext";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [query, setQuery] = useState("");
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const { t, isGerman } = useLanguage();
  const copy = (en, de) => isGerman ? de : en;

  async function handleSubmit(event) {
    event.preventDefault();
    if (loading) return;

    // Reset errors and sent status before processing
    setErrors([]);
    setSent(false);
    setLoading(true);

    if (!email.trim() || !query.trim() || !name.trim()) {
      setErrors([t("contact.allFieldsRequired", "All fields are necessary.")]);
      setLoading(false);
      return;
    }

    try {
      // Proceed with sending email
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, query: subject.trim() ? `Subject: ${subject.trim()}\n\n${query}` : query }),
      });

      if (res.ok) {
        const form = event.target;
        form.reset();
        setName("");
        setEmail("");
        setQuery("");
        setSubject("");
        setSent(true);
        setLoading(false);
      } else {
        setErrors([t("contact.couldNotSend", "Could not send email. Please try again later.")]);
        setLoading(false);
      }
    } catch (error) {
      setErrors([t("contact.couldNotSend", "Could not send email. Please try again later.")]);
      setLoading(false);
    }
  }


  const details = [
    { icon: "✉", title: "Email", text: "shashiawaripreetham@gmail.com", href: "mailto:shashiawaripreetham@gmail.com" },
    { icon: "⌖", title: copy("Location", "Standort"), text: copy("Germany", "Deutschland") },
    { icon: "in", title: "LinkedIn", text: copy("Connect with me on LinkedIn", "Auf LinkedIn vernetzen"), href: "https://www.linkedin.com/in/shashipreethamawari", external: true },
    { icon: "</>", title: "GitHub", text: copy("Check out my projects", "Meine Projekte entdecken"), href: "https://github.com/Shashiawari", external: true },
    { icon: "◇", title: copy("Availability", "Verfügbarkeit"), text: copy("Open to internships & new opportunities", "Offen für Praktika und neue Möglichkeiten") },
  ];
  return (
    <div className="contact">
      <Navbar />
      <main className="contactPage">
        <header className="contactHeading">
          <p className="contactEyebrow">{copy("GET IN TOUCH", "KONTAKT AUFNEHMEN")}</p>
          <h1>{copy("Let’s", "Lass uns")} <span>{copy("Work Together", "zusammenarbeiten")}</span></h1>
          <p>{copy("I’m always open to discussing new opportunities, interesting projects, or just having a chat about technology.", "Ich freue mich auf neue Möglichkeiten, spannende Projekte oder einfach einen Austausch über Technologie.")}</p>
        </header>
        <div className="contactLayout">
          <aside className="contactDetails" aria-label={copy("Contact details", "Kontaktdaten")}>
            {details.map(({ icon, title, text, href, external }) => {
              const content = <><span className="contactIcon" aria-hidden="true">{icon}</span><span className="contactDetailText"><strong>{title}</strong><span>{text}</span></span>{href && <span className="contactArrow" aria-hidden="true">↗</span>}</>;
              return href ? <a className="contactDetail" key={title} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>{content}</a> : <div className="contactDetail" key={title}>{content}</div>;
            })}
          </aside>
          <form className="contactForm" onSubmit={handleSubmit} aria-busy={loading}>
            <div className="contactFormHeading"><span className="contactIcon" aria-hidden="true">✉</span><div><h2>{copy("Send Me a Message", "Schreib mir eine Nachricht")}</h2><p>{copy("Feel free to reach out. I’ll get back to you as soon as possible.", "Melde dich gerne. Ich antworte dir so bald wie möglich.")}</p></div></div>
            <div className="contactInputRow">
              <label className="contactField"><span>{copy("Your name", "Dein Name")}</span><input name="name" autoComplete="name" value={name} onChange={e => setName(e.target.value)} required placeholder={copy("Your name", "Dein Name")} /></label>
              <label className="contactField"><span>{copy("Your email", "Deine E-Mail")}</span><input name="email" type="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder={copy("Your email", "Deine E-Mail")} /></label>
            </div>
            <label className="contactField"><span>{copy("Subject (optional)", "Betreff (optional)")}</span><input name="subject" value={subject} onChange={e => setSubject(e.target.value)} placeholder={copy("Subject (optional)", "Betreff (optional)")} /></label>
            <label className="contactField contactMessage"><span>{copy("Your message", "Deine Nachricht")}</span><textarea name="message" value={query} onChange={e => setQuery(e.target.value)} required maxLength={500} rows={5} placeholder={copy("Your message", "Deine Nachricht")} /><small>{query.length}/500</small></label>
            <div className="contactFeedback" aria-live="polite">
              {sent && <p role="status">{t("contact.sentSuccess", "Thank you for visiting my portfolio! Your message has been sent successfully. I'll get back to you soon.")}</p>}
              {errors.map((error, index) => <p role="alert" key={index}>{error}</p>)}
            </div>
            <button type="submit" className="contactSend" disabled={loading}><span aria-hidden="true">↗</span>{loading ? copy("Sending…", "Wird gesendet…") : copy("Send Message", "Nachricht senden")}<span aria-hidden="true">→</span></button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Page;
