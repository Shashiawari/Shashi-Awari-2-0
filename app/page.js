import Navbar from "@/components/navbar/Navbar";
import React from "react";
import Main from "@/components/main/Main";
import Content from "@/components/content/Content";
import Footer from "@/components/footer/Footer";
import Projects from "@/components/projects/Projects";
import Resume from "@/components/resume/Resume";
const page = () => {
  return (
    <div>
   
      <Navbar />
      <Main />
      <Content />
      <Projects />
      <Resume/>
      <Footer />
    </div>
  );
};

export default page;
