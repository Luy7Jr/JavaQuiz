var timeEl = document.querySelector("p.time");
var secondsLeft = 60;
var scoreEl = document.querySelector("#score");


var introEl = document.querySelector("#intro");

var questionsEl = document.querySelector("#questions");

var questionEl = document.querySelector("#question");

var questionCount = 0;

var corWrongEl = document.querySelector("#corWrong");

var finalEl = document.querySelector("#final");

var initialsInput = document.querySelector("#initials");

var highscoresEl = document.querySelector("#highscores");

var scoreListEl = document.querySelector("#score-list");

var scoreList = [];


var startBtn = document.querySelector("#start");

var ansBtn = document.querySelectorAll("button.ansBtn")

var ans1Btn = document.querySelector("#answer1");

var ans2Btn = document.querySelector("#answer2");

var ans3Btn = document.querySelector("#answer3");

var ans4Btn = document.querySelector("#answer4");

var submitScrBtn = document.querySelector("#submit-score");

var goBackBtn = document.querySelector("#goback");

var clearScrBtn = document.querySelector("#clearscores");

var viewScrBtn = document.querySelector("#view-scores");


var questions = [ 
    {
        question: "What is this primitive data type: TRUE OR FALSE?",
        answers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
        correctAnswer: "1"
    },
    {
        question: "Primitive data type that is within quotes is a?",
        answers: ["1. Boolean", "2. String", "3. Number", "4. Variable"],
        correctAnswer: "1"
    },
    {
        question: "Arithmetic operators combine with ______ to form an expression that returns a single number",
        answers: ["1. strings", "2. arrays", "3. numbers", "4. variables"],
        correctAnswer: "2"
    },
    {
        question: "What compares equality and type?",
        answers: ["1. ===", "2. ==", "3. Strings", "4. <="],
        correctAnswer: "0"
    },
    {
        question: "Else if allows you to test more than one ________.",
        answers: ["1. first", "2. loop", "3. terminal", "4. condition"],
        correctAnswer: "3"
    },
    {
        question: "What is Javascript for?",
        answers: ["1. Calculating", "2. Programming Language", "3. Photo Editor", "4. Terminal"],
        correctAnswer: "1"
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
        ans1Btn.textContent = questions[id].answers[0];
        ans2Btn.textContent = questions[id].answers[1];
        ans3Btn.textContent = questions[id].answers[2];
        ans4Btn.textContent = questions[id].answers[3];
    };
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
        p.textContent = "Correct!";
    } else if (questions[questionCount].correctAnswer !== event.target.value) {
        secondsLeft = secondsLeft - 10;
        p.textContent = "Wrong!";
    }

    if (questionCount < questions.length) {
        questionCount++;
    }
   
    setQuestion(questionCount);
}

function addScore(event) {
    event.preventDefault();

    finalEl.style.display = "none";
    highscoresEl.style.display = "block";

    var init = initialsInput.value.toUpperCase();
    scoreList.push({ initials: init, score: secondsLeft });

   
    scoreList = scoreList.sort((a, b) => {
        if (a.score < b.score) {
          return 1;
        } else {
          return -1;
        }
      });
    
    scoreListEl.innerHTML="";
    for (var i = 0; i < scoreList.length; i++) {
        var li = document.createElement("li");
        li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
        scoreListEl.append(li);
    }

    
    storeScores();
    displayScores();
}

function storeScores() {
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
}

function displayScores() {
    
    var storedScoreList = JSON.parse(localStorage.getItem("scoreList"));

    if (storedScoreList !== null) {
        scoreList = storedScoreList;
    }
}


function clearScores() {
    localStorage.clear();
    scoreListEl.innerHTML="";
}


startBtn.addEventListener("click", startQuiz);


ansBtn.forEach(item => {
    item.addEventListener('click', checkAnswer);
});


submitScrBtn.addEventListener("click", addScore);


goBackBtn.addEventListener("click", function () {
    highscoresEl.style.display = "none";
    introEl.style.display = "block";
    secondsLeft = 60;
    timeEl.textContent = `Time:${secondsLeft}s`;
});

clearScrBtn.addEventListener("click", clearScores);

viewScrBtn.addEventListener("click", function () {
    if (highscoresEl.style.display === "none") {
        highscoresEl.style.display = "block";
    } else if (highscoresEl.style.display === "block") {
        highscoresEl.style.display = "none";
    } else {
        return alert("No scores to show.");
    }
});