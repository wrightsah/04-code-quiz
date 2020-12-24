// click button to start timer

// define button
var startButton = document.getElementById("start-button");
startButton.addEventListener("click", startQuiz);

// define timer

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
  var time = 75;

  // runs every second

  setInterval(countDown, 1000);

  // function to count down time

  function countDown() {
    time--;
    console.log(time);
    timer.innerHTML = time;
  }
}

// stop the quiz

function stopQuiz() {}

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

// create function to get question data from array

function displayQuestion() {
  // get value of question 0
  var getQuestion = myQuestions[0].questionSource;
  console.log(getQuestion);

  // get value of answers 0

  // write value of question 0
  var displayQuestion = document.getElementById("question");
  displayQuestion.innerHTML = getQuestion;

  // write value of answers 0
}

// create object to store scores and names

// var highScores = [
//     {

//     }
// ];
