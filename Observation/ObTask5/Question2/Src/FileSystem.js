const fs = require("fs");

let file = "data.txt";
let content = "Hello Node.js";

fs.writeFileSync(file, content);
console.log("File:", fs.readFileSync(file, "utf8"));

fs.appendFileSync(file, "\nWelcome!");
console.log("Final:", fs.readFileSync(file, "utf8"));