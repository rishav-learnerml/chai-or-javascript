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


function one(){
    const uname = 'rishav';
    function two() {
        const website = "youtube"
        console.log(uname)
    }
    // console.log(website)//ReferenceError: website is not defined
    two()//not executed as js executes line by line
}
//each function has a separate call stack
one()

//+++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++++++++

addone(5)//runs even before declaration due to hoisting of function
function addone(num){
    return num+1;
}//function declaration

addTwo(5)// does not run, as it is a function expression, stored in a variable, and you can't access a variable before declaration
const addTwo = function(num){
    return num+2;
} //funtion expression
