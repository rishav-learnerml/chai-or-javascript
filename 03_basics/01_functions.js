// console.log("H")
// console.log("I")
// console.log("T")
// console.log("E")
// console.log("H")

function sayMyName() {
  // console.log("H")
  // console.log("I")
  // console.log("T")
  // console.log("E")
  // console.log("H")
}

// sayMyName //funtion reference
// sayMyName() //function execution
// console.log(sayMyName) //[Function: sayMyName] gives the type

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

addTwoNumbers(); //no parameters given hence prints NaN
addTwoNumbers(3, 4); //7
addTwoNumbers(3, "4"); //34-->auto conversion by js
addTwoNumbers(3, "a"); //3a-->auto conversion by js
addTwoNumbers(3, null); //3-->auto conversion by js null->0

const result = addTwoNumbers(3, 5);
console.log(result); //undefined
//function overloading
function addTwoNumbers(number1, number2) {
  return number1 + number2;
  //nothing executed after return
}
function loginUserMessage(username) {
  return username ? `${username} just Logged In` : "Invalid User!";
}
function loginUserMessage(username = "user") {
  //default value
  return username ? `${username} just Logged In` : "Invalid User!";
}

console.log(addTwoNumbers(2, 5));
console.log(loginUserMessage("Rishav"));
console.log(loginUserMessage()); //undefined just Logged In

function calculateCartPrice(...num1) {
  //rest operator -> packs all parameter values inside an array
  return num1;
}

function calculateCartPrice(val1, val2, ...num1) {
  //rest operator -> takes 1st two as it is and rest packs all parameter values inside an array
  return num1;
}

console.log(calculateCartPrice(2, 3, 4)); //only 2 taken others ignored

const user = {
  username: "hitesh",
  price: 199,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject?.username} and price is ${anyObject?.price}`
  );
}

handleObject(user);
handleObject(); //error must give an object else introduce type safety ?. it'll give undefined

const myNewArr = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[0];
}

console.log(returnSecondValue(myNewArr));
