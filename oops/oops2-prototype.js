//prototypal behaviour
function multiplyByFive(num) {
  return num * 5;
}

multiplyByFive.power = 2;

console.log(multiplyByFive(5)); //25
console.log(multiplyByFive.power); //2
console.log(multiplyByFive.prototype); //{}

function createUser(userName, score) {
  this.userName = userName;
  this.score = score;
  return this;
}
createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`score: ${this.score}, user: ${this.userName}`);
};
const user1 = new createUser("hitesh", 10); //new keyword initializes the added properties
const user2 = new createUser("Rishav", 100);

user1.printMe();
user2.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

//prototype in more depth
//  let myName = "Hitesh    "

//  console.log(myName.trueLength)

let myHeroes = ["thor", "cap"];
let heroPower = {
  thor: "Storm Breaker",
  cap: "Shield",
  getCapPower: function () {
    console.log(`Cap power is ${shield}`);
  },
};

Object.prototype.rishav = function(){
    console.log('Rishav is inevitable')
}//injected in all objects

Array.prototype.heyRishav=function(){
    console.log('hi rishav')
}//injected in only arrays, not all objects

//inheritance
