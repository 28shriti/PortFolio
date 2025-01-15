import React from 'react';

const Skills = () => (
  <section id="skills" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center text-primary mb-4">My Skills</h2>
      <div className="row">

         {/* Skill 1 */}
         <div className="col-md-6 mb-4">
          <h5>SQL</h5>
          <div className="progress">
            <div
              className="progress-bar bg-primary"
              role="progressbar"
              style={{ width: '80%' }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              80%
            </div>
          </div>
        </div>

         {/* Skill 2 */}
         <div className="col-md-6 mb-4">
          <h5>Python</h5>
          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: '80%' }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              80%
            </div>
          </div>
        </div>


        {/* Skill 3 */}
        <div className="col-md-6 mb-4">
          <h5>React</h5>
          <div className="progress">
            <div
              className="progress-bar bg-secondary"
              role="progressbar"
              style={{ width: '90%' }}
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              90%
            </div>
          </div>
        </div>

        {/* Skill 4 */}
        <div className="col-md-6 mb-4">
          <h5>JavaScript</h5>
          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: '85%' }}
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              85%
            </div>
          </div>
        </div>

        {/* Skill 5 */}
        <div className="col-md-6 mb-4">
          <h5>Bootstrap</h5>
          <div className="progress">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: '80%' }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              80%
            </div>
          </div>
        </div>

        {/* Skill 6 */}
        <div className="col-md-6 mb-4">
          <h5>Node.js</h5>
          <div className="progress">
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: '75%' }}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              75%
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
