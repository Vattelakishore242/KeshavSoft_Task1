import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log("Form submitted:", formData);
    setShowAlert(true);
    setFormData({ name: "", email: "", message: "" });

    // Hide alert after 3 seconds
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <section className="section-padding bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Get In Touch</h2>
              <p className="lead text-muted">
                Have a question or want to work together? We'd love to hear from you.
              </p>
            </div>

            {showAlert && (
              <div
                className="alert alert-success alert-dismissible fade show"
                role="alert"
              >
                <strong>Success!</strong> Your message has been sent successfully.
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowAlert(false)}
                ></button>
              </div>
            )}

            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label fw-bold">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label fw-bold">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="message" className="form-label fw-bold">
                        Message
                      </label>
                      <textarea
                        className="form-control form-control-lg"
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="col-12 text-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-custom px-5"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
