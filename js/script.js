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
}