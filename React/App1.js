import React from "react";
import ReactDOM from "react-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";



const Applayout = () => (
  <div className="main-container">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
