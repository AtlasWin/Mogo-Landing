import React, { useState } from "react";
import "./accordion.scss";

function Accordion({ title, content, icon }) {
  const [active, setActive] = useState(false);
  return (
    <div className={`accordion ${active ? "active" : ""}`}>
      <div className="accordion-title" onClick={() => setActive(!active)}>
        <div className="accordion-title-box">
          <div>{icon}</div>
          <span>{title}</span>
        </div>
        <div className="accordion-icon">
          <i className="bx bxs-chevron-down"></i>
        </div>
      </div>
      <div className="accordion-content">
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Accordion;
