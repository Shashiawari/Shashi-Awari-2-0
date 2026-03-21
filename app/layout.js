import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import localFont from "next/font/local";
import { rootMetadata } from "@/lib/seo";

import CustomCursor from "@/components/customcursor/Cutomcursor";
import BootstrapClient from "@/components/BootstrapClient";
import LanguageWrapper from "@/components/lib/LanguageWrapper";
import StartupGate from "@/components/StartupGate";

const modernSans = localFont({
  src: "./fonts/ModernSans-Light.otf",
  variable: "--font-body",
  display: "swap",
  preload: true,
  fallback: ["Segoe UI", "sans-serif"],
});

const lemonLight = localFont({
  src: "./fonts/LEMONMILK-Light.otf",
  variable: "--font-ui-light",
  display: "swap",
  preload: false,
  fallback: ["Segoe UI", "sans-serif"],
});

const lemonRegular = localFont({
  src: "./fonts/LEMONMILK-Regular.otf",
  variable: "--font-ui",
  display: "swap",
  preload: true,
  fallback: ["Segoe UI", "sans-serif"],
});

const alumni = localFont({
  src: "./fonts/AlumniSansCollegiateOne-Regular.ttf",
  variable: "--font-numeric",
  display: "swap",
  preload: false,
  fallback: ["Segoe UI", "sans-serif"],
});

const clashMedium = localFont({
  src: "./fonts/ClashDisplay-Medium.otf",
  variable: "--font-display-medium",
  display: "swap",
  preload: false,
  fallback: ["Segoe UI", "sans-serif"],
});

const clashSemibold = localFont({
  src: "./fonts/ClashDisplay-Semibold.otf",
  variable: "--font-heading",
  display: "swap",
  preload: true,
  fallback: ["Segoe UI", "sans-serif"],
});

const clashBold = localFont({
  src: "./fonts/ClashDisplay-Bold.otf",
  variable: "--font-display",
  display: "swap",
  preload: true,
  fallback: ["Segoe UI", "sans-serif"],
});

export const metadata = rootMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body
        className={[
          modernSans.variable,
          lemonLight.variable,
          lemonRegular.variable,
          alumni.variable,
          clashMedium.variable,
          clashSemibold.variable,
          clashBold.variable,
        ].join(" ")}
      >
        <LanguageWrapper>
          <StartupGate>
            <CustomCursor />
            {children}
            <BootstrapClient />
          </StartupGate>
        </LanguageWrapper>
      </body>
    </html>
  );
}
