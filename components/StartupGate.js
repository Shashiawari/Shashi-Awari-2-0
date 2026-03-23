"use client";

import { useEffect, useState } from "react";
import Loading from "@/app/loading";

const STARTUP_TIMEOUT_MS = 4500;

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

const waitForStylesheets = () =>
  new Promise((resolve) => {
    if (typeof document === "undefined") {
      resolve();
      return;
    }

    const links = Array.from(
      document.querySelectorAll('link[rel="stylesheet"]')
    );

    if (links.length === 0) {
      resolve();
      return;
    }

    let pending = links.length;

    const finish = () => {
      pending -= 1;

      if (pending <= 0) {
        resolve();
      }
    };

    links.forEach((link) => {
      if (link.sheet || link.dataset.loaded === "true") {
        finish();
        return;
      }

      const markDone = () => {
        link.dataset.loaded = "true";
        link.removeEventListener("load", markDone);
        link.removeEventListener("error", markDone);
        finish();
      };

      link.addEventListener("load", markDone, { once: true });
      link.addEventListener("error", markDone, { once: true });
    });
  });

const waitForPageLoad = () =>
  new Promise((resolve) => {
    if (typeof window === "undefined" || document.readyState === "complete") {
      resolve();
      return;
    }

    window.addEventListener("load", resolve, { once: true });
  });

const withTimeout = (promise, timeoutMs = STARTUP_TIMEOUT_MS) =>
  Promise.race([
    promise,
    new Promise((resolve) => {
      setTimeout(resolve, timeoutMs);
    }),
  ]);

export default function StartupGate({ children }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    document.body.classList.add("app-startup-pending");

    withTimeout(
      Promise.all([
        waitForDomReady(),
        waitForStylesheets(),
        waitForFonts(),
        waitForPageLoad(),
      ])
    ).then(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!cancelled) {
            setIsReady(true);
            document.body.classList.remove("app-startup-pending");
          }
        });
      });
    });

    return () => {
      cancelled = true;
      document.body.classList.remove("app-startup-pending");
    };
  }, []);

  return (
    <div
      className={`app-startup-root${isReady ? " is-ready" : ""}`}
      aria-busy={!isReady}
    >
      {children}
      <div className="app-startup-overlay" aria-hidden={isReady}>
        <Loading />
      </div>
    </div>
  );
}
