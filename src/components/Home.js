import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return (
    <Home>
      <div id="home">
        <h1 style="firebrick">Your {name} is a Web Developer from {city}</h1>
      </div>
    </Home>
  )
}

export default Home;
