// Normal way of function
// You can call it up here!
console.log(greetOG("Bro")); 

function greetOG(name) {
  return `Sup, ${name}`;
}
// Function Expression
const greetMillennial = function(name) {
  return `Hello, ${name}`;
};

console.log(greetMillennial("Bro"));
// Arrow Function (The Gen-Z Way)
const greetGenZ = (name) => {
  return `Yo, ${name}`;
};

// THE GIGACHAD ONE-LINER (Implicit Return)
// If it's just one line of code, you can drop the {} and the 'return' keyword.
const greetFast = name => `Yo, ${name} no cap`;

console.log(greetFast("Bro"));

// Built-in Function
// Math.max() is a built-in function. 
// You just hand it numbers and it does the math behind the scenes.
const highestScore = Math.max(45, 120, 13);
console.log(highestScore); // Output: 120

// Put 'async' before the arrow to unlock god mode
const fetchServerData = async () => {
  console.log("1. Sending request to server...");
  
  // The 'await' keyword tells JS to pause THIS specific function 
  // until the fetch finishes, while the rest of your app keeps running fine.
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();
  
  console.log("2. Data secured!", data.name);
};

fetchServerData();
console.log("3. Doing other stuff while waiting...");

// Multi-paramterized functions
const trackStormSystem = (windSpeed, pressure, isLandfall) => {
  if (windSpeed > 119 && isLandfall === true) {
    return `Red Alert: Severe cyclone making landfall. Pressure at ${pressure}hPa.`;
  }
  return "System is stable. Keep monitoring.";
};

// When you call it, you MUST pass the data in the exact same order
const status = trackStormSystem(140, 950, true);
console.log(status);