// array
const myArr = [1, 2, 3, 4, 5, 6]; //mixed values of different elements also allowed
//js arrays are resizable

// const myHeroes = ["hi", "iron", "man"];
// console.log(myArr[2]); //arrays always creates shallow copy --> shares the same reference points

// const numbers = [1, 2, 3, 4];
// console.log(myArr[1]);

// array methods

// myArr.push(10);//pushes to end;-->changes the original array
// myArr.pop();//removes last value;-->changes the array

// myArr.unshift(0);//adds to front
// myArr.shift();//shifts to right
// console.log(myArr.includes(9));//false
// console.log(myArr.indexOf(9));//-1

// const newArr = myArr.join();

// console.log(myArr);
// console.log(typeof newArr);

//slice vs splice

//slice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);//includes1->3 values
console.log(myn1);
console.log(myArr,'B'); //doesnot change the original array

//splice
console.log("A ", myArr);

const myn2 = myArr.splice(1, 3);//includes1->3 values
console.log(myn2);
console.log(myArr,'B'); // changes the original array, removes the spliced array

