import React from "react";

const Projects = () => (
  <section id="projects" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center text-primary mb-4">My Projects</h2>
      <div className="row">
        {/* Project 1 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="/images/Act.png"
              className="card-img-top"
              alt="Project 1"
              style={{ maxWidth: "500px", maxHeight: "100px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Act-2025 (Phase-1)</h5>
              <strong>Technologies:</strong> Next.js, Git, Vercel
              <br />
              <p className="card-text">
                Act-2025 (Phase-I) is a website for International Conference,
                Organized by Department of Computer Science and Engineering &
                Department of Computer Technology, Yeshwantrao Chavan College Of
                Engineering
              </p>
              <a
                href="https://github.com/28shriti/ICASET"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="/images/Pratikruti.png"
              className="card-img-top"
              alt="Project 2"
              style={{ maxWidth: "500px", maxHeight: "150px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Pratikruti 25</h5>
              <strong>Technologies:</strong> React.js, Git, Vercel
              <br />
              <p className="card-text">
                Pratikruti is a website for National Level Compitation Organized
                by Department of Mechnical Engineering, Yeshwantrao Chavan
                College Of Engineering
              </p>
              <a
                href="https://github.com/28shriti/Pratikruti_25"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="/images/FlappyBird.avif"
              className="card-img-top"
              alt="Project 3"
              style={{ maxWidth: "500px", maxHeight: "150px" }}
            />
            <div className="card-body">
              <h5 className="card-title"> Flappy Bird</h5>
              <strong>Technologies:</strong> Python
              <br />
              <p className="card-text">
                Flappy Bird is an arcade-style game in which the player controls
                the bird Faby, which moves persistently to the right
              </p>
              <a
                href="https://github.com/28shriti/FlappyBird"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="/images/TicTaeToe.png"
              className="card-img-top"
              alt="Project 4"
              style={{ maxWidth: "450px", maxHeight: "125px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Tic Tac Toe</h5>
              <strong>Technologies:</strong> HTML, CSS, Javascript
              <br />
              <p className="card-text">
                Tic-tac-toe is a two-player game where players take turns
                marking spaces, aiming to be the first to get three of their
                marks in a row, horizontally, vertically, or diagonally
              </p>
              <a
                href="https://github.com/28shriti/Tic_tac_toe-js-"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Project 5 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="/images/profileManagement.webp"
              className="card-img-top"
              alt="Project 5"
              style={{ maxWidth: "500px", maxHeight: "125px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Profiles Management Application</h5>
              <strong>Technologies:</strong> React.js
              <br />
              <p className="card-text">
                A responsive web application for managing user profiles,
                allowing users to view, edit, and delete profiles, as well as
                manage skills associated with each profile.
              </p>
              <a
                href="https://github.com/28shriti/vitric"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Project
              </a>
            </div>
          </div>
</div>
          {/* Project 6 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="/images/crud.jpg"
                className="card-img-top"
                alt="Project 6"
                style={{ maxWidth: "500px", maxHeight: "125px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Crud Operation Using C#.Net</h5>
                <strong>Technologies:</strong> C#.net, MySql
                <br />
                <p className="card-text">
                  Performing CRUD operations using C#. Implemented secure
                  database interactions covering functionalities such as data
                  creation, retrieval, updating, and deletion.
                </p>
                <a
                  href="https://github.com/28shriti/CURD_operation_CSharp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

  </section>
);

export default Projects;
