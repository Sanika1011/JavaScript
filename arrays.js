// arrays in js are mutable
// array is a collection items of any datatypes
// u can store any datatypes items in an array
// we will prefer for loop and for-of loop to print the array

let arr = [1,2,3,4,5];
console.log(arr);

arr[0] = 100;
console.log(arr);

console.log(typeof(arr)); //object

let txtarr = ["john","tom","jerry","oggy"];
console.log(txtarr);

txtarr[0] = "tina";
console.log(txtarr);

txtarr[5] = "tim";
console.log(txtarr);

let strnum = ["kim",20,20.9];
console.log(strnum);


let heros = ["ironman","thor","spiderman","halk","parman"];

// printing array items using for loop
for(let i = 0 ; i < heros.length ; i++) {
    console.log(heros[i]);
}


// printing array items using for-of loop
console.log("using for-of loop");

for(let item of heros) {
    console.log(item);
}


let cities = ["delhi","pune","mumbai"];

for(let city of cities) {
    console.log(city.toUpperCase());
}


//  Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
//  Find the average marks of the entire class.

let marks = [85, 97, 44, 37, 76, 60];

let sum = 0;

for(let mark of marks) {
    sum = sum + mark;
    avg = sum/marks.length;
}

console.log(avg);
console.log(`The Average marks of whole class is ${avg}`);


//  Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
//  All items have an offer of 10% OFF on them. Change the array to store final price after
//  applying offer.

let items = [250, 645, 300, 900, 50];

let i = 0;

for(let val of items) {
    console.log(`val at index ${i} = ${val}`);
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`);
    i++;
}



for(let i = 0 ; i < items ; i++) {
    let offer = items[i] / 10;
    items[i] = items[i]-offer;
}

console.log(items);


//  Qs. Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix"

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

console.log(companies);

// a. Remove the first company from the array

console.log(companies.shift());

console.log(companies);

//  b. Remove Uber & Add Ola in its place

console.log(companies.splice(1,1,"ola"));

console.log(companies);

//  c. Add Amazon at the end
 
console.log(companies.push("Amazon"));

console.log(companies);