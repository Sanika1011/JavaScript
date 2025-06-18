// Arithmetic operators(+, -, *, /, Modulus,Exponentiation,Increment,Decrement)
let a = 10;
let b = 3;

console.log("a + b =",a+b);
console.log("a - b =",a-b);
console.log("a * b =",a*b);
console.log("a / b =",a/b);
console.log("a % b =",a%b);
console.log("a ** b =",a**b);
console.log("a++",a++);
console.log(a);
console.log("++a",++a);
console.log("b--",b--);
console.log(b);
console.log("--b",--b);



// Assignment operators => ( = ,+= ,-=, *= ,%= ,**=)


let m=4;

console.log("m += m :", m+=m);
console.log("m *= m :", m*=m);
console.log("m /= m :", m/=m);
console.log("m **= 3 :", m**=3);
console.log("m -= m :", m-=m);


// comparison operators => ( ==,!=,===,!==,>, >=, <, <=)


console.log("a == b:", a == b);   // true
console.log("a === b:", a === b); // false
console.log("a != b:", a != b);   // false
console.log("a !== b:", a !== b); // true
console.log("a > 3:", a > 3);     // true
console.log("a <= 5:", a <= 5);   // true


//  Logical Operators => ( Logical AND  &&,  Logical OR ||,  Logical NOT !)

let p = true;
let q = false;

console.log("p && q :" ,p&&q);
console.log("p || q :" ,p||q);
console.log("!p :" ,!p);
console.log("!q :" ,!q);


// ternary operator => (condition ? expressionIfTrue : expressionIfFalse;)

let age = 16;

let result = (age >= 18) ? "u can vote." : "u cannot vote.";
console.log(result);


// typeof Operator
let str = "Hello";
let num = 123;
let arr = [1, 2, 3];
let obj = { a: 1 };
let func = function () {};

console.log(typeof str);   // "string"
console.log(typeof num);   // "number"
console.log(typeof arr);   // "object"
console.log(typeof func);  // "function"

// instanceof Operator
console.log(arr instanceof Array); // true
console.log(obj instanceof Object); // true
console.log(func instanceof Function); // true