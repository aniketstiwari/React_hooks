import React, { useState } from 'react';


const App = () => {

// useState is a hook in react for maintaining state in component
// it basically return two values Current_data & function
// current_data , updated data = initialdata
  const [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
  }
  ///////////////////////////////////////////////////////

  let newTime = new Date().toLocaleTimeString();
  const [ctime, UpdateTime] = useState(newTime);

  const SetTime = () => {
    newTime  = new Date().toLocaleTimeString();
    UpdateTime(newTime)
  }

  /////////////////////////////////////////////////////////////

  const [ctime2, UpdateCTime] = useState(newTime);

  const DigitalTime = () => {
    newTime  = new Date().toLocaleTimeString();
    UpdateCTime(newTime);
  }

  setInterval(DigitalTime, 1000);

  return (
    <>
      <h1>Time {ctime}</h1>
      <button onClick={SetTime}>Click me</button>
      <hr/>
      <h1>{count}</h1>
      <button onClick={IncNum}>Click me</button>
      <hr/>
      <h1> Digital Clock {ctime2}</h1>
    </>
  )
}

export default App;