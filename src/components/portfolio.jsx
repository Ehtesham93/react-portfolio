import React from "react";

// Import your project images
import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          {/* Section Title */}
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a gradient-text">My Projects</h3>
                <p className="subtitle-a glow-text">
                  A curated selection of my work — blending full-stack
                  development, UI/UX design, and scalable architecture.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>

          {/* Project Cards */}
          <div className="row g-4">
            {/* Project 1 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 portfolio-card">
                <a href={stock} data-lightbox="gallery-health">
                  <img
                    src={stock}
                    alt="Emotion Recognition System"
                    className="card-img-top"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Emotion Recognition System</h5>
                  <p className="card-text text-muted">
                    Real-time facial emotion detection using Python, OpenCV, and
                    React. Built during my research internship at IIT ISM.
                  </p>
                  <span className="badge bg-success me-1">Python</span>
                  <span className="badge bg-primary me-1">React</span>
                  <span className="badge bg-dark">Machine Learning</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 portfolio-card">
                <a href={stock1} data-lightbox="gallery-dashboard">
                  <img
                    src={stock1}
                    alt="Vehicle Management Dashboard"
                    className="card-img-top"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Vehicle Management Dashboard</h5>
                  <p className="card-text text-muted">
                    A responsive dashboard for managing fleet data, built with
                    React, Bootstrap, and REST APIs at Mahindra LMM.
                  </p>
                  <span className="badge bg-info me-1">React</span>
                  <span className="badge bg-secondary me-1">Bootstrap</span>
                  <span className="badge bg-warning text-dark">REST API</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 portfolio-card">
                <a href={stock2} data-lightbox="gallery-portfolio">
                  <img
                    src={stock2}
                    alt="DevFolio Portfolio Site"
                    className="card-img-top"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">DevFolio Portfolio Site</h5>
                  <p className="card-text text-muted">
                    A polished, scroll-snapping portfolio built with HTML5,
                    CSS3, and React. Fully responsive with animated sections.
                  </p>
                  <span className="badge bg-danger me-1">HTML5</span>
                  <span className="badge bg-primary me-1">CSS3</span>
                  <span className="badge bg-success">React</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optional Styling */}
        <style>
          {`
            .portfolio-card {
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .portfolio-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 12px 24px rgba(0,0,0,0.15);
            }
            .card-img-top {
              height: 220px;
              object-fit: cover;
            }
          `}
        </style>
      </section>
    );
  }
}

export default Portfolio;
