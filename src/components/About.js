import React from "react";

export default function About() {
  return (
    <div id="fh5co-about" className="animate-box">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <ul className="info">
              <li>
                <span className="first-block">Full Name:</span>
                <span className="second-block">Suraj Sharma</span>
              </li>
              <li>
                <span className="first-block">Phone:</span>
                <span className="second-block">+91 9780094701</span>
              </li>
              <li>
                <span className="first-block">Email:</span>
                <span className="second-block">sharmasuraj41@gmail.com</span>
              </li>
              <li>
                <span className="first-block">Address:</span>
                <span className="second-block">Chandigarh, India</span>
              </li>
            </ul>
          </div>
          <div className="col-md-8">
            <h2>Hello There!</h2>
            <p>
              I am a detailed and thorough professional with over 7 years of web
              development experience. I specialize in delivering quality
              services with client satisfaction.
            </p>
            <p>
              {" "}
              I believe my strong points are primarily Creativeness, Experience,
              Punctuality, and dedication to what I do. My top goal is to meet
              project needs and deadlines in their best possible realization.
              Working on a new project, I do appreciate contact with clients so
              that I can get a clear understanding of their needs and vision of
              the project. I’m honest, fair, and straightforward.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
