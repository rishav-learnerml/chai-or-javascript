let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const error = document.querySelector(".error");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    error.textContent = "Please Enter a Valid Number!";
  } else if (guess < 1) {
    error.textContent = "Please Enter a Number Greater Than 1";
  } else if (guess > 100) {
    error.textContent = "Please Enter a Number Smaller Than 100";
  } else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over. The Number was ${randomNumber} :(`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Guessed it Right!!!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is too Low!!!");
  } else {
    displayMessage("Number is too High!!!");
  }
}

function displayGuess(guess) {
  userInput.value = ""; //clean user input
  guessSlot.innerHTML += `${guess} ,`;
  numGuess++;
  remaining.innerHTML = 10 - numGuess;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = 10 - numGuess;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  submit.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
