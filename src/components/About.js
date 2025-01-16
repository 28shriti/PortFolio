import React from 'react';

const About = () => (
  <section id="about" className="py-5 bg-light">
    <div className="container">
      <div className="row align-items-center">
        {/* Left Section - Image */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="/images/Photo2.jpg"
            alt="About Me"
            className=" img-fluid"
            style={{ maxWidth: '300px' }}
          />
        </div>

        {/* Right Section - Content */}
        <div className="col-md-6">
          <h2 className="text-primary ">About Me</h2>
          <p classNasme="mt-4">
            Hi, I'm Shriti Nandanwar, a passionate web developer with
            creating dynamic and user-friendly websites. I specialize in front-end and
            back-end development and love bringing ideas to life through code.
          </p>
          <p>
            My journey in web development began with a curiosity for technology and a
            drive to create impactful solutions. Over the years, I've honed my skills
            in modern web technologies to help businesses achieve their digital goals.
          </p>
          <ul className="list-unstyled mt-4">
            {/* <li>
              <strong>Experience:</strong> 12 years in web development
            </li> */}
            <li>
              <strong>Expertise:</strong> SQL, Python, React, JavaScript, Bootstrap, Node.js
            </li>
            <br />
            <li>
              <strong>Location:</strong> Nagpur, Maharashtra
            </li>
          </ul>
          {/* <a href="#portfolio" className="btn btn-primary mt-4">
            View My Work
          </a> */}
        </div>
      </div>
    </div>
  </section>
);

export default About;
