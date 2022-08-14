import React from "react";

export default function Services() {
  const divStyle = {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div id="fh5co-features" className="animate-box">
      <div className="container">
        <div className="services-padding">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>My Services</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center" style={divStyle}>
              <div className="feature-left">
                <span className="icon">
                  <i className="icon-bargraph"></i>
                </span>
                <div className="feature-copy">
                  <h3>Web Development</h3>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center" style={divStyle}>
              <div className="feature-left">
                <span className="icon">
                  <i className="icon-paintbrush"></i>
                </span>
                <div className="feature-copy">
                  <h3>Web Design</h3>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center" style={divStyle}>
              <div className="feature-left">
                <span className="icon">
                  <i className="icon-bargraph"></i>
                </span>
                <div className="feature-copy">
                  <h3>App Development</h3>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
