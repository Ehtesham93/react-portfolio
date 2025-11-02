import React from "react";
import imageOverlay from "../img/earth.jpg";

class Contact extends React.Component {
  render() {
    return (
      <section
        id="contact" 
        className="contact-section bg-image route"
        style={{ backgroundImage: `url(${imageOverlay})` }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="box-shadow-full contact-mf">
                <div className="row">
                  {/* Left column: Info + Socials */}
                  <div className="col-md-6 mb-4 mb-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left gradient-text">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead glow-text">
                        Whether you want to collaborate on a project, discuss mobility tech,
                        or just say hi — I’d love to hear from you.
                      </p>
                    </div>
                    <div className="socials mt-4">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a
                            href="https://codepen.io/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion-social-codepen"></i>
                            </span>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href="https://github.com/Ehtesham93"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion-social-github"></i>
                            </span>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href="https://www.linkedin.com/in/e-alam-29b0231ehtesham-alam-2239b0231"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion-social-linkedin"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Right column: Contact form */}
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left gradient-text">Send a Message</h5>
                    </div>
                    <form
                      action="https://formspree.io/f/xdoeonlo"
                      method="POST"
                      className="contactForm"
                    >
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                        <div className="col-md-12 mb-3">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Your Email"
                            required
                          />
                        </div>
                        <div className="col-md-12 mb-3">
                          <input
                            type="text"
                            name="subject"
                            className="form-control"
                            placeholder="Subject"
                            required
                          />
                        </div>
                        <div className="col-md-12 mb-3">
                          <textarea
                            name="message"
                            className="form-control"
                            rows="5"
                            placeholder="Message"
                            required
                          ></textarea>
                        </div>
                        <div className="col-md-12">
                          <button
                            type="submit"
                            className="btn btn-custom btn-block"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <footer className="text-center mt-5">
                <p className="glow-text">
                  © {new Date().getFullYear()} Ehtesham Alam 
                </p>
              </footer>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
