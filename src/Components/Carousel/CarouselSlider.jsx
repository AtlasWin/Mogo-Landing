import { IoMdChatboxes } from "react-icons/io";
import { BsGlobe, BsFillArrowThroughHeartFill } from "react-icons/bs";
import { GiAntibody } from "react-icons/gi";
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "./CarouselItem";
import { Box } from "@mui/material";

const data = [
  {
    id: 1,
    icon: <IoMdChatboxes size={70} color="#95e1d3" />,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation.",
    name: "Jon Doe",
  },
  {
    id: 2,
    icon: <BsGlobe size={70} color="#95e1d3" />,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation.",
    name: "Jane Doe",
  },
  {
    id: 3,
    icon: <BsFillArrowThroughHeartFill size={70} color="#95e1d3" />,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation.",
    name: "Cecile Talguen",
  },
  {
    id: 4,
    icon: <GiAntibody size={70} color="#95e1d3" />,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation.",
    name: "Mark Strong",
  },
];

function CarouselSlider() {
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
            width={800}
          >
            {data.map((item) => (
              <div className="bottom-content">
                <CarouselItem item={item} key={item.id} />
              </div>
            ))}
          </Carousel>
        </Box>
      </div>
    </>
  );
}

export default CarouselSlider;
