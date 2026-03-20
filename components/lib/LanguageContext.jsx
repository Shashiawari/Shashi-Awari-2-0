"use client";

import { createContext, useContext, useState, useCallback, useMemo } from "react";
import { translations } from "@/data/de";

// Create the context
const LanguageContext = createContext(undefined);

/**
 * LanguageProvider - Wraps the app to provide language state
 * 
 * Usage in layout.js:
 * import { LanguageProvider } from "@/components/lib/LanguageContext";
 * 
 * <LanguageProvider>
 *   {children}
 * </LanguageProvider>
 */
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "en" ? "de" : "en"));
  }, []);

  /**
   * Translation helper function
   * @param {string} path - Dot notation path to translation (e.g., "navbar.home")
   * @param {string} fallback - Fallback text (usually English original)
   * @returns {string} - Translated text or fallback
   * 
   * Usage:
   * const { t } = useLanguage();
   * <h1>{t("hero.title", "Welcome to our website")}</h1>
   */
  const t = useCallback(
    (path, fallback) => {
      if (language === "de") {
        const result = path.split(".").reduce((obj, key) => obj?.[key], translations);
        return result || fallback;
      }
      return fallback;
    },
    [language]
  );

  // Memoize context value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      language,
      toggleLanguage,
      t,
      isGerman: language === "de",
    }),
    [language, toggleLanguage, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * useLanguage hook - Access language state and translation function
 * 
 * Usage in components:
 * import { useLanguage } from "@/components/lib/LanguageContext";
 * 
 * const MyComponent = () => {
 *   const { language, toggleLanguage, t, isGerman } = useLanguage();
 *   return <h1>{t("hero.title", "Welcome to our website")}</h1>;
 * };
 */
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
