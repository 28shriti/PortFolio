import React from "react";
import Typewriter from "typewriter-effect";

const Home = () => (
  <section id="home" className="bg-primary text-white py-5">
    <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between">
      {/* Left Section */}
      <div className="text-center text-lg-start">
        <h1 className="display-4 fw-bold">
          Hello, I'm <br />
          <span className="text-warning">
            <Typewriter
              options={{
                strings: ["Shriti Nandanwar", "A Web Developer", "A Blogger"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </span>
        </h1>
        <p className="lead mt-3">
          Nagpur, Maharashtra
          <br />
          <p class="fst-italic">
            Success consists of going from failure to failure without loss of
            enthusiasm.
          </p>
        </p>
        <div className="mt-4">
          <a href="#contact" className="btn btn-warning btn-lg me-3">
            Let's Connect
          </a>

          <a href="#about" className="btn btn-outline-light btn-lg">
            About Me
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="text-center mt-5 mt-lg-0">
        <img
          src="/Docs/Photo1.jpg"
          alt="Profile"
          className="img-fluid"
          style={{ maxWidth: "500px" }}
        />
        {/* <div className="d-flex justify-content-around mt-4 text-white">
          <div>
            <h2 className="text-warning">12</h2>
            <p>Years of Success</p>
          </div>
          <div>
            <h2 className="text-warning">800+</h2>
            <p>Projects Completed</p>
          </div>
        </div> */}
      </div>
    </div>
  </section>
);

export default Home;
