//clousure gives inner function the access of outer function's execution context
// function init() {
//   let name = "Rishav";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myfun = init();//gives scope/exe context of outer+inner function-->whole elxical scope
// myfun();
//if we return the inner funtion, we will get the access of everything

// document.getElementById("orange").onclick = function () {
//   document.body.style.background = "orange";
// };

// document.getElementById("green").onclick = function () {
//   document.body.style.background = "green";
// };

//but what we have 500 buttons with colors
function clickHandler(color) {
  //   document.body.style.background =color;

  return function () {
    document.body.style.background = color;
  };
}

document.getElementById("orange").onclick = clickHandler("orange");
document.getElementById("green").onclick = clickHandler("green");
