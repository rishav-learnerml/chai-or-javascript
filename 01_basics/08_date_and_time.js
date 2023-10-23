//date is in miliseconds from jan 1, 1970, UTC
//DATE is a global object like MATH in js

// let myDate = new Date();
// console.log(myDate); //2023-10-23T04:57:42.640Z not much readable
// console.log(myDate.toString()); //Mon Oct 23 2023 10:28:13 GMT+0530 (India Standard Time) much readable
// console.log(myDate.toDateString()); //Mon Oct 23 2023
// console.log(myDate.toLocaleString()); //10/23/2023, 10:29:10 AM
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23);//yyyy mm dd
// let myCreatedDate = new Date(2023, 0, 23,5,3);//yyyy mm dd
// let myCreatedDate = new Date("2023-01-14");//yyyy mm dd 1/14/2023, 5:30:00 AM
// let myCreatedDate = new Date("01-14-2023"); //mm dd yyyy 1/14/2023, 12:00:00 AM

// // console.log(myCreatedDate.toLocaleString());//1/23/2023, 5:03:00 AM

// let myTimeStamp = Date.now();
// console.log(myTimeStamp); //1698037464943 ms--> current time
// console.log(myCreatedDate.getTime()); //1673634600000 --> given time
// console.log(Math.floor((myTimeStamp - myCreatedDate) / (1000*3600*24))); //6778 hours passed--> 282 days

let newdate = new Date();
console.log(newdate.getDay());
console.log(newdate.getMonth()+1);//0 based hence 1 added

console.log(newdate.toLocaleString('default',{
    weekday:"long",
    timeZone:"UTC"
}));//monday

