// let score = "33abc";

// console.log(typeof score);

// let valueInNumber = Number(score); //converted from string to number
// console.log(typeof valueInNumber); //both correct
// console.log(valueInNumber); //NaN --> special type type number but contains not a number
// console.log(Number(null)); // 0
// console.log(Number(undefined));
// console.log(typeof NaN); // type of not a number is a number

// let isLoggedIn = -10;
// console.log(Boolean(isLoggedIn));//true
// let isLoggedIn = "";
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);//false

// let isLoggedIn = "adww";
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);//true

// let someNum = 33;
// let stringNum = String(someNum);
// console.log(typeof stringNum)//string

// let value = 3;
// let negValue = -value;
// // console.log(negValue);

// // console.log(2 + 2);
// // console.log(2 - 2);
// // console.log(2 * 2);
// // console.log(2 / 2);
// // console.log(2 ** 2);
// // console.log(2 % 2);

// let str1 = "hello";
// let str2 = " rishav";
// let str3 = str1 + str2; //concatination
// console.log(str3);
// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122 not 14
// console.log(1 + 2 + "2"); //32 not 122

//the above all are js rules following ecma guidelines

console.log(+true); //1 --> +1
// console.log(++true); //error

console.log(+""); //0-->empty parenthesis treated as false --> 0 --> +0

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2; // all 4

console.table([num1, num2, num3]);

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);//101
