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
    "Learn more about Shashi Preetham Awari, also known as Shashi Awari, a master’s student in Applied Computer Science working with full-stack development, machine learning, and natural language processing.",
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
