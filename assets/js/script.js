//pseudocode thinking

//need variables for start, questions, answers, timer, score, and leaderboard

//global variables


//Well aware Reddit is not a good source, but using querySelector for everything instead of getElmentById/ClassName, seems to work as needed.
//https://www.reddit.com/r/javascript/comments/5vyf18/is_there_anything_wrong_with_using_queryselector/
//var questionCount = 0;
var secondsLeft = 60;
var playerScore = 0;
var headerEl = document.querySelector("#header")
var timeEl = document.querySelector("p.time");
var scoreEl = document.querySelector("#score");
var questionEl= document.querySelector("#question");
var questionsEl = document.querySelector("#questions");
//remember to change one of these to Trivia and not question/questions
var welcomeEl = document.querySelector("#welcome");
var rightOrWrongEl = document.querySelector("#rightOrWrong");
var finalEl = document.querySelector("#final");
var initialsInput = document.querySelector("#initials");
var highscoresEl = document. querySelector("#highscores");
var scoreListEl = document.querySelector("#score-list");
var scoreList = [];

//buttons (keeping these global since local scope seems to be causing issues)

var answer1Btn = document.querySelector("#answer1");
var answer2Btn = document.querySelector("#answer2");
var answer3Btn = document.querySelector("#answer3");
var answer4Btn = document.querySelector("#answer4");
var startBtn = document.querySelector("#start");
var answerBtn = document.querySelectorAll("button.answerBtn");
var submitScrBtn = document.querySelector("#submit-score")
var viewScrBtn = document.querySelector("#view-Scores")

//questions

var questions = [
    {
    question: "What is an example of Camel-case?",
    answers: ["1. camelcase", "2. Camelcase", "3 camelCase", "4. Cammmmmel"],
    correctAnswer: "2"
    },
    {
    question: "what Does HTML stand for?",
    answers: ["1. Hyper-Text Markup language", "2. High-Tech Media Link", "3. Home Tab Marker Legend", "4 Harry Truman Makes Lasagna"],
    correctAnswer: "0"
    }
]

//source that helped format questions: https://stackoverflow.com/questions/37252041/storing-quiz-questions-in-array-of-objects

//clock

function countDown() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = `【┘】:${secondsLeft}s`;

        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            scoreEl.textContent = secondsLeft;
            }
        }, 1000);
}

//Start Game Function (God help me...)
function startGame() {
    welcomeEl.style.display = "none";
    headerEl.style.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;

    countDown();
    setQuestion(questionCount);
}



function setQuestion(id) {
    if(id < questions.length) {
    questionEl.textContent = questions[id].question;
    answer1Btn.textContent = questions[id].answers[0];
    answer2Btn.textContent = questions[id].answers[1];
    answer3Btn.textContent = questions[id].answers[2];
    answer4Btn.textContent = questions[id].answers[3];
  }
}

//Right or Wrong consequences

function checkAnswers(event) {
    event.preventDefault();

    rightOrWrongEl.style.display = "visable";
    var p = document.createElement("p");
    rightOrWrongEl.appendChild(p);

    setTimeout(function () {
        p.style.display = "none";
    }, 1000);


if (questions[questionCount].correctAnswer === event.target.value) {
    playerScore = playerScore + 10;
    p.textContent = "You Got It!";
} else if (questions[questionCount].correctAnswer !==event.target.value) {
    playerScore = playerScore - 10;
    secondsLeft = secondsLeft - 10;
    p.textContent = "wrong!"
}

if (questionCount < questions.length) {
    questionCount++;
}
setQuestion(questionCount);
};

//highscores//


function addScore(event) {
    event.preventDefault();

    finalEl.style.display = "none";
    highscoresEl.style.display = "block";

    let init = initialsInput.value.toUpperCase();
    scoreList.push({ initials: init, score: secondsLeft });

    // sort scores
    scoreList = scoreList.sort((a, b) => {
        if (a.score < b.score) {
          return 1;
        } else {
          return -1;
        }
      });
    
    scoreListEl.innerHTML="";
    for (let i = 0; i < scoreList.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
        scoreListEl.append(li);
    }

    // Add to local storage
    storeScores();
    displayScores();
}

function storeScores() {
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
}

function displayScores() {
    // Get stored scores from localStorage
    // Parsing the JSON string to an object
    let storedScoreList = JSON.parse(localStorage.getItem("scoreList"));

    // If scores were retrieved from localStorage, update the scorelist array to it
    if (storedScoreList !== null) {
        scoreList = storedScoreList;
    }
}

// clear scores
function clearScores() {
    localStorage.clear();
    scoreListEl.innerHTML="";
}



startBtn.addEventListener("click", startGame);

answerBtn.forEach(item => {
    item.addEventListener("click", checkAnswers);
})



