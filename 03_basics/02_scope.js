function one(){
    const uname = 'rishav';
    function two() {
        const website = "youtube"
        console.log(uname)
    }
    // console.log(website)//ReferenceError: website is not defined
    two()//not executed as js executes line by line
}
//each function has a separate call stack
one()

//+++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++++++++

addone(5)//runs even before declaration due to hoisting of function
function addone(num){
    return num+1;
}//function declaration

addTwo(5)// does not run, as it is a function expression, stored in a variable, and you can't access a variable before declaration
const addTwo = function(num){
    return num+2;
} //funtion expression
