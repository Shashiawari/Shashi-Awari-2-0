"use client";

import { useEffect, useState } from "react";

// Styles must succeed. Optional media may settle independently on slow networks.
function waitForResource(element, ready, eventName, signal) {
  return new Promise((resolve, reject) => {
    if (ready()) return resolve();
    const cleanup = () => {
      element.removeEventListener(eventName, loaded);
      element.removeEventListener("error", failed);
      signal.removeEventListener("abort", aborted);
    };
    const loaded = () => { cleanup(); resolve(); };
    const failed = () => { cleanup(); reject(new Error("Resource failed to load")); };
    const aborted = () => { cleanup(); reject(new Error("Loading cancelled")); };
    element.addEventListener(eventName, loaded, { once: true });
    element.addEventListener("error", failed, { once: true });
    signal.addEventListener("abort", aborted, { once: true });
    if (signal.aborted) aborted();
    else if (ready()) loaded();
  });
}

async function loadAppearance(signal) {
  if (document.readyState === "loading") {
    await waitForResource(document, () => document.readyState !== "loading", "DOMContentLoaded", signal);
  }
  await Promise.all(Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
    .filter((link) => !link.disabled && (!link.media || window.matchMedia(link.media).matches))
    .map((link) => waitForResource(link, () => Boolean(link.sheet), "load", signal)));

  // Read font variables only after CSS has arrived, then request every site face.
  if (document.fonts) {
    const styles = getComputedStyle(document.body);
    const variables = ["--font-body", "--font-ui", "--font-ui-light", "--font-heading",
      "--font-display", "--font-display-medium", "--font-numeric"];
    await Promise.all(variables.map((name) => {
      const family = styles.getPropertyValue(name).trim();
      return family ? document.fonts.load(`16px ${family}`) : Promise.resolve();
    }));
    await document.fonts.ready;
  }
}

async function loadVisibleMedia(signal) {
  const inViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0 && rect.top < innerHeight && rect.bottom > 0;
  };
  const images = Array.from(document.images).filter(inViewport);
  const videos = Array.from(document.querySelectorAll("video")).filter(inViewport);
  await Promise.allSettled([
    ...images.map(async (image) => {
      await waitForResource(image, () => image.complete, "load", signal);
      if (image.naturalWidth && image.decode) await image.decode();
    }),
    ...videos.map((video) => waitForResource(video,
      () => video.readyState >= 2 || Boolean(video.error), "loadeddata", signal)),
  ]);
}

export default function StartupGate({ children }) {
  const [status, setStatus] = useState("loading");
  const isReady = status === "ready";

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    let mediaTimer;
    let frameOne;
    let frameTwo;
    document.body.classList.add("app-startup-pending");
    const timeout = window.setTimeout(() => {
      controller.abort();
      if (!cancelled) setStatus("error");
    }, 20000);

    async function prepare() {
      try {
        await loadAppearance(controller.signal);
        if (cancelled || controller.signal.aborted) return;
        // Do not hold the entire website behind a stalled optional video.
        await Promise.race([
          loadVisibleMedia(controller.signal),
          new Promise((resolve) => { mediaTimer = window.setTimeout(resolve, 6000); }),
        ]);
        if (cancelled || controller.signal.aborted) return;
        clearTimeout(timeout);
        clearTimeout(mediaTimer);
        controller.abort();
        frameOne = requestAnimationFrame(() => {
          frameTwo = requestAnimationFrame(() => {
            if (!cancelled) {
              setStatus("ready");
              document.body.classList.remove("app-startup-pending");
            }
          });
        });
      } catch {
        clearTimeout(timeout);
        controller.abort();
        if (!cancelled) setStatus("error");
      }
    }
    prepare();
    return () => {
      cancelled = true;
      controller.abort();
      clearTimeout(timeout);
      clearTimeout(mediaTimer);
      cancelAnimationFrame(frameOne);
      cancelAnimationFrame(frameTwo);
      document.body.classList.remove("app-startup-pending");
    };
  }, []);

  return (
    <div className={`app-startup-root${isReady ? " is-ready" : ""}`} aria-busy={!isReady}>
      <div className="app-startup-content" style={{ visibility: isReady ? "visible" : "hidden", opacity: isReady ? 1 : 0 }}>
        {children}
      </div>
      {!isReady && (
        <div className="app-startup-overlay" style={{ position: "fixed", inset: 0, zIndex: 99999,
          display: "grid", placeItems: "center", background: "#000", color: "#fff",
          fontFamily: "system-ui, sans-serif", textAlign: "center", padding: "24px", cursor: "auto" }}>
          <div role="status" aria-live="polite">
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "16px", margin: "0 0 16px" }}>
              {status === "error" ? "The page could not finish loading. Please try again." : "Loading portfolio…"}
            </p>
            {status === "error" && (
              <button type="button" onClick={() => window.location.reload()}
                style={{ font: "inherit", padding: "10px 24px", borderRadius: "24px", border: "1px solid #fff",
                  background: "#fff", color: "#000", cursor: "pointer" }}>Retry</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
