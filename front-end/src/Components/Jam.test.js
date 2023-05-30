import React from "react";
import ReactDOM from "react-dom";
import Jam from "./Jam";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Jam />, div);
});