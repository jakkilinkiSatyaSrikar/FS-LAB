import { useState, useEffect } from 'react';

// App.jsx
function Hi() {
  // We use state to track if the button was clicked
  const [showCount, setShowCount] = useState(false);

  function action() {
    alert("HI MAVA");
  }

  return (
    <div>
      <button onClick={action}>CLICK TO HI</button>
      {/* We update the state to true when clicked */}
      <button onClick={() => setShowCount(true)}>COUNT</button>
      
      {/* Conditional rendering: if showCount is true, render the Count component */}
      {showCount && <Count />}
    </div>
  );
}

function Count() {
  // 'p' is our value, starting at 0
  const [p, setP] = useState(0);

  // useEffect runs after the component mounts to the screen
  useEffect(() => {
    // We use setInterval instead of a for-loop to create a delay between updates
    const loopTimer = setInterval(() => {
      
      setP((currentValue) => {
        // This is our loop condition: stop when we hit 10
        if (currentValue >= 10) {
          clearInterval(loopTimer); // Kills the interval (breaks the loop)
          return currentValue; 
        }
        // Otherwise, increment by 1
        return currentValue + 1; 
      });
      
    }, 1000); // 1000 milliseconds = updates 1 time per second

    // Cleanup function in case the component gets removed before finishing
    return () => clearInterval(loopTimer); 
  }, []); // Empty array means this effect only starts once

  return (
    <div>
      <h2>Current value of p: {p}</h2>
    </div>
  );
}
// Using a named export so your import {Hi} actually works


function App() {


    function handleChange(event) {


        document.getElementById("result").innerText =
            event.target.value;


    }


    return (
        <div>


            <input
                type="text"
                onChange={handleChange}
            />


            <p id="result"></p>


        </div>
    );
}

export { Hi, App };
