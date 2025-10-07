import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-4">
              Welcome to KeshavSoft
            </h1>
            <p className="lead mb-5">
              Experience the perfect blend of Bootstrap 5 and React.js.
              Clean, modern, and responsive design that adapts to your needs.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Link to="/about" className="btn btn-light btn-lg btn-custom">
                Learn More
              </Link>
              <Link to="/contact" className="btn btn-outline-light btn-lg btn-custom">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
