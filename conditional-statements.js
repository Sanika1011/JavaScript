// **What Are Conditional Statements?
// =>Conditional statements are used to perform different actions based on different conditions.


// 1. if Statement => Executes a block of code if a specified condition is true.

let age = 24;

if(age >= 18) {
    console.log("you are an adult.");
}


// 2. if...else Statement => Executes one block if the condition is true, another block if it’s false.

let isRaining = false;

if(isRaining) {
    console.log("You need to take an umbrella");
} else {
    console.log("you don't need umbrella");
}


// 3. if...else if...else Statement => Checks multiple conditions.

let marks = 95;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// 4. Nested if Statements => One if statement inside another — useful for complex checks.

let user = "admin";
let pass = "1234";

if (user === "admin") {
  if (pass === "1234") {
    console.log("Login successful");
  } else {
    console.log("Wrong password");
  }
} else {
  console.log("Unknown user");
}


//  5. Ternary Operator (Short if...else) => Use for simple decisions in one line.

let myage = 16;

let result = (myage >= 18) ? "Adult" : "Minor";
console.log(result); // "Minor"


// 6. switch Statement (optional) => Alternative to if...else when checking the same variable against many values.

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Other day");
}