var timeEl = document.querySelector(".time");
var secondsLeft = 60;
var scoreEl = document.querySelector("#score");

var introEl = document.querySelector("#intro");

var questionEl = document.querySelector("#questions");

var questionEl = document.querySelector("#question");

var questionCount = 0;

var corWrongEl = document.querySelector("#corWrong");

var finalEl = document.querySelector("#final");

var initialsInput = document.querySelector("#initials");

var highscoreEl = document.querySelector("#highscores");

var scoreListEl = document.querySelector("#scorelist");

var scoreList = [];

var startButton = document.querySelector("#start");

var answerBtn = document.querySelector("button.answerBtn");

var answerBtn1 = document.querySelector("#ans1");

var answerBtn2 = document.querySelector("#ans2");

var answerBtn3 = document.querySelector("#ans3");

var answerBtn4 = document.querySelector("#ans4");

var answerBtn5 = document.querySelector("#ans5");

var submitScore = document.querySelector("#submitScore");

var restartBtn = document.querySelector("#restart");

var clearScore = document.querySelector("#clear");

var viewScore = document.querySelector("#viewScore");

var questions = [
    {
        question: "Arrays in a Javascript can be used to store?",
        answers: ["A) Arrays", "B) Loops", "C) Functions", "D) A list"],
        correctAnswer: "D"
    },

    {
        question: "What is a string?",
        answers: ["A) An element between quotes", "B) A number", "C) True or False", "D) Loop"],
        correctAnswer: "A"
    },

    {
        question: "What is a boolean?",
        answers: ["A) An element between quotes", "B) A number", "C) True or False", "D) Loop"],
        correctAnswer: "C"
    },

    {
        question: "What is a loop used for?",
        answers: ["A) Store data", "B) Used to perform the same action multiple times", "C) To store a number", "D) Store a Booleans"],
        correctAnswer: "B"
    },

    {
        question: "What is Javascript?",
        answers: ["A) Programming language", "B) Word editor", "C) Photo editor", "D) Calculator"],
        correctAnswer: "A"

    }

];

function setTime() {
    var timerInterval = setInterval(function () {
     secondsLeft--;
     timeEl.textContent = `Time:${secondsLeft}s`;
     
     if (secondsLeft === 0 || questionCount === questions.length) {
         clearInterval(timerInterval);
         questionsEl.style.display = "none";
         finalEl.style.display = "block";
         scoreEl.textContent = secondsLeft;
     }
    }, 1000);
}

function startQuiz() {
    introEl.style.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;

    setTime();
    setQuestion(questionCount);
}

function setQuestion(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].question;
        answerBtn1.textContent = questions[id].answers[0];
        answerBtn2.textContent = questions[id].answers[1];
        answerBtn3.textContent = questions[id].answers[2];
        answerBtn4.textContent = questions[id].answers[3];
        answerBtn5.textContent = questions[id].answers[5];
    }
}

function checkAnswer(event) {
    event.preventDefault();

    corWrongEl.style.display = "block";
    var p = document.createElement("p");
    corWrongEl.appendChild(p);

    setTimeout(function () {
        p.style.display = 'none';
    }, 1000);

    if (questions[questionCount].correctAnswer === event.target.value) {
        p.textContent ="Correct";
    } else if (questions[questionCount].correctAnswer !== event.target.value) {
        seconsLeft = secondsLeft - 10;
        p.textContent = "Wrong";
    }

    if (questionCount < questions.length) {
        question++;
    }
    setQuestion(questionCount);
}

function addScore(event) {
    event.preventDefault();
    finalEl.style.dispplay = "none";
    highscoreEl.style.display = "block";

    var init = initialsInput.value.toUpperCase();
    scoreList.push({initials: init, score: secondsLeft });

    scoreList = scoreList.sort((a, b) => {
        if (a.score < b.score) {
            return 1;
        }   else {
            return -1;
        }
    });

    scoreListEl.innerHTML="";
    for (let i = 0; i < scoreList.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
        scoreListEl.append(li);
    }

    storeScores();
    displayScores();
}

function displayScores() {
    var storedScoreList = JSON.parse(localStorage.getItem("scoreList"));

    if (storedScoreList !== null) {
       scoreList = storedScoreList;
    }
}















]




