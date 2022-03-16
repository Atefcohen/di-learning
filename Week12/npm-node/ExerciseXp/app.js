// Create a new folder called - npm-node
// Create a JS file called - main.js
// Add the following code to the file main.js :
//let a = 5;
//let b = 10;

// Write some more code in the main.js file 
// so when you run it in the command prompt it logs Hello you are 15
//const greeting = (a,b)=>{
//console.log(`Hello you are ${a+b}`);
//}
//greeting(a,b);

//PART 2

//Create a package.json file - use npm init
// Run the main.js file using npm start.
// Tip: you need to change the package.json file in order to achieve this.
// You should output something in the command prompt, for example: 
// Hi, thanks for running me with npm start!
//console.log('Hi, thanks for running me with npm start!');


//PART 3

// Create a package.json file - use npm init
// Install nodemon
// Write the following code, in a main.js file:

let a = 5;
let b = 10;
let x;
let c = 6;
x = a + b;

// Add some more code in the main.js so when you run it using nodemon, 
// it logs the sum of a + b as a first run.
console.log(`First run: ${a+b}`);
// Tip: you need to change the package.json file in order to achieve this.
// Update the main.js file to console.log the sum of x + c
console.log(`Second run: ${c+x}`);
