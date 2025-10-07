import React from "react";

function About() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold mb-4">About Our Mission</h2>
            <p className="lead mb-4">
              We're passionate about creating modern, responsive web applications
              that provide exceptional user experiences.
            </p>
            <p className="mb-4">
              Our team combines the power of React.js with Bootstrap 5 to deliver
              fast, beautiful, and accessible web solutions. We believe in clean
              code, modern design principles, and user-centered development.
            </p>
            <div className="row g-3">
              <div className="col-6">
                <div className="text-center p-3 bg-primary text-white rounded">
                  <h4 className="fw-bold">100+</h4>
                  <small>Projects Completed</small>
                </div>
              </div>
              <div className="col-6">
                <div className="text-center p-3 bg-success text-white rounded">
                  <h4 className="fw-bold">50+</h4>
                  <small>Happy Clients</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="bg-gradient-primary rounded p-5 text-center">
              <div className="display-1 text-white mb-3">💡</div>
              <h3 className="text-white mb-3">Innovation First</h3>
              <p className="text-white-50">
                We stay ahead of the curve by embracing the latest technologies
                and design trends to deliver cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
