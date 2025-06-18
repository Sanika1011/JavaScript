// strings in js are immutable

let str1 = 'Hello';
let str2 = "World";
let str3 = `Hello, ${str2}`; // Template literal

console.log(str3);


let text = "javascript";

console.log(text);

console.log(text.length);

console.log(text[0]);

console.log(text.substring( 0 , 4 ));

console.log(text.toUpperCase());

console.log(text.toLowerCase());

console.log(text.indexOf("script"));

console.log(text.includes("jam"));

console.log(text.includes("java"));

console.log(text.replace("java","type"));

console.log(text.split(""));

console.log(text.charAt(3));

console.log(text.slice(0));

console.log(text.slice(0,4));

console.log(text.startsWith("java"));

console.log(text.endsWith("script"));

console.log(text.repeat(3));




// Template Literals

let fname = "jonny";
let city = "delhi";

console.log(`My name is ${fname}, and i am from ${city}.`);
