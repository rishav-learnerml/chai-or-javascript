//global execution context --> this
//function execution context --> this
//eval execution context --> mongoose, property of global object

//memory creation phase / creation phase
//execution phase

let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
  //makes it's separate execution context-->new variable + execution thread
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);
