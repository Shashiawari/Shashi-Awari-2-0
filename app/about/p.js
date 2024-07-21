import Navbar from "@/components/navbar/Navbar";
import React from "react";
import "./about.css";
import Footer from "@/components/footer/Footer";
const page = () => {
  return (
    <div>
      <Navbar />
      <div className="center_div">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      <div className="container pg">
        {" "}
        <h1>More than design</h1>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-lg-6 order-1 order-lg-0">
            <h3>Who Am I?</h3>
            <p>
              👋 Hi there i am shashi i am a passionate web developer and a
              programmer I can design and develop your websites with any
              back-end preffered .
            </p>
            <p>
              🌍 My journey began in India in a state named Telangana . A place
              where Much of its surface area is occupied by the Telangana
              Plateau in the north and the Golconda Plateau in the south and is
              composed of gneissic rock which is quiet cool. We have varity of
              restaurants and hotels all these things channel my experiences in
              to creative designs and solutions.
            </p>
            <p>
              Ready ti create your mark in the world lets create something
              extrodinary ✨🚀.
            </p>
          </div>
          <div className="col-12 col-lg-6 order-0 order-lg-1">
            <img
              src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1717512997/fe0ac763-ae58-4170-a0f3-d9f2410633e4.png"
              className="img-fluid"
            ></img>
          </div>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-lg-6">
              <img src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1717818930/288dd5e4-ae9c-42e4-92b1-36ceb8bd3073.png" className="img-fluid"></img>
            </div>
            <div className="col-12 col-lg-6">
              <h3>Skills & Service</h3>
              <p>
                Specialising in webdevelopment and programming I can solve
                various set of problems and develop any type of website provided
                with or with out designs.
              </p>
              <ul style={{ color: "white", fontFamily: "modernsans" }}>
                <li>Web Development</li>
                <li>Web Design</li>
                <li>Machine Learning</li>
                <li>Deep Learning</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h3>Web Development</h3>
              <p>
                As a web development specialist, I have extensive experience in
                crafting robust and dynamic websites using modern technologies
                and frameworks. I excel in both front-end and back-end
                development, utilizing tools such as React.js, Node.js,
                Express.js, and Next.js to build responsive and efficient web
                applications. My projects, such as JapEase and NexGen,
                demonstrate my ability to create user-friendly interfaces and
                complex functionalities. I am proficient in integrating APIs,
                managing databases like MongoDB and PostgreSQL, and ensuring
                seamless performance and scalability of web applications.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <h3>Web Design</h3>
              <p>
                My expertise in web design focuses on creating visually
                appealing and user-centric interfaces. I leverage technologies
                like HTML, CSS, Bootstrap, and jQuery to design intuitive and
                responsive layouts. My design philosophy emphasizes user
                experience (UX) and user interface (UI) principles to ensure
                that websites are not only aesthetically pleasing but also easy
                to navigate and interact with. Projects such as JapEase showcase
                my ability to design applications that enhance user engagement
                through clean and modern design practices.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <h3>Machine Learning</h3>
              <p>
                With a strong background in machine learning, I specialize in
                developing intelligent systems that can learn from and make
                decisions based on data. I am proficient in Python and have
                hands-on experience with various machine learning algorithms and
                frameworks. My work includes developing models that leverage
                Long Short-Term Memory (LSTM) networks, Transformers, and
                Convolutional Neural Networks (CNNs). A notable project includes
                my internship at the National Institute of Technology, where I
                crafted a deep learning model achieving a 96% accuracy rate. My
                skills also extend to natural language processing and predictive
                analytics, making me adept at solving complex data-driven
                problems.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <h3>Deep Learning</h3>
              <p>
                My deep learning expertise involves creating and deploying sophisticated neural network models for various applications. I have a deep understanding of architectures such as LSTM, Transformers, and CNNs, which I have utilized in multiple projects. For example, I developed a voice assistant capable of seamless interaction and task execution, integrated with an expense tracker system to streamline management processes. My deep learning projects are characterized by their high accuracy and efficiency, underpinned by rigorous algorithm optimization and extensive experimentation.


              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
