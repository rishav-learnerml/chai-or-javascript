// literals -->not made from constructor

//object literals
// Object.create
//object literals
const mySym = Symbol("key1");
const JsUser = {
  name: "Rishav", //treated as "name":"Hitesh"
  age: 24,
  location: "kolkata",
  email: "rishav@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
  "full name": "rishav chatterjee",
  mySym: "myKey1", //not treated as symbol, treated as string
  [mySym]: "mykeyAccepted", // treated as symbol, accessed as JsUser[mySym]
};

//symbol

console.log(JsUser.email);
// console.log(JsUser[email]);//have togive in string
console.log(JsUser["email"]); //have togive in string
console.log(JsUser["full name"]); //have togive in string

// myArray = ["h", "i"];
// myArray[1];

JsUser.email = "rishav@tcs.com";
// Object.freeze(JsUser);//no one can change the object properties now, it won't give error if you try but won't reflect you can't add new properties externally, it'll give error

JsUser.greeting = function () {
  console.log("Good Morning!");
}; //added to object

JsUser.greetingNew = function () {
//   console.log(`Hi, ${JsUser.name}!`);
  console.log(`Hi, ${this.name}!`); //this refers to current object
};

console.log(JsUser.greeting); //[Function (anonymous)]
console.log(JsUser.greeting()); //Good Morning! undefined
//first it executes the function and prints what's inside it then it console logs the return value of the function which is undefined for a void function
JsUser.greetingNew();
