// Business Logic

function Player() {
  this.currentScore = 0;
  this.totalScore = 0;
  this.activeTurn = [true or false]
}

/*this function is gonna have a number of things going on - 

1, using the roll dice function and logging the value
2. if value = 1, execute change turn function? (I don't know how this is gonna happen exactly)
3. if 2 <= value <= 6, add value of dice to currentScore value
*/

/* */ 
Player.prototype.rollDice = function() {
  let roll = randomMath();
  this.currentScore += roll;
}

/*
Do we want to create a dice object?
*/

// this code includes conditions for turn changing as well, that's why it looks different than theirs.  I dunno if that's
// the best way to do things.
function randomMath() {
  let roll = Math.floor(Math.random() * 6) + 1;
  return roll;
  if (roll = 1) {
    function changeTurn
  }
}



/*we can rewrite the below function as an object specific method */

function changeTurn() {
  if (player1.activeTurn === true) {
    player1.activeTurn === false
  }
  if (player1.activeTurn === false) {
    player1.activeTurn === true
  }
  if (player2.activeTurn === true) {
    player2.activeTurn === false
  }
  if (player2.activeTurn === false) {
    player2.activeTurn === true
  }
}


/*
roll button, returns value between 1 and 6
conditional logic checks the value and updates the html img element to <img src="img/dice-[number].png">
*/


// User Interface Logic
function handleFormSubmission(event) {
  event.preventDefault();
}

// The code from Carl's session code-along

function Game() {
  this.activePlayer = 1;
  this.gameActive = true;
  this.players = [player1 , player2]

}

function randomMath() {
  return Math.floor((Math.random() * 6) + 1);
}

function Player() {
  this.totalScore = 0;
  this.currentScore = 0;
}

Player.prototype.rollDice = function() {
  let roll = randomMath();

  if (roll === 1) {
    this.currentScore = 0;
  } else {
    this.currentScore += roll;
  }

}

Player.prototype.endTurn = function() {
  this.totalScore += this.currentScore;
  this.currentScore = 0;
}

Player.prototype.newGame = function() {
  this.totalScore = 0;
  this.currentScore = 0;
}


// 
//so, do we wanna deal with the turns implicitly?

Player.prototype.changeTurn = function() {
  set (player object named active turn to false or true)
}

// it's 

//so create a boolean if player 1 holds then player 2 will be true


