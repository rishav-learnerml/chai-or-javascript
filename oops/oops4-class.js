//classes in js --> after es6
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `password : ${this.password}abc`;
  }

  changeUserName() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@gmail.com", "123");
const chaiFun = new UserFun("chai2", "chai2@gmail.com", "12");
console.log(chai.encryptPassword());
console.log(chaiFun.encryptPassword());

//behind the scene
function UserFun(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

UserFun.prototype.encryptPassword = function () {
  return `password : ${this.password}abc`;
};
