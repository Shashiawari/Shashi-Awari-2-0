import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import dynamic from "next/dynamic";
import { rootMetadata } from "@/lib/seo";

import CustomCursor from "@/components/customcursor/Cutomcursor";
import BootstrapClient from "@/components/BootstrapClient";
import LanguageWrapper from "@/components/lib/LanguageWrapper";

export const metadata = rootMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body>
        <LanguageWrapper>
          <CustomCursor />
          {children}
          <BootstrapClient />
        </LanguageWrapper>
      </body>
    </html>
  );
}
