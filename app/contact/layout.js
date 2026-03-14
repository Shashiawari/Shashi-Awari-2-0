import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Shashi Preetham Awari, also known as Shashi Awari, for web development, full-stack projects, AI solutions, machine learning work, and collaborations.",
  path: "/contact",
  keywords: ["contact Shashi Awari", "contact Shashi Preetham Awari"],
});

export default function ContactLayout({ children }) {
  return children;
}
