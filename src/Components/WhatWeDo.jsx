import React from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { ImEqualizer2 } from "react-icons/im";
import { BiBullseye } from "react-icons/bi";
import Accordion from "./Accordion/Accordion";
import CarouselSlider from "./Carousel/CarouselSlider";

const data = [
  {
    id: 1,
    icon: <AiOutlinePicture size={40} color="#95e1d3" />,
    title: "Photogpaphy",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ",
  },
  {
    id: 2,
    icon: <ImEqualizer2 size={40} color="#95e1d3" />,
    title: "Creativity",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
  },
  {
    id: 3,
    icon: <BiBullseye size={40} color="#95e1d3" />,
    title: "Web Design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ",
  },
];

function WhatWeDo() {
  return (
    <>
      <div className="whatwedo">
        <div className="container">
          <div className="text">
            <p className="text-secondary">Service</p>
            <h2 className="text-main">What We Do</h2>
            <div className="text-underline"></div>
            <p className="text-low">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="whatwedo-split">
            <div className="whatwedo-split-photo">
              <img src={require("../img/whatwedo1.png")} alt="human1" />
            </div>
            <div className="whatwedo-split-accordion">
              {data.map((item) => (
                <div key={item.id}>
                  <Accordion
                    title={item.title}
                    icon={item.icon}
                    content={item.content}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="whatwedo-bottom">
        <CarouselSlider />
      </div>
    </>
  );
}

export default WhatWeDo;
