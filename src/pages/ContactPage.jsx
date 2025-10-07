import React from "react";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <>
      <div className="bg-success text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p className="lead">We'd love to hear from you</p>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default ContactPage;
