//the promise object represents the eventual completion or failure of a synchronous operation and its resulting value
//promise is one of these three states
//pending
//fulfilled
//rejected

// fetch('https://something.com').then().catch().finally()

const promise1 = new Promise(function (resolve, reject) {
  //do any async task
  //db calls, cryptography tasks, network calls
  setTimeout(() => {
    console.log("async task is completed!");
    resolve(); //connected to .then()
  }, 1000);
}); //new instance of promise
//.then()-->connected with resolve and .catch() connected with .catch()
promise1.then(() => {
  console.log("promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task2");
    resolve();
  }, 1000);
})
  .then(() => console.log("async 2 resolved"))
  .catch(() => console.log("async task2 failed"));

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      userName: "Josh",
      email: "Josh@bs.com",
    }); //forwarded to .then()
  }, 1000);
});

promise3.then((user) => {
  //forwarded from resolve
  console.log(user);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({
        userName: "Josh",
        email: "Josh@bs.com",
        password: "123",
      });
    } else {
      reject("ERROR: Something Went Wrong!!");
    }
  }, 2000);
});

promise4
  .then((user) => {
    console.log(user);
    return user.userName; //forwarded to next then
  })
  .then((userName) => {
    //returned value can be accessed here
    console.log(userName);
  })
  .catch((err) => console.log(err))
  .finally(() => console.log("process finished!")); //always executed at the end

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({
        userName: "JS",
        password: "123",
      });
    } else {
      reject("ERROR: JS Went Wrong!!");
    }
  }, 1000);
});

async function consumePromise5() {
  try {
    const response = await promise5;
    //async await does not handles error directly

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromise5();
//whatever takes time, await that
// async function getAllUsers() {
//   try {
//     //api provided by js
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();//conversion also takes time
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((userdata) => {
    console.log(userdata);
  })
  .catch((err) => console.log(err));

  //more details on fetch => available on node js
  //fetch is executed on priority as it has it's separate priority queue (Micro task queue)