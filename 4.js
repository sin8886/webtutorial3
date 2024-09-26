let randomNumber = randomInt();
let guesses = [];
let maxTurns = 10;
let turnCount = 0;

const guessSubmit = document.getElementById("guessSubmit");
const guessField = document.getElementById("guessField");
const resultDiv = document.getElementById("result");
const prevGuessesDiv = document.getElementById("prevGuesses");
const restartButton = document.getElementById("restartGame");

guessSubmit.addEventListener("click", checkGuess);
restartButton.addEventListener("click", restartGame);

function checkGuess() {
  let userGuess = Number(guessField.value);
  turnCount++;
  guesses.push(userGuess);

  if (userGuess === randomNumber) {
    resultDiv.textContent = `Congratulations! You guessed the correct number: ${randomNumber}`;
    endGame();
  } else if (turnCount === maxTurns) {
    resultDiv.textContent = `Game Over! You've used all your turns. The correct number was ${randomNumber}`;
    endGame();
  } else {
    if (userGuess < randomNumber) {
      resultDiv.textContent = "Too low!";
    } else {
      resultDiv.textContent = "Too high!";
    }
    prevGuessesDiv.textContent = `Previous guesses: ${guesses.join(", ")}`;
  }

  guessField.value = "";
  guessField.focus();
}

function endGame() {
  guessSubmit.disabled = true;
  guessField.disabled = true;
  restartButton.style.display = "block";
}

function restartGame() {
  turnCount = 0;
  guesses = [];
  randomNumber = randomInt();
  resultDiv.textContent = "";
  prevGuessesDiv.textContent = "";
  guessSubmit.disabled = false;
  guessField.disabled = false;
  guessField.value = "";
  restartButton.style.display = "none";
}
