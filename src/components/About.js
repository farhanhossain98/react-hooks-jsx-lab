import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <About>
      <div id="about">About
        <h1>About Me</h1>
        <p>Hello from the other side</p>
        <img src={image} alt="I made this"></img>
      </div >
    </About>
  )
}

export default About;
