import { BsAlarm, BsGraphUp, BsImage } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { SlBookOpen } from "react-icons/sl";
import { ImHome3 } from "react-icons/im";

function Services() {
  return (
    <>
      <div className="services">
        <div className="container">
          <div className="text">
            <p className="text-secondary">We work with</p>
            <h2 className="text-main">Amazing Services</h2>
            <div className="text-underline"></div>
          </div>
          <div className="services-grid">
            <div className="services-grid-item">
              <div className="services-grid-item-icon">
                <BsAlarm size={30} color="#95e1d3" />
              </div>
              <div className="services-grid-item-text">
                <h2 className="item-text-main">Photography</h2>
                <p className="item-text-underline">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
            <div className="services-grid-item">
              <div className="services-grid-item-icon">
                <BsGraphUp size={30} color="#95e1d3" />
              </div>
              <div className="services-grid-item-text">
                <h2 className="item-text-main">Web Design</h2>
                <p className="item-text-underline">
                  Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor.
                </p>
              </div>
            </div>
            <div className="services-grid-item">
              <div className="services-grid-item-icon">
                <RiComputerLine size={30} color="#95e1d3" />
              </div>
              <div className="services-grid-item-text">
                <h2 className="item-text-main">Creativity</h2>
                <p className="item-text-underline">
                  Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor.
                </p>
              </div>
            </div>
          </div>
          <div className="services-grid-divider"></div>
          <div className="services-grid">
            <div className="services-grid-item">
              <div className="services-grid-item-icon">
                <SlBookOpen size={30} color="#95e1d3" />
              </div>
              <div className="services-grid-item-text">
                <h2 className="item-text-main">SEO</h2>
                <p className="item-text-underline">
                  Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod.
                </p>
              </div>
            </div>
            <div className="services-grid-item">
              <div className="services-grid-item-icon">
                <ImHome3 size={30} color="#95e1d3" />
              </div>
              <div className="services-grid-item-text">
                <h2 className="item-text-main">CSS/HTML</h2>
                <p className="item-text-underline">
                  Lorem dolor sit amet, consectetur adipiscing elit, sed do
                  tempor.
                </p>
              </div>
            </div>
            <div className="services-grid-item">
              <div className="services-grid-item-icon">
                <BsImage size={30} color="#95e1d3" />
              </div>
              <div className="services-grid-item-text">
                <h2 className="item-text-main">Digital</h2>
                <p className="item-text-underline">
                  Sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
