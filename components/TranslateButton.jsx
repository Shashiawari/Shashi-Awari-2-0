"use client";

import React, { useEffect, useState } from "react";

/**
 * TranslateButton Component
 * 
 * A floating button that toggles the website language between English and German
 * using the Google Translate client-side script.
 */
const TranslateButton = () => {
  const [isTranslated, setIsTranslated] = useState(false);

  useEffect(() => {
    // 1. Define the initialization function globally
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "de,en",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    // 2. Add the script if it doesn't exist
    if (!document.getElementById("google-translate-script")) {
      const addScript = document.createElement("script");
      addScript.id = "google-translate-script";
      addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      addScript.async = true;
      document.body.appendChild(addScript);
    }

    // 3. Robust CSS to hide Google Translate UI and prevent layout shifts
    const style = document.createElement("style");
    style.id = "google-translate-custom-styles";
    style.innerHTML = `
      /* Prevent pushing body down */
      html { top: 0 !important; }
      body { top: 0 !important; position: static !important; }
      
      /* Hide all Google Translate UI elements */
      .skiptranslate,
      .goog-te-banner-frame,
      .goog-te-balloon-frame,
      .goog-te-menu-frame,
      .goog-tooltip,
      .goog-tooltip:hover,
      .goog-text-highlight,
      #goog-gt-tt,
      #google_translate_element {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }

      /* Hide the 'show original' popup */
      .goog-te-spinner-pos { display: none !important; }
    `;
    document.head.appendChild(style);

    return () => {
      // Optional: remove styles if component is destroyed
    };
  }, []);

  const toggleLanguage = () => {
    const googleCombo = document.querySelector("select.goog-te-combo");
    if (!googleCombo) {
      console.warn("Translation engine loading... please wait a moment.");
      // If it fails, we try to re-init or just wait
      return;
    }

    if (!isTranslated) {
      googleCombo.value = "de";
      googleCombo.dispatchEvent(new Event("change"));
      setIsTranslated(true);
    } else {
      googleCombo.value = "en";
      googleCombo.dispatchEvent(new Event("change"));
      setIsTranslated(false);
    }
  };

  return (
    <div className="translate-wrapper" style={{ display: "inline-block" }}>
      {/* Target for Google Translate */}
      <div id="google_translate_element" style={{ display: "none" }}></div>

      {/* Inline Button */}
      <button
        onClick={toggleLanguage}
        className="translate-toggle-button"
        style={{
          width: "3.1rem",
          height: "3.1rem",
          borderRadius: "1rem",
          backgroundColor: isTranslated ? "rgba(255, 8, 8, 0.15)" : "rgba(255, 255, 255, 0.06)",
          color: "white",
          border: isTranslated ? "1px solid rgba(255, 8, 8, 0.4)" : "1px solid rgba(255, 255, 255, 0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          fontWeight: "700",
          cursor: "pointer",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          boxShadow: "0 14px 28px rgba(0, 0, 0, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
          transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
          outline: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.backgroundColor = isTranslated ? "rgba(255, 8, 8, 0.25)" : "rgba(255, 255, 255, 0.12)";
          e.currentTarget.style.borderColor = isTranslated ? "rgba(255, 8, 8, 0.6)" : "rgba(255, 255, 255, 0.24)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.backgroundColor = isTranslated ? "rgba(255, 8, 8, 0.15)" : "rgba(255, 255, 255, 0.06)";
          e.currentTarget.style.borderColor = isTranslated ? "rgba(255, 8, 8, 0.4)" : "rgba(255, 255, 255, 0.12)";
        }}
      >
        {isTranslated ? "EN" : "DE"}
      </button>
    </div>
  );
};

export default TranslateButton;
