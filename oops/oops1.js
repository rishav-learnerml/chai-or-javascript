//Javascript and classes
//Javascript has classes but object orientation is not a must in js
/*
    added es6 onwards
    javascript is primarily a prototype based language, classes are basically syntactic sugar
    behind the scenes prototype based code runs
*/
//object -> collection of properties and methods

//parts of oops
// Object Literal

/*
- Constructor Function
-prototypes
-classes
-instances (new, this)
*/

//object literal
// const user = {
//   userName: "Rishav",
//   loginCount: 8,
//   signedIn: true,
//   getUserDetails: function () {
//     console.log("Got User Details From DB");
//     console.log(this)//context of current object
//     // return 1;
//   },
// };
// console.log(this)//global context
// console.log(user.userName);
// console.log(user.getUserDetails());

// constructor function

// const promise1 = new Promise();
// const date = new Date();

function User(userName, loginCount, isLoggedIn) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this; //object copied to this, context is returned
}

// const user1 = User("Hitesh", 12, true);
// const user2 = User("Chai Or Code", 10, false); //overrides the values as, it is changed at the reference (memory)
// console.log(user1);

const user1 = new User("Hitesh", 12, true);
const user2 = new User("Chai Or Code", 10, false);
console.log(user1.constructor)
console.log(user2)

//new keyword creates a new object {}, in step2 a constructor function is called, in step 3 they're added to context and returned in step 4

