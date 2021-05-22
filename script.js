var highscore = document.querySelector(".Hscore");
var timeEl = document.querySelector(".timer");
var startBtn = document.querySelector(".start-button");
var answer = document.querySelector(".answer");
var question = document.querySelector(".question");
var submitBtn = document.querySelector(".submit");
var score = document.querySelector(".score");

var timer = 60;
var chosenAns = "";
var highscoreCounter;

function init(); {
    getHighscore();
}

var interval = setInterval(function(){
  document.getElementById('timer').innerHTML=count;
  count--;
  if (timer === 0){
    clearInterval(interval);
    document.getElementById('timer').innerHTML='Done';
    alert("You're out of time!");
  }
}, 1000);




