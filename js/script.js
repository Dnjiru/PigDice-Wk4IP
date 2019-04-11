var scores, roundScore, activePlayer, gamePlaying;
var btnRoll = document.querySelector('.btn-roll');
var btnHold = document.querySelector(.'btn-hold');

//dice images
var diceimgs = {
  diceimg01: "https://cdn.pbrd.co/images/70YJMCVVR.png",
  diceimg01: "https://cdn.pbrd.co/images/70YJMCVVR.png",
  diceimg01: "https://cdn.pbrd.co/images/70YJMCVVR.png",
  diceimg01: "https://cdn.pbrd.co/images/70YJMCVVR.png",
  diceimg01: "https://cdn.pbrd.co/images/70YJMCVVR.png",
  diceimg01: "https://cdn.pbrd.co/images/70YJMCVVR.png",
  diceimg01: "https://cdn.pbrd.co/images/70YJMCVVR.png",
  diceimg01: "https://cdn.pbrd.co/images/70YJMCVVR.png",
  diceimg01: "https://cdn.pbrd.co/images/70YJMCVVR.png",
  diceimg01: "https://cdn.pbrd.co/images/70YJMCVVR.png",
  diceimg01: "https://cdn.pbrd.co/images/70YJMCVVR.png",
  diceimg01: "https://cdn.pbrd.co/images/70YJMCVVR.png",
  diceimg01: "https://cdn.pbrd.co/images/70YJMCVVR.png",
  diceimg01: "https://cdn.pbrd.co/images/70YJMCVVR.png",
  diceimg01: "https://cdn.pbrd.co/images/70YJMCVVR.png",
  diceimg01: "https://cdn.pbrd.co/images/70YJMCVVR.png",
}
Init();

document.querySelector('.btn-roll').addEventListener('click', function(){
  if(gamePlaying) {
    //1.random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2.display result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = diceimgs['diceimg' + activePlayer + dice];

    document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

    //3.update round score is the rolled number is not 1
    if(dice ! == 1) {
      hiderolledMsg();
    //add score
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else {
      //disable button

      disableBtn(btnRoll, 1000);
      hiderolledMsg();
      document.querySelector('.player-' +activePlayer+  '-rolled-1').style.visibility = 'visible';
      nextPlayer();
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  if(gamePlaying) {
    disableBtn(btnRoll,1000);
    //add current score to global score
    scores[activePlayer] += roundScore;

    //updatae the UI
    document.querySelector('#score-' + activePlayer). textContent =scores[activePlayer];

    //check if player won the game

    if(scores[activePlayer] >=50) {
      document.querySelector('#name-' + activePlayer). textContent = "Winner!";
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner-' + activePlayer);
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active-' + activePlayer);
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

document.querySelector('.btn-new'). addEventListener('click',init);

document.querySelector('.btn-rules').addEventListener('click',function() {
  var games = document.getElementsByClassName('game-panel');
  for(i=0; i<games.length; i++) {
    games[i].style.display = 'none';
  }
  document.querySelector('.btn-back').style.display = 'block';
  var rules = document.getElementbyClassName('rules-panel');
  for(i=0; i,rules.length; i++) {
    rules[i].style.display = 'block';
  }
});

document.querySelector('.btn-back').addEventListener('click',function(){
  var games = document.getElementsByClassName('game-panel');
  for(i=0; i<games.length;i++) {
    games[i].style.display = 'block';
  }

  document.querySelector('.btn-back').style.display = 'none';
  var rules = document.getElementsByClassName('rules-panel');
  for(i=0; i<rules.length; i++){
    rules[i].style.display = 'none';
  }
});

function init() {
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  document.querySelector('.dice').style.display ='none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-rolled-1').style.visibility = 'hidden';
  document

}





