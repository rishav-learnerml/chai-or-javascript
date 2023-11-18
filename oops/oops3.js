//call and this in js

function setUserName(userName){
    //complex db calls
    this.userName=userName
}

function createUser(userName, email, passsword){
    // setUserName(userName)//only reference is passed, not called
    setUserName.call(this,userName)//called but value not set, passes our current execution context to some other function

    this.email=email;
    this.passsword=passsword
}

const chai = new createUser("chai","chai@fb.com",'123');
console.log(chai)