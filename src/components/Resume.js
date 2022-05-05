import React from "react";

export default function Resume() {
  const olStyle = {
    textAlign: "left",
  };
  return (
    <div id="fh5co-resume" className="fh5co-bg-color">
      <div className="container">
        <div className="row animate-box">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>My Resume</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-md-offset-0">
            <ul className="timeline">
              <li className="timeline-heading text-center animate-box">
                <div>
                  <h3>Work Experience</h3>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge">
                  <i className="icon-suitcase"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Sr. Software Developer</h3>
                    <span className="company">
                      Code Brew Labs Pvt Ltd - 2019 - Current
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p></p>
                    <ul style={{ padding: "0px" }}>
                      <ol style={olStyle}>
                        1.Develop, record and maintain cutting edge web-based
                        applications and REST APIs on portal plus premium
                        service platforms.
                      </ol>
                      <ol style={olStyle}>
                        2. Prepare and maintain all applications utilizing
                        standard development tools.
                      </ol>
                      <ol style={olStyle}>
                        3. Maintain as well as edit current websites and write
                        semantic markup.
                      </ol>
                      <ol style={olStyle}>
                        4. Troubleshoot, test and maintain the core product
                        software and databases to ensure strong optimization and
                        functionality.
                      </ol>
                      <ol style={olStyle}>
                        5. Identify bugs and fix them, troubleshoot and solve
                        any related problems.
                      </ol>
                      <ol style={olStyle}>
                        6. Develop, program, test and debug all web-based
                        applications.
                      </ol>
                      <ol style={olStyle}>
                        7. Contribute to all phases of the development
                        lifecycle.
                      </ol>
                      <ol style={olStyle}>
                        8. Create the right code structures to resolve specific
                        tasks.
                      </ol>
                    </ul>
                    <p></p>
                  </div>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge">
                  <i className="icon-suitcase"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Software Developer</h3>
                    <span className="company">
                      AADH Datamatics Pvt Ltd - 2018 - 2019
                    </span>
                  </div>
                  <div className="timeline-body"></div>
                </div>
              </li>
              <li className="timeline-inverted animate-box">
                <div className="timeline-badge">
                  <i className="icon-suitcase"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Web Developer</h3>
                    <span className="company">
                      Soft Radix Technologies Pvt Ltd - 2016 - 2018
                    </span>
                  </div>
                  <div className="timeline-body"></div>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge">
                  <i className="icon-suitcase"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Web Developer</h3>
                    <span className="company">
                      CQLsys Technologies Pvt Ltd - 2014 - 2016
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p></p>
                    <ul style={{ padding: "0px" }}>
                      <ol style={olStyle}>
                        1. Develop Ecommerce / Web Applications using PHP /
                        MySQL, WordPress, Joomla.
                      </ol>
                      <ol style={olStyle}>
                        2. Participate in a team-oriented environment to develop
                        complex web-based applications.
                      </ol>
                      <ol style={olStyle}>
                        3. Maintaining existing codebase, including
                        troubleshooting bugs and adding new features.
                      </ol>
                      <ol style={olStyle}>
                        4. Identify bugs and fix them, troubleshoot and solve
                        any related problems.
                      </ol>
                      <ol style={olStyle}>
                        5. Create, design, test and apply web-based
                        applications.
                      </ol>
                      <ol style={olStyle}>
                        6. Develop, program, test and debug all web-based
                        applications
                      </ol>
                      <ol style={olStyle}>
                        7. Create the right code structures to resolve specific
                        tasks.
                      </ol>
                    </ul>
                    <p></p>
                  </div>
                </div>
              </li>

              <br />
              <li className="timeline-heading text-center animate-box">
                <div>
                  <h3>Education</h3>
                </div>
              </li>

              <li className="animate-box timeline-unverted">
                <div className="timeline-badge">
                  <i className="icon-graduation-cap"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Bachelors Degree</h3>
                    <span className="company">
                      Lovely Professional University - 2008 - 2012
                    </span>
                  </div>
                  <div className="timeline-body"></div>
                </div>
              </li>
              <li className="timeline-inverted animate-box">
                <div className="timeline-badge">
                  <i className="icon-graduation-cap"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">High School</h3>
                    <span className="company">
                      The Sr. Sec. Public School - 2007 - 2008
                    </span>
                  </div>
                  <div className="timeline-body"></div>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge">
                  <i className="icon-graduation-cap"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Matric</h3>
                    <span className="company">
                      M.D.K Arya Sr. Sec. Public School - 2005 - 2006
                    </span>
                  </div>
                  <div className="timeline-body"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
