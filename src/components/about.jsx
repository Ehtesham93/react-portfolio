import React from "react";
import Typed from "react-typed";
import myImage from "../img/myImage.png";

class About extends React.Component {
  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route about-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="box-shadow-full about-card">
                <div className="row">
                  {/* Left column: Image + Skills */}
                  <div className="col-md-5 text-center mb-4 mb-md-0">
                    <img
                      src={myImage}
                      className="img-fluid rounded-circle shadow-lg profile-img"
                      alt="Ehtesham Alam"
                    />
                  </div>

                  {/* Right column: About Me */}
                  <div className="col-md-7">
                    <div className="about-me">
                      <h5 className="title-left gradient-text mb-4">About Me</h5>

                      <div className="lead about-typed">
                        <Typed
                          strings={[
                            `
                            <span class='typed-line gradient-text'>
                              I’m <strong>Ehtesham Alam</strong>, I am currently working as an Assistant Manager – Mobility Solutions at Mahindra LMM, where I actively contribute as a Full Stack Developer. My role bridges management responsibilities with hands-on development, allowing me to design and deliver scalable, user-centric digital solutions that make a real impact.
                              With expertise in Node.js, Express, React, JavaScript, PostgreSQL, MongoDB, and AWS.
                            </span><br/><br/>
                            <span class='typed-line gradient-text'>
                              I specialize in building robust backend systems, intuitive dashboards, and polished front-end experiences. My work often combines real-time data systems with modern UI/UX practices such as glassmorphism, gradient backgrounds, and interactive animations — ensuring that functionality and design go hand in hand.
                            </span><br/>
                            <span class='typed-line gradient-text'>
                            </span><br/>
                            <span class='typed-line gradient-text'>
                              I completed my B.Tech in Computer Science from NIT Warangal in 2025, where I built a strong technical foundation. My journey also includes a research internship at IIT ISM, where I contributed to real-time emotion detection systems — an experience that sharpened my problem-solving mindset and ability to work on innovative, high-impact projects.
                            </span><br/><br/>
                            `
                          ]}
                          typeSpeed={35}
                          backSpeed={20}
                          backDelay={5000}
                          loop={true}
                          smartBackspace={false}
                          showCursor={true}
                        />
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
