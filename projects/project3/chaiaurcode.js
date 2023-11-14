const clock = document.querySelector("#clock");

setInterval(() => {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.textContent=date.toLocaleTimeString()
}, 1000);
