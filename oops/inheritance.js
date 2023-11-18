class User {
  constructor(userName) {
    this.userName = userName;
  }

  logMe() {
    console.log(`USERNAME : ${this.userName}`);
  }
}

class Teacher extends User {
  constructor(userName, email, password) {
    super(userName); //calls the parent class constructor
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.userName}`);
  }
}

const chai = new Teacher('chai','chai@teacher.com','123')
chai.addCourse()
chai.logMe()

const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai===masalaChai)//false
console.log(chai instanceof Teacher)
console.log(masalaChai instanceof User)
