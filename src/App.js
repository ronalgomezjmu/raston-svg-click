import React, { useState } from "react";
import { Dialog } from "@mui/material";

import { ReactComponent as Main } from "./components/svgs/ftir-main.svg";
import "./App.css";
import { imgSource, toolTips } from "./dictionaries/SVGLibrary";

export default function App() {
  const [toggled, setToggled] = useState(false);
  const [element, setElement] = useState(null);

  const handleClick = (event) => {
    setToggled(!toggled);

    console.log(element);

    if (event.target.parentElement.id === "app") {
      setElement(null);
    } else {
      setElement(event.target.parentElement.id);
    }
  };

  return (
    <div id="app">
      <Main id="main" onClick={handleClick} />

      {element && (
        <Dialog className="popup" onClose={handleClick} open={toggled}>
          <h2>{toolTips[element].title}</h2>
          <img src={imgSource[element]} className="example-image" alt="" />
          <p>{toolTips[element].text}</p>
        </Dialog>
      )}
    </div>
  );
}
