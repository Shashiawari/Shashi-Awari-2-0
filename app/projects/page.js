import React from "react";
import "./project.css";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
const page = () => {
  return (
    <div className="proj">
      <Navbar />
      <div className="container">
        <div className="row  d-flex- justify-content-center align-items-center">
          <div  className="col-12  col-lg-6">
            <h1 style={{marginBottom:"0px",padding:"0px"}} className="h11 text-center">01</h1>
          </div>
          <div className="col-12 col-lg-6" style={{}}>
            <h3 className="mx-3 ">NexGen</h3>
            <video
            src="nex.mp4"
            alt="japease"
            muted
            autoPlay
            loop
            style={{ width: "100%", height: "auto" }}
          ></video>
            <h4 className="mx-3 ">Technologies Used: Next.js</h4>
            <p className="mx-3">
              NexGen is an innovative platform where users can create custom
              websites with the assistance of a dedicated personal developer.
              The project leverages Next.js to deliver a smooth and efficient
              user experience, empowering individuals to bring their digital
              visions to life effortlessly. NexGen focuses on simplifying the
              website creation process while maintaining high standards of
              quality and functionality.
            </p>
            <Link href={"https://nexxgenn.netlify.app/"}>
              <button className="animated-button">
                <svg
                  viewBox="0 0 24 24"
                  className="arr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className="text">Live Site</span>
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
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-lg-6 order-1 order-lg-0">
            <h3 className="mx-3 ">JapEase</h3>
            <video
            src="jap.mp4"
            alt="japease"
            muted
            autoPlay
            loop
            style={{ width: "100%", height: "auto" }}
          ></video>
            <h4 className="mx-3 ">
              Technologies Used: React.js, Node.js, HTML, CSS, JavaScript, API
            </h4>
            <p className="mx-3">
              JapEase is a React.js application designed to provide a seamless
              experience for students seeking real-time job opportunities. The
              project emphasizes data fetching and dynamic UI updates to ensure
              a responsive and user-friendly interface. The application
              integrates various APIs to offer a comprehensive job search and
              application platform.
            </p>
            <Link href={"https://japease2.onrender.com/"}>
              <button className="animated-button">
                <svg
                  viewBox="0 0 24 24"
                  className="arr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className="text">Live Site</span>
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
          <div className="col-12 col-lg-6 order-0 order-lg-1 text-center">
            <h1 className="h11 text-center">02</h1>
          </div>
        </div>
        <div className="row d-flex- justify-content-center align-items-center">
          <div className="col-12 col-lg-6">
            <h1 className="h11 text-center">03</h1>
          </div>
          <div className="col-12 col-lg-6 ">
            <h3 className="mx-3 ">UIfry</h3>
            <video
            src="uifry.mp4"
            alt="japease"
            muted
            autoPlay
            loop
            style={{ width: "100%", height: "auto" }}
          ></video>
            <h4 className="mx-3 ">Technologies Used: HTML, CSS, JavaScript</h4>
            <p className="mx-3">
              UIFry is a front-end design project focused on creating visually
              appealing and user-friendly website interfaces. The project
              involves coding sophisticated layouts and interactive elements
              using HTML, CSS, and JavaScript. UIFry demonstrates a strong
              understanding of web design principles and the ability to
              translate design concepts into functional web pages.
            </p>
            <Link href={"https://uifry.onrender.com/"}>
              <button className="animated-button">
                <svg
                  viewBox="0 0 24 24"
                  className="arr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className="text">Live Site</span>
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
        <div className="row d-flex- justify-content-center align-items-center">
          <div className="col-12 col-lg-6 order-1 order-lg-0">
            <h3 className="mx-3 ">SnapGen</h3>
            <video
            src="snapg.mp4"
            alt="japease"
            muted
            autoPlay
            loop
            style={{ width: "100%", height: "auto" }}
          ></video>
            <h4 className="mx-3 ">
              Technologies Used:Node.js, HTML, CSS, JavaScript, API
            </h4>
            <p className="mx-3">
              SnapGen is a web application that uses the Unsplash API to
              generate high-quality images based on user queries. The
              application features a sleek and intuitive interface, allowing
              users to search for and download images seamlessly. This project
              showcases the integration of third-party APIs to enrich user
              experience and provide dynamic content.
            </p>
            <Link href={"https://snapgen.onrender.com/"}>
              <button className="animated-button">
                <svg
                  viewBox="0 0 24 24"
                  className="arr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className="text">Live Site</span>
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
          <div className="col-12 col-lg-6 order-0 order-lg-1  text-center">
            <h1 className="h11 ">04</h1>
          </div>
        </div>
        <div className="row d-flex- justify-content-center align-items-center">
          <div className="col-12 col-lg-6">
            <h1 className="h11 text-center">05</h1>
          </div>
          <div className="col-12 col-lg-6 ">
            <h3 className="mx-3 ">Next Level Food</h3>
            <video
            src="food.mp4"
            alt="japease"
            muted
            autoPlay
            loop
            style={{ width: "100%", height: "auto" }}
          ></video>
            <h4 className="mx-3 ">Technologies Used: React,sqlite</h4>
            <p className="mx-3">
              Next Level Food is a web application that enables users to share
              and explore various food recipes. The project showcases a robust
              front-end built with HTML, CSS, and JavaScript. Users can browse
              recipes, view detailed instructions, and contribute their own
              recipes to the community.
            </p>
            <Link href={"https://nextlevelfoods.onrender.com/"}>
              <button className="animated-button">
                <svg
                  viewBox="0 0 24 24"
                  className="arr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className="text">Live Site</span>
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
      <div className="text-center t my-5">
        <h4 style={{ textTransform: "capitalize" }}>
          And many more vist my github profile
        </h4>
        <Link className=" bi-github" href={"https://github.com/Shashiawari"}>
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
      </div>
      <Footer />
    </div>
  );
};

export default page;
