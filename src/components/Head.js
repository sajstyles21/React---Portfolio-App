import React from "react";
//IMAGES
import coverImage from "../images/cover_bg_3.jpg";
import surajPic from "../images/surajsharma.jpg";

export default function Head() {
  return (
    <header
      id="fh5co-header"
      className="fh5co-cover js-fullheight"
      role="banner"
      style={{ backgroundImage: "url(" + coverImage + ")" }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <div className="display-t js-fullheight">
              <div
                className="display-tc js-fullheight animate-box"
                data-animate-effect="fadeIn"
              >
                <div
                  className="profile-thumb"
                  style={{ backgroundImage: "url(" + surajPic + ")" }}
                ></div>
                <h1>
                  <span>Suraj Sharma</span>
                </h1>
                <h3>
                  <span>Sr. Software Engineer</span>
                </h3>
                <p></p>
                <ul className="fh5co-social-icons">
                  <li>
                    <a
                      href="https://twitter.com/SaJsTyLeS"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="icon-twitter2"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/SaJsTyl"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="icon-facebook2"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/sajstyles/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="icon-linkedin2"></i>
                    </a>
                  </li>
                </ul>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
