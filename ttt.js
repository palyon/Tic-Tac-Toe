var row1 = ["", "", ""];
var row2 = ["", "", ""];
var row3 = ["", "", ""];

var board = [
  row1,
  row2,
  row3
]

var isPlayerXTurn = true; // true is X, false is O

function valueAtPosition(rowIndex, columnIndex) {
  var row = board[rowIndex];
  var value = row[columnIndex];
  return value;
}

function printBoard() {
  console.log(board[0]);
  console.log(board[1]);
  console.log(board[2]);
  console.log("**********")
}

function setValueAtPosition(rowIndex, columnIndex) {
  if (isPlayerXTurn) {
    board[rowIndex][columnIndex] = "X";
  } else {
    board[rowIndex][columnIndex] = "O";
  }
  printBoard();
  isPlayerXTurn = !isPlayerXTurn;
}

function userInput() {
  var rowChoice = prompt("Enter a row:");
  var columnChoice = prompt("Enter a column:")
  if (valueAtPosition(rowChoice, columnChoice) == "") {
    setValueAtPosition(rowChoice, columnChoice);
  } else {
    alert("Invalid Choice, Dummy!");
  }
}

function hasSomeoneWon() {
  var winConditions = [
    valueAtPosition(0,0) + valueAtPosition(0,1) + valueAtPosition(0,2),
    valueAtPosition(1,0) + valueAtPosition(1,1) + valueAtPosition(1,2),
    valueAtPosition(2,0) + valueAtPosition(2,1) + valueAtPosition(2,2),

    valueAtPosition(0,0) + valueAtPosition(1,0) + valueAtPosition(2,0),
    valueAtPosition(0,1) + valueAtPosition(1,1) + valueAtPosition(2,1),
    valueAtPosition(0,2) + valueAtPosition(1,2) + valueAtPosition(2,2),

    valueAtPosition(0,0) + valueAtPosition(1,1) + valueAtPosition(2,2),
    valueAtPosition(0,2) + valueAtPosition(1,1) + valueAtPosition(2,0)
  ];

  for(var i = 0; i < 8; i++) {
    if (winConditions[i] == "XXX" || winConditions[i] == "OOO") {
      return true
    }
  }

  return false;
}

while(!hasSomeoneWon() ) {
  userInput();
}

var victor = "";
if (isPlayerXTurn) {
  victor = "O";
} else {
  victor = "X";
}

alert("Victory! Player" + victor + "has won!");
