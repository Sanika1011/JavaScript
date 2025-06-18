//  Loops are used to execute a piece of code again & again
// for Loop,for-in Loop,for-of Loop,while Loop,do-while Loop

// 1)for loop

for (let i = 1; i <= 5; i++) {
    console.log("hello");
}

for (let i = 1; i <= 5; i++) {
    console.log("i :", i);
}


// 2)for-in loop =>

//  for (let key in objVar) {
 //do some work
//  }

const person = {
    fname:"John",
    lname:"Doe", 
    age:25
};


for (let key in person) {
  console.log(person[key]);
}


let student = {
    name:"dev",
    age:29,
    cgpa:8.30,
    isPass:true
};

for(let key in student) {
    console.log("key=",key,"value=",student[key]);
}

// 3)for-of loop

//  for (let val of strVar) {
 //do some work
//  }

let str = "JavaScript";

for(let i of str) { //iterator -> character
    console.log("i :", i);
}



let str1 = "example";
let size = 0;
for(let char of str1) {
    console.log("char :", char);
    size++;
}
console.log(size);


// 4) while Loop

let j = 1;
while(j<=5) {
    console.log("j:",j);
    j++;
}


let k = 1;
while(k <= 10) {
    console.log("javascript");
    k++;
}


// 5) do-while loop => get execute for atleast once

let i = 20;
do {
    console.log("javascript");
} while(i<=10);


let p = 1;
do {
    console.log("p =", p);
    p++;
}while(p<=5);



//  Qs1. Print all even/odd numbers from 0 to 100.

for(let num=0;num<=100;num++) {
    if(num%2==0) { //for even numbers
        console.log(num);
    }
}


for(let num=0;num<=100;num++) {
    if(num%2 !== 0) {
        console.log(num);
    }
}


// Qs2. Create a game where you start with any random game number. Ask the user to keep
//  guessing the game number until the user enters correct value


let number = 19;
let usernum = prompt("Guess the number:");

while(usernum != number) {
    usernum = prompt("you entered a wrong number.Try again!");
}

console.log("Congrats!! u have guessed a correct number");