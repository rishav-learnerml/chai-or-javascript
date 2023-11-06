//array specific loops
//for of loop

// ["","",""]
// [{},{},{}]

//loop through arrays

// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello World";
// for (const greet of greetings) {
//   console.log(`Each char is ${greet}`);
// }

//maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'FR' => 'France'
}
only unique values maintaining order
*/

// console.log(map)

for (const key in map) {
  console.log(key);
  /*
    [ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'FR', 'France' ]
    */
}

// for (const [key, value] of map) {//destriuctured
//     console.log(`key is : ${key} and value is : ${value}`)
// }

// const myObj = {
//   game1: "NFS",
//   game2: "Spiderman",
// };

// for (const [key, value] of myObj) {
//   console.log(`key is : ${key} and value is : ${value}`); //object is not iteratable like map, hence gives error
// }

const myObject = {
  js: "javascript",
  cpp: "c++",
  Rb: "Ruby",
  swift: "Swift by Apple",
};

//for objects we usually use for in loops

// for(const key in myObject){
//     console.log(key)//js cpp Rb swift
//     console.log(myObject[key])//javascript c++ Ruby Swift by Apple
// }

// const programming=["cpp","Java","Py","Js","Dart"];

// for (const key in programming) {
//     console.log(key);//0 1 2 3 4 5
//     console.log(programming[key]);//0 1 2 3 4 5
// }

//for of loops gives values by default, whereas, for in loop gives they keys

//we generally use for in loop for arrays and for of for objects/map

//map is not iteratable, hence for-in can't be used

//for-each loop

const coding = ["js", "ruby", "java", "Python", "Javascript"];

//iteratable on arrays/objects, a higher-order function
//call back functions are anonymous
//executes for each item of the array, hence for-each
//for each loop directly manipulates the original array

// coding.forEach(function (item) {
//   console.log(item);
// });

// coding.forEach(ele => console.log(ele)); //one linear using arrow functions

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe) //give only the reference, do not execute, it'll be automatically done by js

// coding.forEach((item, index, arr)=>{
//     console.log(item)
//     console.log(index)
//     console.log(arr)
//     /*
//     Javascript
// 4
// [ 'js', 'ruby', 'java', 'Python', 'Javascript' ]
//     */
// })

// const myCoding = [
//   {
//     languageName: "Javascript",
//     languageFileName: "js",
//   },
//   {
//     languageName: "Java",
//     languageFileName: "java",
//   },
//   {
//     languageName: "Python",
//     languageFileName: "py",
//   },
//   {
//     languageName: "Kotlon",
//     languageFileName: "kt",
//   },
// ];

// //object destructuring
// const printContent = ({ languageName, languageFileName }) =>
//   console.log(`${languageName} : ${languageFileName}`);

// myCoding.forEach(printContent);

//filter, map and reduce

// const newCoding = coding.forEach((item)=>{
//     console.log(item)
//     return item;
// })

// coding(newCoding) // return undefined as it does not returns anything, it directly manipulates the array

//map does not manipulates the original array, it returns us a new modified array

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newArr = myNums.map((item)=>item+1);
// console.log(newArr)
// console.log(myNums)

// const newNums = myNums.filter((num) => num > 4);
// const newNums = myNums.filter((num) => {num > 4}); //gives empty array as there is not return statement
// console.log(newNums) //[ 5, 6, 7, 8, 9, 10 ]

//same task using foreach ---> Lengthy Code

// const newNums = [];
// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });
// console.log(newNums)

//map

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map(num => ++num);

//chaining
// const newNums = myNums
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num % 3 == 0);

// console.log(newNums);

//reduce

// const myNums = [1, 2, 3];
// // const myTotal = myNums.reduce(function (acc, curr) {
// //   return acc + curr;
// // }, 2);//accumulate login function, initial value

// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

// console.log(myTotal);

const shoppingCart = [
  { itemName: "js course", price: 2999 },
  { itemName: "python course", price: 1999 },
  { itemName: "Data science course", price: 9999 },
  { itemName: "app dev course", price: 4999 },
];

const cartTotal = shoppingCart.reduce((acc, { price: curr }) => acc + curr, 0);
console.log(cartTotal);
