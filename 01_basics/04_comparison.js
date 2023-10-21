// console.log(2>1); //boolean -> true
// console.log(2>=1); //boolean -> true
// console.log(2<1); //boolean -> false
// console.log(2==1); //boolean -> false
// console.log(2!=1); //boolean -> true

console.log("2" > 1); //true --> "2" is automatically converted to number by javascript
console.log("02" > 1); //true --> "02" is automatically converted to number by javascript

//might give unexpected results --> so compare always similar datatype to be safe

console.log(null > 0); //false --> onversion of null to 0 is done as it's a comparison operator
console.log(null == 0); //false --> no conversion from null to 0 is done for assignment operator
console.log(null >= 0); //true --> conversion of null to 0 is done as it's a comparison operator

console.log(undefined == 0);// never converted hence always false
console.log(undefined > 0);// never converted hence always false
console.log(undefined >= 0);// never converted hence always false

//equality check and comparison works differently in js

// strict check -> === equal value and equal type, !== might be eqal value but not same type

console.log("2"!=2); //false
console.log("2"!==2); //true
console.log("2"==2); //true
console.log("2"===2); //false
