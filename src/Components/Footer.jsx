import React from "react";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-grid-first">
              <div className="footer-grid-first-content">
                <h1>MoGo</h1>
                <p className="item-text-underline">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <p className="footer-low-text">
                  <span>15k</span> followers
                </p>
              </div>
              <div className="footer-grid-first-underline"></div>
              <div className="footer-grid-first-icons">
                <p className="item-text-secondary">Follow Us:</p>
                <i class="bx bxl-facebook"></i>
                <i class="bx bxl-twitter"></i>
                <i class="bx bxl-instagram"></i>
                <i class="bx bxl-pinterest-alt"></i>
                <i class="bx bxl-google-plus"></i>
                <i class="bx bxl-youtube"></i>
                <i class="bx bxl-dribbble"></i>
                <i class="bx bxl-tumblr"></i>
              </div>
              <div className="footer-grid-first-input">
                <input placeholder="Your Email..." />
                <button>Subscribe</button>
              </div>
            </div>
            <div className="footer-grid-second">
              <div className="footer-grid-second-content">
                <h2 className="item-text-main">Blogs</h2>
                <div className="footer-grid-second-content-items">
                  <div className="footer-grid-second-content-item">
                    <img src={require("../img/footer1.png")} alt="footer1" />
                    <div className="footer-grid-second-content-item-text">
                      <h2 className="item-text-main">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </h2>
                      <p className="item-text-secondary">Jan 9, 2016</p>
                    </div>
                  </div>
                  <div className="footer-grid-second-content-item">
                    <img src={require("../img/footer2.png")} alt="footer2" />
                    <div className="footer-grid-second-content-item-text">
                      <h2 className="item-text-main">
                        Consectetur adipiscing elit, sed do eiusmod tempor
                      </h2>
                      <p className="item-text-secondary">Jan 9, 2016</p>
                    </div>
                  </div>
                  <div className="footer-grid-second-content-item">
                    <img src={require("../img/footer3.png")} alt="footer3" />
                    <div className="footer-grid-second-content-item-text">
                      <h2 className="item-text-main">
                        <span>blabla</span>Sed do eiusmod tempor incididunt ut
                        labore
                      </h2>
                      <p className="item-text-secondary">Jan 9, 2016</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-grid-third">
              <div className="footer-grid-third-content">
                <h2 className="item-text-main">Instagram</h2>
                <div className="footer-grid-third-content-instagrid">
                  <img src={require("../img/insta1.png")} alt="insta1" />
                  <img src={require("../img/insta2.png")} alt="insta2" />
                  <img src={require("../img/insta3.png")} alt="insta3" />
                  <img src={require("../img/insta4.png")} alt="insta4" />
                  <img src={require("../img/insta5.png")} alt="insta5" />
                  <img src={require("../img/insta6.png")} alt="insta6" />
                  <img src={require("../img/insta7.png")} alt="insta7" />
                  <img src={require("../img/insta8.png")} alt="insta8" />
                  <img src={require("../img/insta9.png")} alt="insta9" />
                </div>
                <p className="item-text-secondary">
                  <a href="/">View more photos</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-underline"></div>
        <p className="item-text-main">&copy; 2023. Made By Mykyta Chumak</p>
      </div>
    </>
  );
}

export default Footer;
