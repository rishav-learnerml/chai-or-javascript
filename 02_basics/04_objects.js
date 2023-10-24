//singleton --> made from constructors

const tinderUser = new Object(); //singleton
// const tinderUser = {}; //non-singleton/literal

tinderUser.id = "123abc";
tinderUser.name = "sam";
tinderUser.isLoggedIn = false;

const regularUser = {
  email: "rish@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Rishav",
      lastName: "Chatterjee",
    },
  },
};

console.log(regularUser.fullName);
console.log(regularUser.fullName?.userFullName?.firstName); //access only if exists ?.

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "a",
  4: "b",
};

// const obj3 = {obj1,obj2}; //object of objects { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj4 = {...obj1,...obj2}; //key objects  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3,obj4)

// const obj3 = Object.assign(obj1,obj2);
// const obj3 = Object.assign({},obj1,obj2); //guranteed to assign individual values {}is treated as target and others as obects to store from

// console.log(obj3)

const users = [
  {
    id: 1,
    email: "r@g.com",
  },
  {
    id: 2,
    email: "s@g.com",
  },
  {
    id: 3,
    email: "t@g.com",
  },
];

console.log(users[1].email);
//very powerful feature
console.log(Object.keys(tinderUser)); //gives all keys of objects in an array
console.log(Object.values(tinderUser)); //gives all values of object-keys in an array
console.log(Object.entries(tinderUser)); //converts all key value pairs into array of arrays

console.log(tinderUser.hasOwnProperty("isLoggedIn")); //true or false based on if exists

const course = {
  courseHame: "Chai or Javascript",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor
//object destructuring
const { courseInstructor } = course; //destructuring of objects
const { courseInstructor: instructor } = course; //destructuring of objects with alias
console.log(courseInstructor);
console.log(instructor);

//in react js--> const navbar = ({company})=>{} navbar(company="hitesh")

//JSON -> javascript object notation --> both key-value has to be in string
// {
//     "name":"rishav",
//     "courseName": "Chai or Javascript",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]

