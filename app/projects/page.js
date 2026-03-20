import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { createPageMetadata } from "@/lib/seo";
import ProjectsShowcase from "./ProjectsShowcase";
import ProjectsMore from "./ProjectsMore";
import "./project.css";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Explore projects by Shashi Preetham Awari, also known as Shashi Awari, including full-stack apps, AI work, APIs, machine learning ideas, and interactive web experiences.",
  path: "/projects",
  keywords: ["Shashi Awari projects", "Shashi Preetham Awari portfolio projects"],
});

const ProjectsPage = () => {
  return (
    <div className="proj projectPage">
      <Navbar />
      <ProjectsShowcase />
      <ProjectsMore />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
