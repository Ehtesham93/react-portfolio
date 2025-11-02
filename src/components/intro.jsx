import React from "react";
import "./stars.scss";
import Typed from "react-typed";

class Intro extends React.Component {
  render() {
    return (
      <div id="home" className="intro route bg-image background">
        {/* Starry background layers */}
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container text-center">
              {/* Greeting with animated rainbow text */}
              <h1 className="intro-title mb-4 rainbow-text">
                Hello, I am <span className="highlight">Ehtesham Alam</span>
              </h1>

              {/* Typed roles */}
              <p className="intro-subtitle">
                <strong className="text-slider glow-text">
                  <Typed
                    strings={[
                      "Full Stack Developer",
                      "Assistant Manager – Mobility Solutions",
                      "React & Node.js Enthusiast",
                      "Coding Master",
                      "Python Developer"
                    ]}
                    typeSpeed={60}
                    backDelay={1000}
                    backSpeed={40}
                    loop
                  />
                </strong>
              </p>

              {/* Call-to-action button */}
              <p className="pt-4">
                <a
                  className="btn btn-custom px-5 py-3"
                  href="#work"
                  role="button"
                >
                  🚀 View My Work
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
