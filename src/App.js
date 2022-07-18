import React from "react";

import { ReactComponent as Main } from "./main.svg";
import "./App.css";

export default function App() {
  const handleClick = (event) => {
    console.log(event.target.parentElement.id);
  };

  return (
    <div id="app">
      <Main id="main" onClick={handleClick} />
    </div>
  );
}
