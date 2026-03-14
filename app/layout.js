import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import dynamic from "next/dynamic";
import { rootMetadata } from "@/lib/seo";

const BootstrapClient = dynamic(() => import("@/components/BootstrapClient"), {
  ssr: false,
});
const CustomCursor = dynamic(
  () => import("@/components/customcursor/Cutomcursor"),
  { ssr: false }
);

export const metadata = rootMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body>
        <CustomCursor />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
