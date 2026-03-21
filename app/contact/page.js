"use client";
import React, { useState } from "react";
import "./contact.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { useLanguage } from "@/components/lib/LanguageContext";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  async function handleSubmit(event) {
    event.preventDefault();

    // Reset errors and sent status before processing
    setErrors([]);
    setSent(false);
    setLoading(true);

    if (!email || !query || !name) {
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
        body: JSON.stringify({ name, email, query }),
      });

      if (res.ok) {
        const form = event.target;
        form.reset();
        setName("");
        setEmail("");
        setQuery("");
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


  return (
    <div className="contact">
      <Navbar />
      <div className="container d-flex justify-content-center">
        <form className="form" onSubmit={handleSubmit}>
          <div className="cards my-5">
            <h2 className="signup mt-5">{t("contact.title", "Contact Me")}</h2>
            <div className="inputBox1">
              <input
                type="email"
                required="required"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="user">{t("contact.email", "Email")}</span>
            </div>

            <div className="inputBox">
              <input
                type="text"
                required="required"
                onChange={(e) => setName(e.target.value)}
              />
              <span>{t("contact.name", "Name")}</span>
            </div>

            <div className="inputBox">
              <input
                type="text"
                required="required"
                onChange={(e) => setQuery(e.target.value)}
              />
              <span>{t("contact.query", "Query")}</span>
            </div>
            {sent && (
              <p className="text-center my-4" style={{ textTransform: "capitalize" }}>
                {t("contact.sentSuccess", "Sent successfully!")}
              </p>
            )}
            {errors.length > 0 &&
              errors.map((error, index) => (
                <p key={index} className="error">
                  {error}
                </p>
              ))}
            {loading && <p>{t("contact.loading", "Loading.....")}</p>}
            <button type="submit" className="enter">
              {t("contact.send", "Send")}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
