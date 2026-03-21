"use client";

import { useEffect, useState } from "react";
import Loading from "@/app/loading";

const waitForDomReady = () =>
  new Promise((resolve) => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", resolve, { once: true });
      return;
    }

    resolve();
  });

const waitForFonts = () => {
  if (typeof document === "undefined" || !document.fonts?.ready) {
    return Promise.resolve();
  }

  return document.fonts.ready.catch(() => undefined);
};

export default function StartupGate({ children }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    Promise.all([waitForDomReady(), waitForFonts()]).then(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!cancelled) {
            setIsReady(true);
          }
        });
      });
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className={`app-startup-root${isReady ? " is-ready" : ""}`}>
      <div className="app-startup-content">{children}</div>
      <div className="app-startup-overlay" aria-hidden={isReady}>
        <Loading />
      </div>
    </div>
  );
}
