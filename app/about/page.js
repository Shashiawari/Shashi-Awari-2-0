"use client";
import Navbar from "@/components/navbar/Navbar";
import React, { useEffect } from "react";
import "./about.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/footer/Footer";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  useEffect(() => {
    const races = document.querySelector(".races");

    if (races) {
      const getScrollAmount = () => {
        const racesWidth = races.scrollWidth;
        const viewportWidth = window.innerWidth;
        return -(racesWidth - viewportWidth);
      };

      const tween = gsap.to(races, {
        x: getScrollAmount(),
        duration: 3,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: ".racesWrapper",
        start: "top 20%",
        end: () => `+=${races.scrollWidth - window.innerWidth}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
        markers: false,
      });

      return () => {
        tween.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="about-content d-none d-lg-block p-3">
        <div className="racesWrapper">
          <div className="races">
            <h2>HELLO!!</h2>
            <h2>I AM SHASHI PREETHAM .</h2>
            <img
              src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1721541216/image-OjY49NQ4W-transformed_1_w3e894.png"
              height={"500px"}
              style={{ borderRadius: "30px" }}
            ></img>
            <h2>Glad You Are Here</h2>
            <h2> Welcome </h2>
          </div>
        </div>

        <div className="space-100vh lightBG"></div>
      </div>
      <div  className="about-content text-center 	d-md-none	d-lg-none d-sm-block d-flex justify-content-center align-items-center flex-column " style={{height:"100vh"}}>
      <h2 style={{fontSize:"114px"}}>Hello!!</h2>
      <p>I am glad you're here Let's know about me more</p>
      <h2 style={{fontSize:"50px",color:"black"}} className="ttr">Welcome !!!</h2>
      </div>
      <div className="c-2 mt-5  ">
        <h3>All I Ever Did In My Life Is</h3>
        <div className="row fd p-5 d-flex justify-content-center align-items-center">
         
          <div className="col-12 ">
            <h4 className="highlight " >
              <span>code</span>
              <span>,</span>
              <span>workout</span>
              <span>,</span>
              <span>Eat</span>
              <span>&amp;</span>
              <span>sleep</span>
            </h4>
           
          </div>
        </div>
      </div>
      <div className="services p-5">
        <h1 className="mb-5" style={{borderBottom:"2px solid gray"}}>Services I Offer</h1>
        <div className="row">
          <div className="col-12 col-lg-3 col-md-6">
            <div className="card">
              <img
                className="img-fluid"
                src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1721545212/924b0793-457c-406a-b658-01e411026772.png"
                alt="Web Development"
              />
              <h3>Web Development</h3>
              <p>I can build your dream website.</p>
              <p>My services include:</p>
              <ul>
                <li>Responsive web design</li>
                <li>Custom web development</li>
                <li>eCommerce solutions</li>
                <li>SEO optimization</li>
                <li>Website maintenance</li>
              </ul>
              <Link
                className="mt-4"
                href={"/contact"}
                style={{ textDecoration: "none" }}
              >
                <button className="animated-button">
                  <svg
                    viewBox="0 0 24 24"
                    className="arr-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                  <span className="text">Contact Me</span>
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
          <div className="col-12 col-lg-3 col-md-6">
            <div className="card mt-5">
              <img
                className="img-fluid"
                src="https://atriainnovation.com/uploads/2023/11/portada-9.jpg"
                alt="Machine Learning"
              />
              <h3>Machine Learning</h3>
              <p>I can develop intelligent systems for your needs.</p>
              <p>My services include:</p>
              <ul>
                <li>Data preprocessing</li>
                <li>Model development and training</li>
                <li>Predictive analytics</li>
                <li>Natural language processing</li>
                <li>Model evaluation and optimization</li>
              </ul>
              <Link href={"/contact"}>
                <button className="animated-button">
                  <svg
                    viewBox="0 0 24 24"
                    className="arr-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                  <span className="text">Contact Me</span>
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
          <div className="col-12 col-lg-3 col-md-6">
            <div className="card">
              <img
                className="img-fluid"
                src="https://miro.medium.com/v2/resize:fit:1024/1*86dDGzwyawUu_MpEO2im1g.png"
                alt="Deep Learning"
              />
              <h3>Deep Learning</h3>
              <p>I can implement advanced neural networks for complex tasks.</p>
              <p>My services include:</p>
              <ul>
                <li>Image and video analysis</li>
                <li>Speech recognition</li>
                <li>Text generation</li>
                <li>Custom neural network design</li>
                <li>Model deployment</li>
              </ul>
              <Link href={"/contact"}>
                <button className="animated-button">
                  <svg
                    viewBox="0 0 24 24"
                    className="arr-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                  <span className="text">Contact me</span>
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
          <div className="col-12 col-lg-3 col-md-6">
            <div className="card mt-5">
              <img
                className="img-fluid"
                src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/01/104228210.jpg?auto=format&q=60&w=1280&h=960&fit=crop&crop=faces"
                alt="Web Design"
              />
              <h3>Web Design</h3>
              <p>I can create stunning and user-friendly designs.</p>
              <p>My services include:</p>
              <ul>
                <li>UI/UX design</li>
                <li>Graphic design</li>
                <li>Responsive design</li>
                <li>Branding and identity</li>
                <li>Prototyping</li>
              </ul>
              <Link href={"/contact"}>
                <button className="animated-button">
                  <svg
                    viewBox="0 0 24 24"
                    className="arr-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                  <span className="text">Contact Me</span>
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
      <Footer />
    </div>
  );
};

export default Page;
