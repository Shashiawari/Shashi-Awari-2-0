"use client";

import { useLanguage } from "./LanguageContext";

/**
 * TranslateButton - Floating button to toggle between English and German
 * Positioned near the navbar (top-right)
 * Hidden on mobile (navbar has its own button)
 */
export default function TranslateButton() {
  const { toggleLanguage, isGerman } = useLanguage();

  return (
    <>
      <style>{`
        .translate-floating-btn {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 9999;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: none;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          transition: all 0.2s ease-in-out;
        }
        .translate-floating-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }
        .translate-floating-btn--en {
          background-color: #333;
        }
        .translate-floating-btn--de {
          background-color: #1a73e8;
        }
        @media (max-width: 767.98px) {
          .translate-floating-btn {
            display: none !important;
          }
        }
      `}</style>
      <button
        onClick={toggleLanguage}
        aria-label={isGerman ? "Switch to English" : "Auf Deutsch umschalten"}
        title={isGerman ? "Switch to English" : "Auf Deutsch umschalten"}
        className={`translate-floating-btn ${isGerman ? "translate-floating-btn--de" : "translate-floating-btn--en"}`}
      >
        {isGerman ? "EN" : "DE"}
      </button>
    </>
  );
}
