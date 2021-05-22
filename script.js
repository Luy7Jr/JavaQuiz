





var interval = setInterval(function(){
  document.getElementById('timer').innerHTML=count;
  count--;
  if (timer === 0){
    clearInterval(interval);
    document.getElementById('timer').innerHTML='Done';
    alert("You're out of time!");
  }
}, 1000);

var questions = [
    ["Javascripts file ends in?", ".js"],
    ["What is a Javascript element?", "Array."],
    ["What is a string?", "element within parenthesis."],
    ["What is a boolean?", "True or False."],
    ["What is a loop used for?", "Used to perform a action multiple times."]
  ];
  
  var cA = [];
  var incorrect = [];
  
  function askQuestion(question, index) {
    var answer = prompt(question[0], '');
    if (answer == question[1]) {
      alert('Correct!');
      score++;
      cA = question;
    } else {
      incorrect.push(index);
      alert('Sorry. The correct answer is ' + question[1]);
    }
  }
  
  for (var i = 0; i < questions.length; i++) {
    askQuestion(questions[i], i);
  }
  
  var message = 'You got ' + score;
  message += ' out of ' + questions.length;
  message += ' questions correct.<br>' + cA;
  
  message += '<br><br>You answered ' + incorrect.length;
  message += ' questions incorrect. These are as follows:';
  
  for(var i in incorrect){
    message += '<p>Q ' + (incorrect[i] + 1) + '. ' + questions[incorrect[i]][0] + '<br>' + questions[incorrect[i]][1] + ' </p>';
  }
  
  document.write('<p>' + message + '</p>');


  startButton.addEventListener("click", startGame);
  


