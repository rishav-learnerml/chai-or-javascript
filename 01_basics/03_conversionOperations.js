let score = "33abc";

console.log(typeof score);

let valueInNumber = Number(score); //converted from string to number
console.log(typeof valueInNumber); //both correct
console.log(valueInNumber); //NaN --> special type type number but contains not a number
console.log(Number(null)); // 0
console.log(Number(undefined));
console.log(typeof NaN); // type of not a number is a number

// let isLoggedIn = -10;
// console.log(Boolean(isLoggedIn));//true
// let isLoggedIn = "";
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);//false

// let isLoggedIn = "adww";
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);//true

let someNum = 33;
let stringNum = String(someNum);
console.log(typeof stringNum)//string

