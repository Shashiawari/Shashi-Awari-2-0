import Navbar from "@/components/navbar/Navbar";
import React from "react";
import Main from "@/components/main/Main";
import Content from "@/components/content/Content";
import Footer from "@/components/footer/Footer";
import Projects from "@/components/projects/Projects";
import Resume from "@/components/resume/Resume";
import {
  personStructuredData,
  siteDescription,
  websiteStructuredData,
} from "@/lib/seo";

const homepageStructuredData = [websiteStructuredData, personStructuredData];

const page = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageStructuredData),
        }}
      />
      <div className="sr-only">
        <h1>Shashi Preetham Awari portfolio</h1>
        <p>
          {siteDescription}
        </p>
      </div>
      <Navbar />
      <div className="blurflex">
      <div className="boxblur2"></div>
      <Main />
      </div>
      <Content />
      <Projects />
      <Resume/>
      <Footer />
    </div>
  );
};

export default page;
