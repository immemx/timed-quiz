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

// Timer Function
var timer = function () {
    if (timeLeft > 0) {
        timeLeft --;
        timerEl.innerHTML = "Time: " + timeLeft;
    }
    else {
        clearInterval(timer);
    }
}

var startPage = function () {
    startButtonEl.addEventListener("click", function() {
        var timerId = setInterval(timer, 1000);
        startContainerEl.classList.add("hide")
        question1();
    })
}

var question1 = function() {

    // Setting Variables to HTML Buttons
    questionContainerEl.classList.remove("hide");
    var answerButtons = document.querySelector('#answer-buttons')
    var answer1 = document.querySelector('#btn1')
    var answer2 = document.querySelector('#btn2')
    var answer3 = document.querySelector('#btn3')
    var answer4 = document.querySelector('#btn4')

    // Assigning the Values of the first question
    questionEl.innerHTML = "Commonly used data types do NOT include:";
    answer1.textContent = "1. strings";
    answer2.textContent = "2. booleans";
    answer3.textContent = "3. alerts";
    answer4.textContent = "4. numbers";

    // Event listeners for selected answers
    answer1.addEventListener('click', function() {
        timeLeft -= 10;
        answerCheck.textContent = "Wrong!"
        question2();
        this.removeEventListener("click", answer1)
    });

    answer2.addEventListener('click', function() {
        timeLeft -= 10
        answerCheck.textContent = "Wrong!"
        question2();
        this.removeEventListener("click", answer2)
    });

    answer3.addEventListener('click', function() {
        answerCheck.innerHTML = "Correct!"
        question2();
        this.removeEventListener("click", answer3)
    });

    answer4.addEventListener('click', function() {
        timeLeft -= 10
        answerCheck.innerHTML = "Wrong!"
        question2();
        this.removeEventListener("click", answer4)
    });


}

var question2 = function() {

    // Setting Variables to HTML Buttons
    questionContainerEl.classList.remove("hide");
    var answerButtons = document.querySelector('#answer-buttons')
    var answer1 = document.querySelector('#btn1')
    var answer2 = document.querySelector('#btn2')
    var answer3 = document.querySelector('#btn3')
    var answer4 = document.querySelector('#btn4')

    // Assigning the Values of the first question
    questionEl.innerHTML = "The condition in an if/else statement is enclosed with __________.";
    answer1.textContent = "1. quotes";
    answer2.textContent = "2. curly brackets";
    answer3.textContent = "3. parenthesis";
    answer4.textContent = "4. square brackets";

    // Event listeners for selected answers
    answer1.addEventListener('click', function() {
        timeLeft -= 10;
        answerCheck.textContent = "Wrong!"
        question3();
        this.removeEventListener("click", answer1)
    });

    answer2.addEventListener('click', function() {
        timeLeft -= 10
        answerCheck.textContent = "Wrong!"
        question3();
        this.removeEventListener("click", answer2)
    });

    answer3.addEventListener('click', function() {
        answerCheck.innerHTML = "Correct!"
        question3();
        this.removeEventListener("click", answer3)
    });

    answer4.addEventListener('click', function() {
        timeLeft -= 10
        answerCheck.innerHTML = "Wrong!"
        question3();
        this.removeEventListener("click", answer4)
    });


}

var question3 = function() {

    // Setting Variables to HTML Buttons
    questionContainerEl.classList.remove("hide");
    var answerButtons = document.querySelector('#answer-buttons')
    var answer1 = document.querySelector('#btn1')
    var answer2 = document.querySelector('#btn2')
    var answer3 = document.querySelector('#btn3')
    var answer4 = document.querySelector('#btn4')

    // Assigning the Values of the first question
    questionEl.innerHTML = "Arrays in JavaScript can be used to store __________.";
    answer1.textContent = "1. numbers and strings";
    answer2.textContent = "2. other arrays";
    answer3.textContent = "3. booleans";
    answer4.textContent = "4. all of the above";

    // Event listeners for selected answers
    answer1.addEventListener('click', function() {
        timeLeft -= 10;
        answerCheck.textContent = "Wrong!"
        highScore();
        this.removeEventListener("click", answer1)
    });

    answer2.addEventListener('click', function() {
        timeLeft -= 10
        answerCheck.textContent = "Wrong!"
        highScore();
        this.removeEventListener("click", answer2)
    });

    answer3.addEventListener('click', function() {
        timeLeft -= 10
        answerCheck.innerHTML = "Wrong!"
        highScore();
        this.removeEventListener("click", answer3)
    });

    answer4.addEventListener('click', function() {

        answerCheck.innerHTML = "Correct!"
        highScore();
        this.removeEventListener("click", answer4)

    });


}

var highScore = function () {
    var score = timeLeft;
    questionContainerEl.classList.add("hide");
    ScoreEl.classList.remove("hide");

}


startPage();