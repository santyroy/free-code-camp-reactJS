import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

function App() {
  const firstName = "Sougata";
  const lastName = "Roy";
  const date = new Date(2020, 7, 18, 14);
  const hours = date.getHours();
  let timeOfDay;

  const styles = {
    fontSize: "20px",
  };

  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "#04756F";
  } else if (hours >= 12 && hours <= 17) {
    timeOfDay = "afternoon";
    styles.color = "#8914A3";
  } else {
    timeOfDay = "night";
    styles.color = "#D90000";
  }

  return (
    <div>
      <h1>Hello {firstName + " " + lastName}</h1>
      <h1>Hello {`${firstName} ${lastName}`}</h1>
      <h1>It is currently about {date.getHours() % 12} o'clock</h1>
      <h1 style={styles}>Good {timeOfDay}!</h1>
    </div>
  );
}

export default App;
