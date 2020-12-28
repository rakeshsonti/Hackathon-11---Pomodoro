import React, { useEffect, useState } from "react";
const Pomodoro = () => {
   const [workTime, setWorkTime] = useState(25);
   const [breakTime, setBreakTime] = useState(0);
   const [workInput, setWorkInput] = useState(25);
   const [breakInput, setBreakInput] = useState(5);
   const [startButton, setStartButton] = useState(false);
   const [stopButton, setStopButton] = useState(true);
   const [inputButton, setInputButton] = useState(false);
   const [resetButton, setResetButton] = useState(true);
   useEffect(() => {
      setWorkTime(25);
      setBreakTime(5);
      setWorkInput(25);
      setBreakInput(5);
   }, []);
   useEffect(() => {
      if (startButton) {
         const intervalId = setInterval(() => {
            if (breakTime > 0) {
               const newBreakTime = breakTime - 1;
               setBreakTime(newBreakTime);
            } else {
               if (workTime === 0 && breakTime === 0) {
                  setBreakTime(5);
                  setWorkTime(25);
               }
               const newWorkTime = workTime - 1;
               const newBreakTime = 59;
               setBreakTime(newBreakTime);
               setWorkTime(newWorkTime);
            }
         }, 1 * 1000);
         return () => {
            clearInterval(intervalId);
         };
      }
   });
   return (
      <div>
         <h1>
            {workTime}:{breakTime}
         </h1>
         <h1>workTime</h1>
         <div
            style={{
               display: "flex",
               flexDirection: "row",
               justifyContent: "center",
               color: "black",
            }}
         >
            <button
               data-testid="start-btn"
               onClick={() => {
                  setStartButton(true);
                  setStopButton(false);
                  setResetButton(false);
                  setInputButton(true);
               }}
               disabled={startButton}
            >
               Start
            </button>
            <button
               data-testid="stop-btn"
               onClick={() => {
                  setStartButton(false);
                  setInputButton(false);
                  setResetButton(false);
                  setStopButton(true);
               }}
               disabled={stopButton}
            >
               Stop
            </button>
            <button
               data-testid="reset-btn"
               onClick={() => {
                  setWorkTime(25);
                  setBreakTime(0);
                  setWorkInput(25);
                  setBreakInput(0);
                  setResetButton(true);
                  setStopButton(true);
                  setStartButton(false);
                  setInputButton(false);
               }}
               disabled={resetButton}
            >
               Reset
            </button>
            <br />
            <input
               onChange={(evn) => {
                  const num = evn.target.value;
                  if (isNaN(num) || num === null || num === undefined) {
                     setWorkInput(25);
                  } else {
                     setWorkInput(Number(evn.target.value));
                  }
               }}
               type="number"
               data-testid="work-duration"
               placeholder="work duration"
               disabled={inputButton}
               value={workInput}
            ></input>
            <input
               onChange={(evn) => {
                  const num = evn.target.value;
                  if (isNaN(num) || num === null || num === undefined) {
                     // setBreakInput(5);
                  } else {
                     setBreakInput(Number(evn.target.value));
                  }
               }}
               data-testid="break-duration"
               placeholder="break duration"
               disabled={inputButton}
               value={breakInput}
            ></input>
            <button
               data-testid="set-btn"
               onClick={() => {
                  if (workInput == 0 && breakInput == 0) {
                     setWorkTime(25);
                     setBreakTime(5);
                     setWorkInput(25);
                     setBreakInput(5);
                  } else {
                     setWorkTime(workInput);
                     setBreakTime(breakInput);
                  }
               }}
               disabled={inputButton}
            >
               Set
            </button>
         </div>
      </div>
   );
};
export default Pomodoro;
