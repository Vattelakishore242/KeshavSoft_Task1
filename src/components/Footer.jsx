import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5 className="text-gradient fw-bold mb-3">KeshavSoft</h5>
            <p className="text-light">
              Building modern, responsive web applications with React.js and Bootstrap 5.
            </p>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-bold mb-3">Technologies</h6>
            <ul className="list-unstyled">
              <li className="text-light">React.js</li>
              <li className="text-light">Bootstrap 5</li>
              <li className="text-light">HTML5 & CSS3</li>
            </ul>
          </div>

          <div className="col-lg-3 mb-4">
            <h6 className="fw-bold mb-3">Connect</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-4">
                📧
              </a>
              <a href="#" className="text-light fs-4">
                🐦
              </a>
              <a href="#" className="text-light fs-4">
                💼
              </a>
              <a href="#" className="text-light fs-4">
                📱
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row">
          <div className="col-12 text-center">
            <p className="text-light mb-0">
              © 2025 KeshavSoft. Built with ❤️ using React.js & Bootstrap 5.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
