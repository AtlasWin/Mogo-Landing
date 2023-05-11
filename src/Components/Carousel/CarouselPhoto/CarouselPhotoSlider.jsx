import React from "react";
import { Carousel } from "react-responsive-carousel";
import CarouselPhotoItem from "./CarouselPhotoItem";
import { Box } from "@mui/material";

const data = [
  {
    id: 1,
    img: require("../../../img/work-img.png"),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation.",
    name: "Joshua Earle",
  },
  {
    id: 2,
    img: require("../../../img/work-img2.png"),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation.",
    name: "Ernest Hemingway",
  },
  {
    id: 3,
    img: require("../../../img/work-img3.png"),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation.",
    name: "Charlie Chaplin",
  },
  {
    id: 4,
    img: require("../../../img/work-img4.png"),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation.",
    name: "Klark Kent",
  },
];

function CarouselPhotoSlider() {
  return (
    <>
      <div className="bottom">
        <Box
          sx={{
            maxWidth: ["500px", "800px", "1024px", "1200px"],
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
          }}
        >
          <Carousel
            showArrows={true}
            showThumbs={false}
            emulateTouch={true}
            showIndicators={true}
            showStatus={false}
            width={750}
          >
            {data.map((item) => (
              <div className="bottom-content">
                <CarouselPhotoItem item={item} key={item.id} />
              </div>
            ))}
          </Carousel>
        </Box>
      </div>
    </>
  );
}

export default CarouselPhotoSlider;
