"use client";

import React from 'react';
import { useLanguage } from "@/components/lib/LanguageContext";

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <p className="copyright">&copy; {currentYear} Shashi Awari. {t("footer.copyright", "All rights reserved.")}</p>
  );
};

export default Copyright;
