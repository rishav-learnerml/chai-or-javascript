//strings --> the modern way
//denoted with both '' and "" in js
//+ to concatinate
const name = "hitesh";
const repoCount = 50;

console.log(name + repoCount); //string + int = string //outdated
//use backtics --> string interpolations

console.log(`Hello my name is ${name} and I have ${repoCount} github repos`);

let gameName = new String("rishav"); //makes a string object
console.log(gameName[0]); //r
console.log(gameName.__proto__); //gives the object
console.log(gameName.length); //6
console.log(gameName.toUpperCase()); //RISHAV --> doesn't change the orifginal value returns a copy
console.log(gameName.charAt(2)); //s
console.log(gameName.indexOf("t")); //not found hence -1
console.log(gameName.indexOf("r")); //found hence returns index 0

gameName = "rishav-c";
const gameNameUpdated = gameName.substring(0, 4);
console.log(gameNameUpdated); //rish 0-3 excluding 4, last index

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

//trim & replace

const newString = "    Rishav    ";
console.log(newString);
console.log(newString.trim()); //trims the word

//replace
const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace("%20", "-")); //hitesh-choudhary
console.log(url.includes("hit")); //true

//string to array
gameName = "rishav-c-h-ch";
console.log(gameName.split("-"));//[ 'rishav', 'c', 'h', 'ch' ]

