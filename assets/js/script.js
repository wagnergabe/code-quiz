//pseudocode thinking

//need variables for start, questions, answers, timer, score, and leaderboard

startButtonEl.textContent = "Edit";
var question = document.querySelector("#questions")
var trivia = document.querySelectorAll(".trivia-text")
var answersEl = document.getElementById("answers");
var timerEl = document.getElementbyId("timer");
var leaderboardEl = document.getElementById("leaderboard");

var liveQuestion = {};
var correctAnswer = true;
var score = 0;
var availableQuestions = {};

var questions = [
    {
        question: "test test",
        answer1: "wrong",
        answer2: "right",
        answer3: "wrong",
        answer4: "wrong",
        answer: 2, 
    }
]
//--Start Game--//
