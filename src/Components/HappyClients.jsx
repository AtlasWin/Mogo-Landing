import React from "react";

function HappyClients() {
  return (
    <>
      <div className="clients bg-cliff">
        <div className="container">
          <div className="text">
            <p className="text-secondary">Happy Clients</p>
            <h2 className="text-main">What People Say</h2>
            <div className="text-underline"></div>
          </div>
          <div className="clients-grid text-left">
            <div className="clients-grid-item">
              <div className="clients-grid-item-img">
                <img src={require("../img/client1.png")} alt="client1" />
              </div>
              <div className="clients-grid-item-text">
                <h2 className="item-text-main">Matthew Dix</h2>
                <p className="item-text-secondary">Graphic Design</p>
                <div className="text-underline"></div>
                <p className="item-text-underline">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.
                </p>
              </div>
            </div>
            <div className="clients-grid-item">
              <div className="clients-grid-item-img">
                <img src={require("../img/client2.png")} alt="client2" />
              </div>
              <div className="clients-grid-item-text">
                <h2 className="item-text-main">Nick Karvounis</h2>
                <p className="item-text-secondary">Graphic Design</p>
                <div className="text-underline"></div>
                <p className="item-text-underline">
                  Sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam
                </p>
              </div>
            </div>
            <div className="clients-grid-item">
              <div className="clients-grid-item-img">
                <img src={require("../img/client3.png")} alt="client3" />
              </div>
              <div className="clients-grid-item-text">
                <h2 className="item-text-main">Jaelynn Castillo</h2>
                <p className="item-text-secondary">Graphic Design</p>
                <div className="text-underline"></div>
                <p className="item-text-underline">
                  Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam
                </p>
              </div>
            </div>
            <div className="clients-grid-item">
              <div className="clients-grid-item-img">
                <img src={require("../img/client4.png")} alt="client4" />
              </div>
              <div className="clients-grid-item-text">
                <h2 className="item-text-main">Mike Petrucci</h2>
                <p className="item-text-secondary">Graphic Design</p>
                <div className="text-underline"></div>
                <p className="item-text-underline">
                  Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HappyClients;
