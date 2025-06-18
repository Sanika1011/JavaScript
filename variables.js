// Declaring variables using var, let, const
var x = 10;         // var is function-scoped
let y = 20;         // let is block-scoped
const z = 30;       // const is also block-scoped, and can't be reassigned

console.log(x, y, z);



// Using var
var a = 10;
a = 20; // var allows re-declaration and re-assignment

// Using let
let b = 30;
b = 40; // let allows re-assignment but not re-declaration

// Using const
const c = 50;
// c = 60; // Error: Assignment to constant variable

console.log("a:", a, "b:", b, "c:", c);


// Q1: Declare your name, age, and whether you're a student

let name = "john";
let age = 24;
let isStudent = true;

console.log(name,age,isStudent);


// Q2: Declare variables for your name and city. Print a sentence using them.

let fullname = "Sunny";
let city = "Delhi"

console.log(`hii my name is ${fullname} and i'm from ${city}.`);


// Q3: Declare a variable using let. Assign it a value, then change it, and log both.

let status = "delivered";
console.log("Before:",status);
status = "not-delivered";
console.log("After:",status);


// Q4: Swap two variables using a third variable

let p = 10;
let q = 19;
console.log("p =",p,"q =",q);
let temp = p;
p = q;
q = temp;

console.log("p =",p,"q =",q);


// Q5: Swap two variables without using a third variable
let m=10,n=19;
console.log("m =",m,"n =",n);
[m,n] = [n,m];
console.log("m =",m,"n =",n);


// Q6: Demonstrate hoisting with var
console.log(num); 
var num = 100;