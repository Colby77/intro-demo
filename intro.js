const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Hello, what is your name?", function(answer){
    console.log("Hi " + answer);
});

// console.log("hello world");

const firstName = "Colby";
const lastName = "Workman";
const age = 20;

// console.log(firstName, lastName, age);

let x = 4;
let y = 100;
let z = 23;

let sum = x + y + z;
// console.log(sum);

const greeting = "Hello, my name is ";

// Template string
// console.log(greeting + firstName + lastName);
// console.log(`Hello, my name is ${firstName} ${lastName}`);

