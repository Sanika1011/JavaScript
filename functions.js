
// function definition
function sample() {
    console.log("hello this is a sample function!");
}

// calling function
sample();


// function definition with parameter
function example(msg) {
    console.log(msg);
    return msg;
}

// function calling with arguments
example("heyyy, i'm here");



function sum(x,y) {
    return x + y;
}


// arrow function
let arrowsum = (a,b) => {
    console.log(a+b);
};


function mul(x,y) {
    return x*y;
}

let arrowmul = (a,b) => {
    console.log("the mul is :",a*b);
};


const printhello = () => {
    console.log("hello");
};


// Qs. Create a function using the “function” keyword that takes a String as an argument &
//  returns the number of vowels in the string.



function countvowels(str) {
    //javascript , count=3
    let count = 0;
    for(const char of str) {
        if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            count++;
        }
    }
    return count;
}





// Qs. Create an arrow function to perform the same task.

let arrowcountvowels = (str) => {
    let count = 0;
    for(let char of str) {
        if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            count++;
        }
    }
    return count;
};



// foreach loop wit array
let arr = [1,2,3,4,5];

arr.forEach((val) => {
    console.log(val);
})


//  Qs. For a given array of numbers, print the square of each value using the forEach loop

let arr1 = [1,2,3,4,5];

arr1.forEach((num) => {
    console.log(num*num);
})



// array methods
//  Map => Creates a new array with the results of some operation. The value its callback returns are used to form new array
// arr.map( callbackFnx( value, index, array ) )

let newArr = arr.map((val) => {
    return val * 2;
})

console.log(newArr);


//  Filter => Creates a new array of elements that give true for a condition/filter.Eg: all even elements

let arr3 = [1,2,3,4];

let newArr1 = arr3.filter((val) => {
    return val % 2 === 0;
})

console.log(newArr1);


// Reduce => Performs some operations & reduces the array to a single value. It returns that single value.

const red = [1,2,3,4];

const output2 = red.reduce((res, curr) => {
    return res + curr;
});

console.log("output2:",output2);   




const array = [5,6,2,1,101,3];

const output = array.reduce((prev,curr) => {
    return prev > curr ? prev : curr;
});

console.log(output);



const array1 = [5,6,2,1,101,3];

const output1 = array1.reduce((prev,curr) => {
    return prev < curr ? prev : curr;
});

console.log(output1);


// Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.

let marks = [97, 64, 34, 49, 99, 96, 86];

let newMarks = marks.filter( (val) => {
    return val > 90;
});

console.log(newMarks);


//  Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
//  Use the reduce method to calculate sum of all numbers in the array.
//  Use the reduce method to calculate product of all numbers in the array.
 

let input = prompt("enter a number:");

let arrr = [];

for(let p = 1 ; p <= input ; p++) {
    arrr[p-1] = p;
}

console.log(arrr);


//  Use the reduce method to calculate sum of all numbers in the array.
let adik = arrr.reduce((prev, curr) => {
    return prev + curr;
});

console.log(adik);


//   Use the reduce method to calculate product of all numbers in the array.
let product = arrr.reduce((prev, curr) => {
    return prev * curr;
});

console.log(product);