import React from 'react';

const Contact = () => (
  <section id="contact" className="py-5">
    <div className="container">
      <h2 className="text-center text-primary mb-4">Contact Me</h2>
      <div className="row">
        {/* Contact Form */}
        <div className="col-md-8 mb-4">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Write your message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="col-md-4 text-center">
          <h5 className="text-primary">Get in Touch</h5>
          <p className="mt-3">
            <strong>Email:</strong> shritinandanwar@gmail.com
          </p>
          <p>
            <strong>Location:</strong> Nagpur, Maharashtra
          </p>
          <h6 className="text-primary mt-4">Let's Connect</h6>
          <div className="d-flex justify-content-center mt-3">
            {/* <a
              href="https://www.facebook.com/shritinandanwar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary mx-2"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a> */}

            <a
              href="https://www.linkedin.com/in/shritinandanwar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary mx-2"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href="https://github.com/28shriti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark mx-2"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              href="https://www.instagram.com/mini__vivi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-danger mx-2"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>

            <a
              href="https://twitter.com/shritinandanwar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary mx-2"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>

            <a
              href="https://medium.com/@shritinandanwar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-success mx-2"
            >
              <i className="fab fa-medium fa-2x"></i>
            </a>

          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
