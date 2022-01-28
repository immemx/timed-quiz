// defined questions 
var questions = [
    {
        question: "Commonly used data types do NOT include:",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with __________.",
        choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        answer: "3. parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "b. other arrays"
    },
];

// Timer Variables
var timeLeft = 60;
var timerEl = document.querySelector("#timer")

// Page variables
var titleEl = document.querySelector("#title")
var startContainerEl = document.querySelector("#start-container")
var startButtonEl = document.querySelector("#start-btn")
var questionContainerEl = document.querySelector("#question-container")
var questionEl = document.querySelector('#question')
var answerCheck = document.querySelector("#answer-checker")
var ScoreEl = document.querySelector("#score-container")
var questionIndex = 0;

// button variables
var answer1 = document.querySelector('#btn1')
var answer2 = document.querySelector('#btn2')
var answer3 = document.querySelector('#btn3')
var answer4 = document.querySelector('#btn4')


// Timer Function
var timer = function () {

    if (timeLeft > 0) {
        timeLeft --;
        timerEl.textContent = "Time: " + timeLeft;
    }
    else {
        clearInterval(timer);
    }

}

// event listener for start button - start timer
startButtonEl.addEventListener("click", function() {
    var timerId = setInterval(timer, 1000);
    startContainerEl.classList.add("hide")
    nextQuestion();
});


var nextQuestion = function() {
    
    // Making the question container visable
    questionContainerEl.classList.remove("hide");

    // Assigning questions to each button
    questionEl.textContent = questions[questionIndex].question;
    answer1.textContent = questions[questionIndex].choices[0];
    answer2.textContent = questions[questionIndex].choices[1];
    answer3.textContent = questions[questionIndex].choices[2];
    answer4.textContent = questions[questionIndex].choices[3];
}
function checkAnswer(answer) {
    
    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        answerCheck.textContent = "Correct!"
    } else {
        timeLeft -= 10
        answerCheck.textContent = "Wrong!"
    }

    questionIndex++;

    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        gameover();
    }
}

// Event listeners run these fuctions and input coorispoding number into check answer function
var choose1 = function() { checkAnswer(0); };
var choose2 = function() { checkAnswer(1); };
var choose3 = function() { checkAnswer(2); };
var choose4 = function() { checkAnswer(3); };

var gameover = function() {

    // Stop timer 
    clearInterval(timer);

    // hide question container 
    questionContainerEl.classList.add("hide")
    answerCheck.classList.add("hide")

    // dynamically creating gamover page
    var section = document.createElement('section');
    section.setAttribute('id', 'gameover')

    var h1 = document.createElement('h1');
    h1.innerHTML = "Well Done!"

    var p = document.createElement('p');
    p.innerHTML = "You now have a final score of: " + timeLeft

    // append h1 and p into newly created section
    section.appendChild(h1);
    section.appendChild(p);

    document.body.appendChild(section);




}

// Event Listeners

answer1.addEventListener("click", choose1);
answer2.addEventListener("click", choose2);
answer3.addEventListener("click", choose3);
answer4.addEventListener("click", choose4);

/*

var highScore = function () {
    var score = timeLeft;
    questionContainerEl.classList.add("hide");
    ScoreEl.classList.remove("hide");

}

*/
startPage();