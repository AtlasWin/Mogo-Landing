import React from "react";

function HomeText() {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="home-text">
            <h2 className="home-text-secondary">Creative Template</h2>
            <h1 className="home-text-main">Welcome to Mogo</h1>
            <div className="home-text-underline"></div>
          </div>
          <div className="home-btn">
            <button>Learn More</button>
          </div>
          <div className="home-bottom">
            <div className="lines">
              <div className="lines-item">
                <span className="lines-upperline"></span>
                <div className="lines-content">
                  <span className="lines-content-number">01</span>
                  <p className="lines-content-text">Intro</p>
                </div>
              </div>
              <div className="lines-item">
                <span className="lines-upperline"></span>
                <div className="lines-content">
                  <span className="lines-content-number">02</span>
                  <p className="lines-content-text">Work</p>
                </div>
              </div>
              <div className="lines-item">
                <span className="lines-upperline"></span>
                <div className="lines-content">
                  <span className="lines-content-number">03</span>
                  <p className="lines-content-text">About</p>
                </div>
              </div>
              <div className="lines-item">
                <span className="lines-upperline"></span>
                <div className="lines-content">
                  <span className="lines-content-number">04</span>
                  <p className="lines-content-text">Contacts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeText;
