import React from "react";

function Team() {
  return (
    <>
      <div className="team">
        <div className="container">
          <div className="text">
            <p className="text-secondary">Who we are</p>
            <h2 className="text-main">Meet Our Team</h2>
            <div className="text-underline"></div>
            <p className="text-low">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="team-grid">
            <div className="team-grid-img">
              <div className="changed-profile">
                <img src={require("../img/team1.png")} alt="man1" />
                <div className="overlay"></div>
                <div className="changed-profile-content">
                  <div className="changed-profile-content-icon">
                    <a href="/">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </div>
                  <div className="changed-profile-content-icon">
                    <a href="/">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </div>
                  <div className="changed-profile-content-icon">
                    <a href="/">
                      <i class="bx bxl-pinterest-alt"></i>
                    </a>
                  </div>
                  <div className="changed-profile-content-icon">
                    <a href="/">
                      <i class="bx bxl-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-grid-name">
                <h2 className="item-text-main">Matthew Dix</h2>
                <span className="item-text-secondary">Graphic Design</span>
              </div>
            </div>
            <div className="team-grid-img">
              <div className="changed-profile">
                <img src={require("../img/team2.png")} alt="man2" />
                <div className="overlay"></div>
                <div className="changed-profile-content">
                  <div className="changed-profile-content-icon">
                    <a href="/">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </div>
                  <div className="changed-profile-content-icon">
                    <a href="/">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </div>
                  <div className="changed-profile-content-icon">
                    <a href="/">
                      <i class="bx bxl-pinterest-alt"></i>
                    </a>
                  </div>
                  <div className="changed-profile-content-icon">
                    <a href="/">
                      <i class="bx bxl-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-grid-name">
                <h2 className="item-text-main">Christopher Campbell</h2>
                <span className="item-text-secondary">Branding/UX design</span>
              </div>
            </div>
            <div className="team-grid-img">
              <div className="changed-profile">
                <img src={require("../img/team3.png")} alt="man3" />
                <div className="overlay"></div>
                <div className="changed-profile-content">
                  <div className="changed-profile-content-icon">
                    <a href="/">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </div>
                  <div className="changed-profile-content-icon">
                    <a href="/">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </div>
                  <div className="changed-profile-content-icon">
                    <a href="/">
                      <i class="bx bxl-pinterest-alt"></i>
                    </a>
                  </div>
                  <div className="changed-profile-content-icon">
                    <a href="/">
                      <i class="bx bxl-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-grid-name">
                <h2 className="item-text-main">Michael Fertig</h2>
                <span className="item-text-secondary">Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-bottom">
        <div className="team-bottom-container">
          <div className="team-bottom-items">
            <div className="team-bottom-item">
              <img src={require("../img/logo1.png")} alt="logo1" />
            </div>
            <div className="team-bottom-item">
              <img src={require("../img/logo2.png")} alt="logo2" />
            </div>
            <div className="team-bottom-item">
              <img src={require("../img/logo3.png")} alt="logo3" />
            </div>
            <div className="team-bottom-item">
              <img src={require("../img/logo4.png")} alt="logo4" />
            </div>
            <div className="team-bottom-item">
              <img src={require("../img/logo5.png")} alt="logo5" />
            </div>
            <div className="team-bottom-item">
              <img src={require("../img/logo6.png")} alt="logo6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
