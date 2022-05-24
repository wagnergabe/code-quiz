//pseudocode thinking

//need variables for start, questions, answers, timer, score, and leaderboard

//global variables


//Well aware Reddit is not a good source, but using querySelector for everything instead of getElmentById/ClassName, seems to work as needed.
//https://www.reddit.com/r/javascript/comments/5vyf18/is_there_anything_wrong_with_using_queryselector/

var timerEl = document.querySelector("p.time");
var scoreEl = document.querySelector("#player-score");
var questionEl= document.querySelector("#questions")
var playerScore = 0;
var welcomeEl = document.querySelector("#welcome");

var questionEl = document.querySelector("question")

var questionCount = 0;

var rightOrWrong = document.querySelector("#rightOrWrong")

var finalEl = document.querySelector("#final");

var initialsInput = document.querySelector("#initials");

var highscoresEl = document. querySelector("#highscores");
var scoreListEl = document.querySelector("#score-list");

var scoreList = [];

//buttons

var answer1Btn = document.querySelector("answer1");
var answer2Btn = document.querySelector("answer2");
var answer3Btn = document.querySelector("answer3");
var answer4Btn = document.querySelector("answer4");

var StartBtn = document.querySelector("#start");

var ansBtn = document.querySelectorAll("button.ansBtn");


var submitScrBtn = document.querySelector("#submit-score")

//questions

var questions = [
    {
    question: "What is an example of Camel-case?",
    answers: ["1. camelcase", "2. Camelcase", "3 camelCase", "4. Cammmmmel"],
    correctAnswer: "2"
    }
]

//source that helped format questions: https://stackoverflow.com/questions/37252041/storing-quiz-questions-in-array-of-objects

//clock

function countDown() {
    var timerEl = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = `Time:${secondsLeft}s`;

        if (secondsLeft === 0 || questionCount === question.length) {
            questionEl.style.display = "none";
            scoreEl.textContent = secondsLeft;
            }
        }, 1000);
}

//Start Game Function (God help me...)
function startGame() {
    welcomeEl.style.display = "none";
    questionEl.style.display = "visable";
    questionCount = 0;

    countDown();
    setQuestion(questionCount);
}



var setQuestion = function (id) {
    if(id < questions.length) {
    questionEl.textContent = questions[id].question;
    ans1Btn.textContent = questions[id].answer [0];
    ans2Btn.textContent = questions[id].answer [1];
    ans3Btn.textContent = questions[id].answer [2];
    ans4Btn.textContent = questions[id].answer [3];
  }
}


