import React, { Component, useState } from "react";
import "../styles/App.css";
import Pomodoro from "./Pomodoro";

const App = () => {
   return (
      <div id="main">
         <Pomodoro />
      </div>
   );
};

export default App;
