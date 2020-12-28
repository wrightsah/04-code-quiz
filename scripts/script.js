// define elements

var choicesElement = document.getElementById("choices");
var feedbackElement = document.getElementById("feedback");
var endScreenElement = document.getElementById("end-screen");
var finalScoreElement = document.getElementById("final-score");

// define start button
var startButton = document.getElementById("start-button");
// define submit button
var submitButton = document.getElementById("submit");

// define questions

// create an array of object for the questions and the answers

var myQuestions = [
  {
    questionSource:
      "Inside which HTML element would JavaScript be able to run?",
    choices: ["<javascript>", "<js>", "<script>", "<java>"],
    answer: "<script>",
  },
  {
    questionSource: "One equals sign (=) indicates which of the following?",
    choices: [
      "values are equal",
      "values are the same type and equal",
      "storing the value of a variable",
      "a value is true",
    ],
    answer: "storing the value of a variable",
  },
  {
    questionSource: 'How would you make "Hello World!" pop up on the screen?',
    choices: [
      'alert var = "Hello World!"',
      'alert("Hello World!");',
      'popup("Hello World!");',
      'window."Hello World!";',
    ],
    answer: 'alert("Hello World!");',
  },
  {
    questionSource: "Which of the following is a function declaration?",
    choices: [
      "function.script",
      "var function = myFunction",
      "func myFunction",
      "function myFunction()",
    ],
    answer: "function myFunction()",
  },
  {
    questionSource:
      "How would you access the first element of an array named cars?",
    choices: ["cars(1)", "cars[1]", "cars(0)", "cars[0]"],
    answer: "cars[0]",
  },
];

//Global Variables
// Starting Time
var time = 75;
// Final Score
var finalScore = time;
// Value of starting question
var questionNumber = 0;
// Empty high scores array
var highScoresArray = [];



function startQuiz() {
  console.log("Start button pressed.");

  // hide start screen

  var landingSection = document.getElementById("landing");
  landingSection.classList.add("hide");

  // un-hide questions section

  var quizSection = document.getElementById("quiz");
  quizSection.classList.remove("hide");

  // start timer

  // show starting time

  var timer = document.getElementById("timer");

  displayQuestions();
}

function countDown() {
  // runs every second
  var timerInterval = setInterval(function () {
    time--;
    // console.log(time);
    timer.textContent = time;

    if (time <= 0) {
      clearInterval(timerInterval);
      time = 0;
      stopQuiz();
    }
  }, 1000);
}

// create function to get question data from array

function displayQuestions() {
  var currentQuestion = myQuestions[questionNumber];
  console.log(currentQuestion);

  // update quiz with current question

  var displayQuestion = document.getElementById("question");
  displayQuestion.textContent = currentQuestion.questionSource;

  // clear out any old question choices

  choicesElement.innerHTML = "";

  // loop over choices
  currentQuestion.choices.forEach(function (choice, i) {
    // create new button for each choice
    var choiceButton = document.createElement("button");
    choiceButton.setAttribute("class", "choice");
    choiceButton.setAttribute("class", "btn btn-primary choice-button");
    choiceButton.setAttribute("value", choice);
    choiceButton.textContent = i + 1 + ". " + choice;
    // attach click event listener to each choice

    choiceButton.onclick = questionClick;

    // display on the page
    choicesElement.appendChild(choiceButton);
  });
}

// click to move on to the next question

// first create function

function questionClick() {
  console.log("An answer was clicked");
  console.log("this.value =" + this.value);
  // check if answer is wrong
  if (this.value !== myQuestions[questionNumber].answer) {
    time -= 10;
    // make sure time is working
    console.log("Time left = " + time);

    //if time is less than 0, then set it to 0
    if (time < 0) {
      time = 0;

      // // set timer to zero and stop it - this may need to move somewhere else
      // timer.textContent = 0;
      // clearInterval(timer);
    }

    // display wrong

    feedbackElement.textContent = "Wrong!";
    feedbackElement.style.color = "red";
    feedbackElement.style.textAlign = "center";
    feedbackElement.style.fontSize = "100px";
  } else {
    // display correct

    feedbackElement.textContent = "Correct!";
    feedbackElement.style.color = "green";
    feedbackElement.style.textAlign = "center";
    feedbackElement.style.fontSize = "100px";
  }

  // timeout wrong and correct

  feedbackElement.setAttribute("class", "feedback");
  setTimeout(function () {
    feedbackElement.setAttribute("class", "feedback hide");
  }, 1000);

  // move to next question

  questionNumber++;

  // check for end of questions

  if (questionNumber === myQuestions.length) {
    stopQuiz();
  } else {
    displayQuestions();
  }
}

// stop the quiz

function stopQuiz() {
  // stop timer
  // or... just hide it instead :(

  timer.classList.add("hide");

  // show end screen

  endScreenElement.removeAttribute("class", "hide");

  // hide quiz questions

  quiz.setAttribute("class", "hide");

  // final score

  var finalScore = time;
  finalScoreElement.textContent = finalScore;
  console.log("Final score = " + finalScore);

  // set timer to final score?
  timer.textContent = finalScore;

  // store finalScore to local storage

  localStorage.setItem("score", finalScore);
  console.log("The saved score was: " + finalScore);
}

// define logInitials function - store initials from text inputs

function logInitials(event) {
  // prevent default behavior?

  event.preventDefault();

  // variable for initials is = to the initials element value

  var userInitials = document.getElementById("initials").value;

  // console log to see if working

  console.log("Your initials are: " + userInitials);

  // set userInitials to local storage item "initials"

  // localStorage.setItem("initials", userInitials);

  // define score

  // set finalScore to local storage item "score" - should this be here?

  // 1. define the object using var newScore

  var newHighScore = {
    score: finalScore,
    initials: userInitials,
  };

  // convert to string - "var newObjectname = JSON.stringify(original name)"
  highScoresArray.push(newHighScore);

  var highScoresArrayStored = JSON.stringify(highScoresArray);

  // 2. store to local storage: localStorage.setItem("name of object to be stored", "variable referenced")
  // the variable referenced must be the stingified newobject

  localStorage.setItem("highscoresStored", highScoresArrayStored);

  // 3. console log the object to verify that it works

  console.log("The stored score is: " + highScoresArrayStored);

  // last step is redirect to scoreboard

  window.location.href = "scoreboard.html";
}

// add click event for start button - runs startQuiz function
// also runs countDown - should be independent? 

startButton.addEventListener("click", function () {
  startQuiz();
  countDown();
});

// add click event for submit button - runs logInitials function

submitButton.addEventListener("click", logInitials);
