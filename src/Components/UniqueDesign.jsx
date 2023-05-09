import React from "react";

function UniqueDesign() {
  return (
    <>
      <div className="design bg-rock">
        <div className="container">
          <div className="text">
            <p className="text-secondary">For all devices</p>
            <h2 className="text-main">Unique Design</h2>
            <div className="text-underline"></div>
          </div>
          <div className="design-devices">
            <div className="design-devices-tablet">
              <img src={require("../img/unique1.png")} alt="tablet" />
            </div>
            <div className="design-devices-phone">
              <img src={require("../img/unique2.png")} alt="phone" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UniqueDesign;
