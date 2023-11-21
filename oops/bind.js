const descriptor = Object.getOwnPropertyDescriptor(Math,"PI");
console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);

const myNewObj = Object.create(null)

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true
}
