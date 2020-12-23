// click button to start timer

// define button
var startButton = document.getElementById("start-button");
startButton.addEventListener("click", startQuiz);

// define timer

function startQuiz() {
  console.log("Start button pressed.");

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

// create an array of object for the questions and the answers

var questions = [
    {
        question: "Inside which HTML element would JavaScript be able to run?", 
        choices: ["<javascript>", "<js>", "<script>", "<java>"],
        answer: "<script>" 
    },
    {
        question: "One equals sign (=) indicates which of the following?",
        choices: ["values are equal", "values are the same type and equal", "storing the value of a variable", "a value is true"],
        answer: "storing the value of a variable"
    }, 
    {
        question: 'How would you make "Hello World!" pop up on the screen?',
        choices: ['alert var = "Hello World!"', 'alert("Hello World!");', 'popup("Hello World!");', 'window."Hello World!";'],
        answer: 'alert("Hello World!");'
    }, 
    {
        question: "Which of the following is a function declaration?",
        choices: ["function.script", "var function = myFunction", "func myFunction", "function myFunction()"],
        answer: "function myFunction()"
    },
    {
        question: "How would you access the first element of an array named cars?",
        choices: ["cars(1)", "cars[1]", "cars(0)", "cars[0]"], 
        answer: "cars[0]"
    }
];
    

// create object to store scores and names

var highScores = {};
