//2 types of memories
//stack memory and heap memory

//primitives use stack memory while non primitives use heap memory

//stack uses copy, heap uses reference

let myYoutubename = "rishavchatterjeedotcom";
let anotherName = myYoutubename;
console.log(anotherName);

anotherName = "labanighoshdotcom";

console.log(myYoutubename);
console.log(anotherName);//copy is given hence both are different in stack

let userOne = {
  email: "user@email.com",
  upi: "user@ybl",
}; //stored in heap and you get the reference --> original memory --> any change will reflect

let userTwo = userOne;
userTwo.email = "nonuser@email.com";
console.log(userOne); //email changed in both
console.log(userTwo); //email changed in both
