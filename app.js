/**
 * Data types in Javascript
 * ***********************************
 * Primitive datatypes are as follows: 
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. Null
 * 5. Symbol
 * 6. Undefined
 * ***********************************
 * Structural datatypes
 * 7. Function
 * 8. Array
 * 9. Object
 */

 /**
  * Variables in javascript
  * --variables in javascript can be defined in 3 ways:-
  * 1. let --> you can change the value after assigning
  * 2. const --> you cannot reassign a value after assigning
  * 3. var --> you can change the value after assigning
  */

// Example: 1
let a; // declaring a variable "a"
a = 2; // assigning 2 to variable "a"
a = 5; // reassigning 5 to variable "a"
// ** same can be applied for "var"

// Example: 2
let b = 2; // declaring a variable "b" and assigning 2 to "b"
b = 5; // reassigning 5 to variable "b"

// Example: 3
const c; // This will through error since for const you need to assign a value after declaring it
const c = 5 // this is a correct statement
c = 6; // this will through an error since you cannot reassgin to a const variable

let x = "Saikat";
let y = true;

/**
 * Operators
 * + ==> Addition of 2 value or concatenation of 2 string
 * - ==> Substract 2 values
 * / ==> Divide 2 values
 * % ==> Modulus of a value
 * * ==> Multiply 2 values
 * ! ==> complement of a value
 */

3 + 5
4 - 5
3 / 2
4 * 5
5 % 2 // 1
4.1 % 1 // 0.1 -- after rounding
let s = true;
let t = !s; // false

/**
 * Conditions
 * 
 */

// If condition

if(/**condition */){
    // statements
}

// if else condition
if(/**condition */){
    // statements
}else{
    // statements
}

// if else if
if(/**condition */){
    // statements
}else if(/**other condition */){
    // statements
}else{
    // statements
}

switch(/**variable to monitor */){
    case "A":
        //statements;
    break;
    case "B":
        //statements;
    break;
    default:
    break;
}


// Write a program to find if a candidate is eligible to vote
function findEligibility(age){
    if(age >= 18) return "You are eligible to vote";
    return "Sorry!!! You still need to grow up";
}


/**
 * Loops
 */

// For loop

for(start; end; inc/dec){
    // statements
}

for(let i = 0; i < 10; i++){
    console.log(i);
}

let arr = [1,2,3,4,5,6];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// For of loop
for(let element of  arr){
    console.log(element)
}

// For in loop
let employee = {
    name: "Ram",
    age: 20,
    salary: 20000,
    designation: "Clerk",
    address: "Marathalli, Bangalore",
    city: "Bangalore",
    pin: 560054,
    state: "Karnataka"
}

for(let key in employee){
    console.log(`Key is ${key}, and value is ${employee[key]}`)
}

// While loop
let i = 0;
while(i != 10){ // the loop will run untill value of i is 10
    i++; // I am incrementing the value of i
}

// Do while loop

let i = 0;
do{
    i++;
}while(i != 10);

// Arrays
let arr = []; // This is how we define an array
arr.push(1); // To add a value at the bottom of an array

let arr = [1,2,3,4,5,6];
/**
 * The meaning of the above array is
 * [
 *  1,
 *  2,
 *  3,
 *  4,
 *  5,
 *  6
 * ]
 * if I do arr.push(10);
 * then 10 is added at the end of the array
 * [
 *  1,
 *  2,
 *  3,
 *  4,
 *  5,
 *  6,
 *  10
 * ]
 * if I do arr.pop()
 * then the last value is removed from the array and returned
 * [
 *  1,
 *  2,
 *  3,
 *  4,
 *  5,
 *  6,
 * ]
 */

// Object
let obj = {}; // To define an object
/**
 * {key: value}
 */
obj = {
    name: "Saikat",
    age: 30
}

// to access a value
console.log(obj.name)
// or
console.log(obj["name"])

// to add a new key-value
obj.fname = "Saikat";
obj.lname = "Paul";
// or
obj["fname"] = "Saikat";
obj["lname"] = "Paul"

// Functions
// Function declaration

function functionName(){

}

// Function with some arguments
function functionName(argument1, argument2){

}

// Function with arguments and return
function functionName(argument1, argument2) {
    return "Some value";
}

// Function Expression
const functionName = function(){

}

// Function with some arguments
const functionName = function(argument1, argument2){
    return "some value"
}

// Arrow function
const functionName = (argument1, argument2) => {
    return "some value"
}