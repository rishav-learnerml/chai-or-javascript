//data types are categorized into two categories -> primitives and non-primitives based on how they are stored in the memory and how they are accessed

//#primitives --> call by value -> copy is made

//7 categories

/*
string
number
boolean
null
undefined
symbol
bigint
*/

// const score = 100; //infers the type automatically --> js is dynamically typed language
// const score:number = 100 //typescript --> not automatically derived

// const isLoggedIn = false;
// const scoreValue = 100;

// let userEmil; //stores undefined
// const id = Symbol('123'); returns symbol
// const anotherId = Symbol('123');

// console.log(id==anotherId) //not same --> false different symbol

//const bigNumber = 12746238578347n --> bigint

//#non primitive/reference types --> pass by reference

/*
Array
Objects
Functions
*/

// const heroes = ["shaktiman", "naagraj", "doga"]; //array
// let myObj = {
//     name: "Rishav",
//     age:22
// } //object

// const myFunc = function () {
//   console.log("Hello World");
// };  //function

// console.log(typeof vaiableName) // give the datatype

//typeof bigint --> undefined
//typeof null --> object
