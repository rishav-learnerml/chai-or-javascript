const user = {
    username:"Rishav",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)//this refers to current context, here the user object
        console.log(this)//current context
    }
}

// user.welcomeMessage;//runs but not printed
// user.welcomeMessage();//runs and printed
// user.username="sam";
// user.welcomeMessage();

console.log(this) //empty object {} as no context in node js-->it's a runtime but in browser the context is the window object

// function chai(){
//     let username='sam'
//     console.log(this)
//     console.log(this.username)//undefined as it is not available within functions, be it expression or declarations
// }

// chai() //gives a lot of values in an object

//arrow functions

const chai = ()=>{
    let username='sam';
    console.log(this.username) //undefined but this does not gies any filled objects but gives {} empty object
}

chai()

//const addTwo = (num1,num2)=>num1+num2; //implicit return
//const addTwo = (num1,num2)=>(num1+num2); //implicit return

//you have to write return keyword while using {}
//you don't have to write return keyword while using () or no brackets

// const addTwo=(num1,num2)=>{name:"hitesh"} //undefined, as no object can be returned like that, you have to use braces\
const addTwo=(num1,num2)=>{
    return {
        name:'rishav'
    }
}

console.log(addTwo())

const myarr=[1,2,4,5,6,7];

myarr.forEach((ele)=>ele*2);

console.log(myarr)