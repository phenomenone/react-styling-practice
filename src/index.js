//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const custStyle = {
  color: "red"
};

let greeting;

const today = new Date();
const currentTime = today.getHours();

if (currentTime < 12) {
  greeting = "Good morning!";
} else if (currentTime < 18) {
  greeting = "Good Afternoon!";
  custStyle.color = "green";
} else {
  greeting = "Good Evening!";
  custStyle.color = "blue";
}

ReactDOM.render(
  <h1 style={custStyle}>{greeting}</h1>,

  document.getElementById("root")
);
