import React from "react";

import { parts } from "./svgDict";
import "../App.css";

export default function SVG({ part, click }) {
  const handleClick = (event) => {
    console.log(event.target.parentElement.id);
  };

  const SVGComponent = parts[part];

  return (
    <div id="container">
      <SVGComponent className="svg" onClick={handleClick} />
    </div>
  );
}
