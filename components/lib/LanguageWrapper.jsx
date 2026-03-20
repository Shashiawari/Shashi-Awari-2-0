"use client";

import { LanguageProvider } from "@/components/lib/LanguageContext";
import TranslateButton from "@/components/lib/TranslateButton";

/**
 * LanguageWrapper - Client-side wrapper for language functionality
 * Provides the LanguageContext to all children and renders the TranslateButton
 */
export default function LanguageWrapper({ children }) {
  return (
    <LanguageProvider>
      <TranslateButton />
      {children}
    </LanguageProvider>
  );
}
