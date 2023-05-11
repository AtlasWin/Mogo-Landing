import React from "react";
import { ImUsers } from "react-icons/im";
import { SlBookOpen } from "react-icons/sl";
import { AiOutlineAntDesign } from "react-icons/ai";

function AboutUs() {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="text">
            <p className="text-secondary">What we do</p>
            <h2 className="text-main">Story About Us</h2>
            <div className="text-underline"></div>
            <p className="text-low">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="about-grid">
            <div className="about-grid-item">
              <div className="changed">
                <img src={require("../img/about1.png")} alt="img1" />
                <div className="overlay">
                  <div className="content">
                    <ImUsers size={30} color="#fff" />
                    <p>Super team</p>
                  </div>
                </div>
              </div>
              <div className="changed-behind"></div>
            </div>
            <div className="about-grid-item">
              <div className="changed">
                <img src={require("../img/about2.png")} alt="img2" />
                <div className="overlay">
                  <div className="content">
                    <SlBookOpen size={30} color="#fff" />
                    <p>Creative Environment</p>
                  </div>
                </div>
              </div>
              <div className="changed-behind"></div>
            </div>
            <div className="about-grid-item">
              <div className="changed">
                <img src={require("../img/about3.png")} alt="img3" />
                <div className="overlay">
                  <div className="content">
                    <AiOutlineAntDesign size={30} color="#fff" />
                    <p>Web Design</p>
                  </div>
                </div>
              </div>
              <div className="changed-behind"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-bottom-grid">
        <div className="about-bottom-grid-container">
          <div className="about-bottom-grid-item">
            <h1>42</h1>
            <span>Web Design Projects</span>
          </div>
          <div className="about-bottom-grid-item">
            <h1>123</h1>
            <span>Happy Client</span>
          </div>
          <div className="about-bottom-grid-item">
            <h1>15</h1>
            <span>Award Winner</span>
          </div>
          <div className="about-bottom-grid-item">
            <h1>99</h1>
            <span>Cup of Coffee</span>
          </div>
          <div className="about-bottom-grid-item">
            <h1>24</h1>
            <span>Members</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
