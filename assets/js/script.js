//pseudocode thinking

//need variables for start, questions, answers, timer, score, and leaderboard

//global variables

var timerEl = document.querySelector("p.time");
var scoreEl = document.querySelector("#player-score");
var questionEl= document.querySelector("#questions")
var questionNumber = 0;
var playerScore = 0;

//--Trivia Questions--//

//--list of items = array--//

var questions = [
    {
    question: "What is an example of Camel-case?",
    answers: ["1. camelcase", "2. Camelcase" "3. camelCase" "4. Cammmmmel"],
    correctAnswer: "2"
    }
]

//clock

function countDown() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = `Time:${secondsLeft}s`;

        if (secondsLeft === 0 || questionCount === question.length) {
            questionEl.style.display = "none";
            scoreEl.textContent = secondsLeft;
            }
        }, 1000);
}

//Start Game Function (God help me...)
function startQuiz() {
    introEl.style.display = "none";
    questionEl.style.display = "visable";
    questionCount = 0;

    countDown();
    setQuestion(questionCount);
}

var setQuestion = function (id) {
    questionEl.textContent = question[id].question
}

//source that helped format questions: https://stackoverflow.com/questions/37252041/storing-quiz-questions-in-array-of-objects