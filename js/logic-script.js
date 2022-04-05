// Var to keep track of time
// index at 0
var questionsIndex = 0;
// keep timer score for quiz


var timerId;

// Traverse DOM
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("submit");
var startBtn = document.getElementById("startbtn");
var initialsEl = document.getElementById("initials");
var finalPage = document.getElementById("final-page");

//Quiz questions
var questions = [

    {
        title: "What city are the Disney parks located in?",
        choices: ["Miami", "Ocala", "Orlando"],
        answer: "Orlando"
    },
    {
        title: "What is the capitol of Florida?",
        choices: ["Ft. Myers", "St. Petersburg", "Tallahassee"],
        answer: "Tallahassee"
    },
    {
        title: "What is Florida's largest natural wonder?",
        choices: ["Tampa Bay", "Kennedy Space Center", "The Everglades"],
        answer: "The Everglades"

    },
    {
        title: "What is another name for the manatee?",
        choices: ["Sea Lion", "Sea Elephant", "Sea Cow"],
        answer: "Sea Cow"
    },

];

var time = questions.length * 15;

//start quiz function 
function beginQuiz() {
var beginEl = document.getElementById("beginning");
beginEl.setAttribute("class", "hide");
//unhide questions
questionsEl.removeAttribute("class");

//start timer
timerId = setInterval(clockTick, 1000);
timerEl.textContent = time;

grabQuestions();

}
// Function to show the question on page
function grabQuestions() {
    if (questionsIndex < questions.length) {

    // var to get current question array
   var currentQuestion = questions[questionsIndex];
   // empty out the old questions
   document.querySelector("#choices").textContent = ""
console.log(currentQuestion);
// put the question on the page
 document.querySelector("#q-title").textContent = currentQuestion.title;
 // put the answers on the page
 document.querySelector("#choices").removeAttribute("class");
 for (let index = 0; index < currentQuestion.choices.length; index++) {
    var button = document.createElement("button");
     button.textContent = currentQuestion.choices[index];
     button.classList.add("answer");
     document.querySelector("#choices").appendChild(button);
 }
}
else {
    endgame();
}
}
// Function will get answer off the button and compare it w the correct answer
function getAnswer(event) {
    if(event.target.matches(".answer")) {

        console.log(event.target.textContent);
        questionsIndex++;
        grabQuestions();
    }
    
}

function endgame() {
    // stop the timer
    // get the text form the timer and make it the score
    //show button that allows them to go to the final score page
    
}


function clockTick() {
    time--;
    timerEl.textContent = time;

    if (time <= 0) {
        // call back function to end quiz

    }

}








document.querySelector(".frontpage").addEventListener("click", getAnswer)
startBtn.addEventListener("click", beginQuiz);