import React from "react";

function Hero({ children }) {
  return (
    <>
      <div className="hero-bg">{children}</div>
    </>
  );
}

export default Hero;
