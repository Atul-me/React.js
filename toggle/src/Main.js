import React, { useState } from "react";
import "./index.css";

const Main = () => {
  const [bcolor, setColor] = useState("white")
  const [textColor, setTextColor] = useState("#1b1b1b")
  const [buttonStyle, setButtonStyle] = useState("white")

  function handleClick(){
    setColor(bcolor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b")
    setButtonStyle(bcolor === "white" ? "#1b1b1b" : "white")
  }
  return (
    <>
      <section style={{bcolor, color: textColor}}>
        <button 
           onClick={handleClick}
           style={{
            buttonStyle,
            color: textColor,
            border: `2px solid ${textColor}`,
           }}
           >{bcolor === "#1b1b1b" ? "Black Theme" : "White Theme"}</button>
      </section>

      <section className="content">
        <h1>Welcome to A <br/>
        Real World</h1>
      </section>
    </>
  );
};

export default Main;
