import React from "react";

function Features() {
  const features = [
    {
      icon: "🚀",
      title: "Fast Performance",
      description:
        "Built with React.js for lightning-fast user experience and optimal performance."
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description:
        "Fully responsive layout that works perfectly on all devices and screen sizes."
    },
    {
      icon: "🎨",
      title: "Modern UI",
      description:
        "Clean and modern interface designed with Bootstrap 5 components and utilities."
    },
    {
      icon: "⚡",
      title: "Easy to Use",
      description:
        "Intuitive navigation and user-friendly interface for the best user experience."
    },
    {
      icon: "🔧",
      title: "Customizable",
      description:
        "Highly customizable components that can be easily modified to fit your needs."
    },
    {
      icon: "🛡️",
      title: "Reliable",
      description:
        "Built with best practices and modern web standards for maximum reliability."
    }
  ];

  return (
    <section className="section-padding bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Why Choose KeshavSoft?</h2>
            <p className="lead text-muted">
              Discover the features that make our application stand out from the rest
            </p>
          </div>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card feature-card h-100 text-center p-4">
                <div className="card-body">
                  <div className="display-4 mb-3">{feature.icon}</div>
                  <h5 className="card-title fw-bold mb-3">{feature.title}</h5>
                  <p className="card-text text-muted">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
