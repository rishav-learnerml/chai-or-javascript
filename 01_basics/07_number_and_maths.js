// const score = 400;
// console.log(score); //400

// const balance = new Number(100.2); //returns number object
// console.log(balance); //[Number: 100]

// console.log(balance.toString()); //string 100
// console.log(balance.toFixed(2)); //fiexd upto 2 decimal places

// const otherNumber = 23.8966;

// console.log(otherNumber.toPrecision(3)); //gives precise values 23.9

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString());//1,000,000
// console.log(hundreds.toLocaleString('en-IN'));//10,00,000

//+++++++++++ Maths ++++++++++++

//math is an object in js

// console.log(Math.abs(-4)); //give the absolute value (without sign)
// console.log(Math.round(4.3)); //give the round-off value
// console.log(Math.ceil(4.3)); //give the ceil value --> 5
// console.log(Math.floor(4.3)); //give the floor value --> 4
// console.log(Math.min(4,3,6,8)); //give the min value --> 3
// console.log(Math.max(4,3,6,8)); //give the max value --> 8

//random
// console.log(Math.random()); //default--> any value between 0 and 1
// console.log(Math.floor((Math.random()*10)+1)); //range--> any value in 1-9 range
const min = 10,
  max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //range--> any value in max-min range
