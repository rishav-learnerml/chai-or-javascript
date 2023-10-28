// start db connection whenever application starts 

// function chai(){
//     console.log('db connected')
// }
// chai()
//here it is not invoked immediately , there can be some global pollutions
(function chai(){
    console.log('db connected')
})();//semicolon is important here to end first code here, else gives error
// (defination)(execution) named iife

//iife is used to avoid pollution created from global scope

(()=>console.log('first'))();

((name)=>console.log('first'+name))('rishav'); //unnamed iife

//semicolon is vvi for iife if more than one
