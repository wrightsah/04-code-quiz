// define elements

var choicesElement = document.getElementById("choices");
var feedbackElement = document.getElementById("feedback");

//global time variable
  
var time = 75;

// define button
var startButton = document.getElementById("start-button");
startButton.addEventListener("click", startQuiz);

function startQuiz() {
  console.log("Start button pressed.");

  // hide start screen

  var landingSection = document.getElementById("landing");
  landingSection.classList.add("hide");

  // un-hide questions section

  var quizSection = document.getElementById("quiz");
  quizSection.classList.remove("hide");
  
  // define timer
  // start timer

  function countDown() {
    time--;
    console.log(time);
    timer.innerHTML = time;
  }

  // runs every second

  setInterval(countDown, 1000);

  // show starting time

  var timer = document.getElementById("timer");
  


  displayQuestions();
}

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

  // get value of question 0
  var questionNumber = 0

function displayQuestions() {


  var currentQuestion = myQuestions[questionNumber];
  console.log(currentQuestion);

  // update quiz with current question

  var displayQuestion = document.getElementById("question");
  displayQuestion.textContent = currentQuestion.questionSource;

  // clear out any old question choices

  choicesElement.innerHTML = "";

  // loop over choices
  currentQuestion.choices.forEach(function(choice, i) {
    // create new button for each choice
      var choiceButton = document.createElement("button");
      choiceButton.setAttribute("class", "choice");
      choiceButton.setAttribute("class", "btn btn-primary");
      choiceButton.setAttribute("value", choice);
      choiceButton.textContent = i + 1 + ". " + choice;
    // attach click event listener to each choice

    choiceButton.onclick =  questionClick;
    

    // display on the page
    choicesElement.appendChild(choiceButton);

  });

}

// click to move on to the next question

    // first create function 
    
    function questionClick(){
      console.log("An answer was clicked");
      console.log("this.value =" + this.value);
      // check if answer is wrong
      if (this.value !== myQuestions[questionNumber].answer) {
        time -= 10;
        // make sure time is working
        console.log("Time left = " + time);

        //if time is less than 0, then go to end page
        

      };

    }

    // check if correct or incorrect



// stop the quiz

function stopQuiz() {}

// create object to store scores and names

// var highScores = [
//     {

//     }
// ];
