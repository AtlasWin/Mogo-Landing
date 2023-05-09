import React from "react";
import { AiOutlinePicture } from "react-icons/ai";
import CarouselPhotoSlider from "./Carousel/CarouselPhoto/CarouselPhotoSlider";

function Work() {
  return (
    <>
      <div className="work">
        <div className="container">
          <div className="text">
            <p className="text-secondary">What we do</p>
            <h2 className="text-main">Some of our work</h2>
            <div className="text-underline"></div>
            <p className="text-low">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="work-grid">
          <div className="work-grid-container">
            <div className="work-grid-items">
              <div className="changed">
                <img src={require("../img/work1.png")} alt="work1" />
                <div className="overlay">
                  <div className="content">
                    <AiOutlinePicture size={30} color="#fff" />
                    <h2>Creatively Designed</h2>
                    <p>Lorem ipsum dolor sit</p>
                  </div>
                </div>
              </div>
              <div className="changed">
                <img src={require("../img/work2.png")} alt="work2" />
                <div className="overlay">
                  <div className="content">
                    <AiOutlinePicture size={30} color="#fff" />
                    <h2>Creatively Designed</h2>
                    <p>Lorem ipsum dolor sit</p>
                  </div>
                </div>
              </div>
              <div className="changed jellyfish">
                <img src={require("../img/work3.png")} alt="work3" />
                <div className="overlay">
                  <div className="content">
                    <AiOutlinePicture size={30} color="#fff" />
                    <h2>Creatively Designed</h2>
                    <p>Lorem ipsum dolor sit</p>
                  </div>
                </div>
              </div>
              <div className="changed">
                <img src={require("../img/work4.png")} alt="work4" />
                <div className="overlay">
                  <div className="content">
                    <AiOutlinePicture size={30} color="#fff" />
                    <h2>Creatively Designed</h2>
                    <p>Lorem ipsum dolor sit</p>
                  </div>
                </div>
              </div>
              <div className="changed">
                <img src={require("../img/work5.png")} alt="work5" />
                <div className="overlay">
                  <div className="content">
                    <AiOutlinePicture size={30} color="#fff" />
                    <h2>Creatively Designed</h2>
                    <p>Lorem ipsum dolor sit</p>
                  </div>
                </div>
              </div>
              <div className="changed">
                <img src={require("../img/work6.png")} alt="work6" />
                <div className="overlay">
                  <div className="content">
                    <AiOutlinePicture size={30} color="#fff" />
                    <h2>Creatively Designed</h2>
                    <p>Lorem ipsum dolor sit</p>
                  </div>
                </div>
              </div>
              <div className="changed">
                <img src={require("../img/work7.png")} alt="work7" />
                <div className="overlay">
                  <div className="content">
                    <AiOutlinePicture size={30} color="#fff" />
                    <h2>Creatively Designed</h2>
                    <p>Lorem ipsum dolor sit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="work-bottom">
        <CarouselPhotoSlider />
        {/* <div className="bottom">
          <div className="bottom-container">
            <div className="arrow">
              <i className="bx bxs-chevron-left"></i>
            </div>
            <div className="bottom-content">
              <div className="bottom-img">
                <img src={require("../img/work-img.png")} alt="work-img" />
              </div>
              <div className="bottom-text">
                <p className="quote-text">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation."
                </p>
                <div className="bottom-text-low">
                  <div className="text-underline"></div>
                  <p className="text-secondary">Joshua Earle</p>
                </div>
              </div>
            </div>
            <div className="arrow">
              <i className="bx bxs-chevron-right"></i>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Work;
