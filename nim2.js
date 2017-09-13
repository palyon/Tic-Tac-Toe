// DEFINE THE STATE
// - number of dots
// - who's turn it is
// - how many players
// - how many dots you can pick up
var numberOfDots = 16;
var isPlayerOnesTurn = true;

// WRITE YOUR ACTIONS (Functions)
// - print the gamestate (dots)
// - remove dots
// - change who's turn it is
// - check for a winner
function printBoard() {
  var star = "*";
  var numDotsToPrint = Math.max(numberOfDots, 0);
  console.log(star.repeat(numDotsToPrint));
}

function gameIsInProgress() {
  if (numberOfDots > 0) {
    return true;
  } else {
    return false;
  }
}

function promptUserForDots() {
  var userInput = parseInt(prompt("How many dots do you want to take away, 1, 2, or 3?"));
  while (userInput != 1 && userInput != 2 && userInput != 3 ) {
  userInput = parseInt(prompt("How many dots do you want to take away, 1, 2, or 3?"));
  }
  return userInput
}

function removeDots(dotsToRemove) {
  numberOfDots -= dotsToRemove;
}

function switchPlayers() {
  isPlayerOnesTurn = !isPlayerOnesTurn;
}
// KICKING EVERYTHING OFF
// X Show the board right away
// X Prompt the user for how many dots to they want to remove
// X Actually remove the dots
// X Print the new result
// X Switch players turns
// - Check for a winner
// - Keep looping ^^^ until someone wins

printBoard();

while ( gameIsInProgress() ) {
  var dotsToRemove = promptUserForDots();
  removeDots(dotsToRemove);
  printBoard();
  switchPlayers();
}

if (isPlayerOnesTurn) {
  alert("Game Over! Player Two Wins!")
} else {
  alert("Game Over! Player One Wins!")
}
