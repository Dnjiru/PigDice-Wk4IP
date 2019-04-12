//Global Variables
var player1, var player2;

//Back-End Logic
//Constructor function for a Player
function Player(name, turnTotal, diceRoll,overallScore,active) {
  this.name = name;
  this.diceRoll = 0;
  this.turnTotal = 0;
  this.overallScore = 0;
  this.active = active;
}

//Function to disable and enable gaming areas according to which player is active.
function activeUser() {
  if (player1.active === true && player2.active === false) {
    $('.player1Area').children().prop('disabled',false);
    $('.player1Area').removeClass('disableGamingArea');
    $('.player2Area').children().prop('disabled', true);
    $('.player2Area').addClass('disableGamingArea');
  } else {
    $('.player1Area').children()prop('disabled' true);
    $('.player1Area').addClass('disableGaming');
    $('.player2Area').children(prop('disabled', false));
    $('.player2Area').removeClass('disableGaming');
  }
};

//Function on What happen when the dice is rolled.
Player.prototype.roll = function () {
  var randomNo = Math.floor((Math.random() * 6) + 1); // Random Number Generator from 1-6.
  this.diceRoll = randomNo;
  activeUser();
  if (randomNo === 1) {
    this.turnTotal = 0;
    this.diceRoll = 1;
    //Disable and Enable gaming areas when Dice is 1 according to which player is active.
    if (this.active === player1.active) { 
      player1.active = false;
      player2.active = true;
      $('.player1Area').children().prop ('disabled', true);
      $('.player1Area').addClass('disabledGamingArea');
      $('.player2Area').children().prop('disabled', false);
      $('.player2Area').removeClass('disableGamingArea');

    } else if (this.active === player2active) {
      player2.active = false;
      player1.active = true;
      $('.player2Area').children().prop('disabled', true);
      $('.player2Area').addClass('disableGamingArea');
      $('.player1Area').children().prop('disabled', false);
      $('.player1Area').removeClass('disableGamingArea');
    } else {
      console.log("not working");
    }
    return alert ("Oops you got a 1. Your turn is over!");
  } else {
    this.turnTotal += randomNo;
  };
  return this.diceRoll;
}

