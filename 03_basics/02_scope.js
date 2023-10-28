// let a = 10;
// const b = 20
var c = 300;
let a=100;
if (true) {
  //scope
  let a = 10; //not accessable outside
  const b = 20; //not accessable outside
  var c = 30; // accessable outside
  console.log(a,'inside scope')
}

console.log(c); //no error gives 30 and overrides 300 --> problem using same name
console.log(a,'outside scope'); //error if not defined, if defined gives 100, doesn't overrides
// console.log(b); //error

// var has a global scope 

//scope in nodejs and browser console is different


