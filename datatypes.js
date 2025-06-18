// Primitive Types
let str = "Hello";              // String
let num = 42;                   // Number
let isActive = true;            // Boolean
let nothing = null;             // Null
let notAssigned;                // Undefined
let id = Symbol("id");          // Symbol
let big = 12345678901234567890n; // BigInt


// Non-Primitive Types
let person = {
     name: "Anjali",
     age: 45 
    }; // Object

console.log(person);
    
let colors = ["red", "green", "blue"];    // Array
console.log(colors);

function greet() { 
    console.log("Hi"); 
}   // Function


console.log(typeof person);       
console.log(typeof colors);   
console.log(typeof greet);

console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object"
console.log(typeof []);        // "object"
console.log(typeof {});        // "object"
console.log(typeof function(){}); // "function"


let fullname = "john dev";
let followers = 440;
let isFollowed = false;

console.log(fullname);
console.log(followers);
console.log(isFollowed);

//  Qs1. Create a const object called “product” to store information.

const product = {
    name : "ball pen",
    ratings : 4,
    price : 250,
    offer : 5
}
console.log(product);


// Qs2. Create a const object called “profile” to store information.

const profile = {
     username : "ben ten",
     posts : 200,
     followers : 400,
     following : 5,
     info : "hdftdeftvbh"
}

console.log(profile);



// 3. Undefined
let score;
console.log(score); // undefined
console.log(typeof score); // "undefined"


// 4. Null
let selectedColor = null;
console.log(selectedColor); // null
console.log(typeof selectedColor); // "object" 


// 5. typeof null
let value = null;
console.log(typeof value); // "object"

//  6. BigInt

let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);
console.log(typeof bigNumber); // "bigint"