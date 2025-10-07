import React from "react";
import About from "../components/About";

const AboutPage = () => {
  return (
    <>
      <div className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead">Learn more about our mission and values</p>
        </div>
      </div>
      <About />
    </>
  );
};

export default AboutPage;
