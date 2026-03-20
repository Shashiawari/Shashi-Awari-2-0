import Navbar from "@/components/navbar/Navbar";
import React from "react";
import "./about.css";
import Footer from "@/components/footer/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutContent from "@/components/about/AboutContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn more about Shashi Preetham Awari, also known as Shashi Awari, a full-stack developer focused on discipline, fitness, creativity, web development, and AI-driven problem solving.",
  path: "/about",
  keywords: ["about Shashi Preetham Awari", "about Shashi Awari"],
});

const Page = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default Page;
