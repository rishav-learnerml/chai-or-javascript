class User {
  constructor(userName) {
    this.userName = userName;
  }
  logMe() {
    console.log(`Username: ${this.userName}`);
  }

  static createId() {
    return `123`;
  }//id access is not given to any object/ its child
}

const rishav = new User("Rishav");
// console.log(rishav.createId());

class Teacher extends User{
    constructor(userName,email) {
        super(userName);
        this.email=email;
    }
    
}

const iphone = new Teacher('iphone','i@phone.com')
console.log(iphone)
