import React from "react";
import "./projects.css";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="projects mx-4 my-5">
      <div className="container">
        <div className="d-flex d">
          <h1
            style={{
              fontFamily: "modernsans",
              textTransform: "uppercase",
              color: "white",
              fontSize: "32px",
            }}
          >
            projects
          </h1>
          <p>
            <Link href={"/projects"}>
              More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </Link>
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-12  ">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1715751501/e179651c-7c9b-4095-8c89-1ff3d7a03095.png"
                alt="japease"
              ></img>
              <h4>japese</h4>
              <p>
                Japease is an online job search website  helps students and
                graduates find and apply for internships and jobs easily, using
                integrated APIs to streamline the process.
              </p>
              <Link href={"/projects"}>
                <button className="animated-button">
                  <svg
                    viewBox="0 0 24 24"
                    className="arr-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                  <span className="text">Read More</span>
                  <span className="circle"></span>
                  <svg
                    viewBox="0 0 24 24"
                    className="arr-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-12 ">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1715751260/53297d93-898f-427b-b955-bc73a979a6b3.png"
                alt="japease"
              ></img>
              <h4>Next level food</h4>
              <p>
                Next Level Food: Share and discover delicious recipes with
                fellow food enthusiasts worldwide. Join us to elevate your
                cooking experience!
              </p>
              <Link href={"/projects"}>
                <button className="animated-button">
                  <svg
                    viewBox="0 0 24 24"
                    className="arr-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                  <span className="text">Read More</span>
                  <span className="circle"></span>
                  <svg
                    viewBox="0 0 24 24"
                    className="arr-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-12 ">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1717211482/a53e622a-2dfe-424f-9b3b-6138f30f34aa.png"
                alt="japease"
              ></img>
              <h4>NexGen</h4>
              <p>
                NexGen is an online service offering personalized developer
                assistance 24/7 for individuals and businesses seeking to create
                websites or online platforms.
              </p>
              <Link href={"/projects"}>
                <button className="animated-button">
                  <svg
                    viewBox="0 0 24 24"
                    className="arr-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                  <span className="text">Read More</span>
                  <span className="circle"></span>
                  <svg
                    viewBox="0 0 24 24"
                    className="arr-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Projects;
