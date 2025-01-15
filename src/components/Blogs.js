import React from 'react';

const Blog = () => (
  <section id="blog" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center text-primary mb-4">My Blog</h2>
      <div className="row">

         {/* Blog Post 0 */}
         <div className="col-md-4 mb-4">
          <div className="card">
            {/* <img
              src="https://via.placeholder.com/300"
              className="card-img-top"
              alt="Blog Post 1"
            /> */}
            <div className="card-body">
              <h5 className="card-title">Basic SEO Strategies for Digital Marketing Success</h5>
              <p className="card-text">
              Within the ever-evolving realm of digital marketing, 
              Search Engine Optimization (SEO) is essential for increasing natural traffic to websites, 
              improving exposure, and eventually spurring business expansion.
              </p>
              <a
                href="https://medium.com/@shritinandanwar/basic-seo-strategies-for-digital-marketing-success-f8cb22091b32"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* Blog Post 1 */}
        {/* <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/300"
              className="card-img-top"
              alt="Blog Post 1"
            />
            <div className="card-body">
              <h5 className="card-title">How I Built My Portfolio</h5>
              <p className="card-text">
                Learn the step-by-step process I followed to create a responsive and functional portfolio.
              </p>
              <a
                href="https://medium.com/@shritinandanwar/how-i-built-my-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Read More
              </a>
            </div>
          </div>
        </div> */}

        {/* Blog Post 2 */}
        {/* <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/300"
              className="card-img-top"
              alt="Blog Post 2"
            />
            <div className="card-body">
              <h5 className="card-title">React Tips for Beginners</h5>
              <p className="card-text">
                Explore essential React tips to improve your development workflow and write better code.
              </p>
              <a
                href="https://medium.com/@shritinandanwar/react-tips-for-beginners"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Read More
              </a>
            </div>
          </div>
        </div> */}

        {/* Blog Post 3 */}
        {/* <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/300"
              className="card-img-top"
              alt="Blog Post 3"
            />
            <div className="card-body">
              <h5 className="card-title">Introduction to Bayesian Networks</h5>
              <p className="card-text">
                Dive into Bayesian Networks and understand how they work with real-life examples.
              </p>
              <a
                href="https://medium.com/@shritinandanwar/introduction-to-bayesian-networks"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Read More
              </a>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  </section>
);

export default Blog;
