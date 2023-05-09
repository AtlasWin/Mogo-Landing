import React from "react";
import Navbar from "./Components/Header/Navbar";
import Hero from "./Components/Header/Hero";
import HomeText from "./Components/HomeText";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import UniqueDesign from "./Components/UniqueDesign";
import WhatWeDo from "./Components/WhatWeDo";
import Team from "./Components/Team";
import Work from "./Components/Work";
import HappyClients from "./Components/HappyClients";
import Blog from "./Components/Blog";
import Map from "./Components/Map";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Hero>
        <Navbar />
        <HomeText />
      </Hero>
      <AboutUs />
      <Services />
      <UniqueDesign />
      <WhatWeDo />
      <Team />
      <Work />
      <HappyClients />
      <Blog />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
