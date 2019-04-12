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
};

//When Player Holds the Game Function.
Player.prototype.hold = function () {
  activeUser();
  this.overallScore += this.turnTotal;
  if (this.overallScore >= 100) {
    alert("Game Over! You Win!!!");
    resetFields();
    alert('To play with a new partner click New Game.')
  } else {
    return false;
  }
  console.log('the turn total is: ' + this.turnTotal);
  return this.overallScore;
};

//Function to reset the form input fields, re-enable the buttons and Scores.
function resetFields() {
  $("input#player1Name").val("");
  $("input#player2Name").val("");
  $('.player1Area').children().prop('disabled',false);
  $('.player2Area').children().prop('disabled',false);
  $('.player1Area').removeClass('disableGamingArea');
  $('.player2Area').removeClass('disableGamingArea');
  var thePlayers = [player1, player2];
  thePlayers.forEach(function (player) {
    player.diceRoll = 0;
    player.turnTotal = 0;
    player.overallScore = 0;
  })
  var outputs = [$('.diceRoll1'), $('.turnScore'), $('.overallScore'), $('.diceRoll2'), $('.turnScore2'), $('overallScore2')];
  outputs.forEach(function (output) {
    output.text(0);
  })
};

//Front End Logic
$(document).ready(function () {
  //Makes the 'Rules' title clickeable and the rules themselves hideable.
  $("#rulesHeader").click(function () {
    $("#rulesDescription").toggle();
  });

  //When Player Enters Name Function
  $("#playersNames").submit(function (event) {
    event.preventDefault();
    $("#rulesDescription").hide();
    $("form").hide();
    $(".newGame").show();
    $(".newGame").click(function () {
      $("form").show();
      $('#gamingArea').hide;
      $(".newGame").hide();
      resetFields();
    });
    $('#gamingArea').show();
    //Store the Player Names in the Variables
    var gamer1 = $("#player1Name").var();
    var gamer1 = $("#player1Name").var();
    //Put the names into an object using the constructor Players.
    player1 = new Player(gamer1);
    player2 = new Player(gamer2);
    //Output the names into each appropriate section
    $(".player2NameOutput").text(player2.name);
    $(".player1NameOutput").text(player1.name);
    resetFields(); //Clear the form input fields
  });
  //Display dice roll number and turn total when the roll button is clicked
  $('.roll1').click(function (event) { //roll button for player1
    event.preventDefault();
    //Activate Gaming Area
    player1.active = true;
    player2.active = false;
    player1.roll(); //call the function to generate random numbers
    $('.diceRoll1').text(player1.diceRoll); //display the rolled dice number
    $('.turnScore1').text(player1.turnTotal); //display the turn score (temporary score)
});

})


