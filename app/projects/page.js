import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "./project.css";

// Edit this list to add, remove, or reorder projects.
const projects = [
  {
    title: "NexGen",
    videoSrc: "nex.mp4",
    technologies: "Next.js",
    description:
      "NexGen is an innovative platform where users can create custom websites with the assistance of a dedicated personal developer. The project leverages Next.js to deliver a smooth and efficient user experience, empowering individuals to bring their digital visions to life effortlessly.",
    href: "https://nexxgenn.netlify.app/",
  },
  {
    title: "Chit-Chat",
    videoSrc: "chit.mp4",
    technologies: "Node.js, HTML, CSS, JavaScript",
    description:
      "Chit Chat is a real-time messaging app built with Node.js, Express, and Socket.io. It offers private chat rooms using UUID for secure conversations, along with instant messaging and file sharing in a simple, user-friendly interface.",
    href: "https://chit-chat-5e9g.onrender.com/",
  },
  {
    title: "GenAI",
    videoSrc: "gen.mp4",
    technologies: "Next.js, HTML, CSS, JavaScript",
    description:
      "GenAI is a platform that uses generative AI to create dynamic content like text and images. It is designed for easy interaction, offering a seamless experience for developers and creators exploring AI-powered workflows.",
    href: "https://main--genn-ai.netlify.app/",
  },
  {
    title: "SnapGen",
    videoSrc: "snapg.mp4",
    technologies: "Node.js, HTML, CSS, JavaScript, API",
    description:
      "SnapGen is a web application that uses the Unsplash API to generate high-quality images based on user queries. The application features a sleek interface that makes searching and downloading images feel fast and intuitive.",
    href: "https://snapgen.onrender.com/",
  },
  {
    title: "Next Level Food",
    videoSrc: "food.mp4",
    technologies: "React, SQLite",
    description:
      "Next Level Food is a web application that enables users to share and explore food recipes. The project focuses on a clear front-end experience where users can browse recipes, view instructions, and contribute their own dishes.",
    href: "https://nextlevelfoods.onrender.com/",
  },
  {
    title: "JapEase",
    videoSrc: "jap.mp4",
    technologies: "React.js, Node.js, HTML, CSS, JavaScript, API",
    description:
      "JapEase is a React.js application designed to help students discover real-time job opportunities. It emphasizes data fetching, dynamic UI updates, and API integrations to create a responsive job search experience.",
    href: "https://japease2.onrender.com/",
  },
];

const ArrowIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
  </svg>
);

const ProjectCard = ({ project, index }) => {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="projectCard" style={{ "--card-index": index }}>
      <div className="projectCardMedia">
        <span className="projectCardNumber">{number}</span>
        <video
          src={project.videoSrc}
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
          aria-label={project.title}
        ></video>
      </div>

      <div className="projectCardBody">
        <p className="projectCardKicker">Featured Project</p>
        <h3>{project.title}</h3>
        <p className="projectCardTech">Technologies Used: {project.technologies}</p>
        <p className="projectCardDescription">{project.description}</p>

        <Link href={project.href} className="animated-button projectCardButton">
          <ArrowIcon className="arr-2" />
          <span className="text">Live Site</span>
          <span className="circle"></span>
          <ArrowIcon className="arr-1" />
        </Link>
      </div>
    </article>
  );
};

const ProjectsPage = () => {
  return (
    <div className="proj projectPage">
      <Navbar />

      <section className="projectGridSection">
        <div className="container projectGridContainer">
          <div className="projectGridIntro">
            <div>
              <p className="projectGridEyebrow">Selected Work</p>
              <h1>Projects</h1>
              <p className="projectGridLead">
               Make sure to view and visit them.
              </p>
            </div>

            <div className="projectGridStat">
              <span>{String(projects.length).padStart(2, "0")}</span>
              <p>Projects and counting</p>
            </div>
          </div>

          <div className="projectCardsGrid">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="projectMore text-center">
        <h4>And many more, visit my GitHub profile</h4>
        <Link
          className="projectGithubLink"
          href={"https://github.com/Shashiawari"}
          aria-label="Visit GitHub profile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="white"
            className="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
          </svg>
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
