// Var to keep track of time
// index at 0
var questionsIndex = 0;
// keep timer score for quiz


var timerId;

// Traverse DOM
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var scoreEl = document.getElementById("submit");
var startBtn = document.getElementById("startbtn");
var initialsEl = document.getElementById("initials");
var finalPage = document.getElementById("final-page");
var scorePg = document.querySelector(".scores")




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

function clockTick() {
    time--;
    timerEl.textContent = time;

    if (time <= 0) {
        // call back function to end quiz
        endgame();
    }

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
    } else {
        time -= 5;
        console.log("incorrect");
        // In here we need to add some logic for storing correct ansers and subtracting time for wrong ones
        // we started a function for subtracting time called function lostTime
        
    }
    
}




function endgame() {
    // stop the timer
    clearInterval(timerId);
    //clear previous question 
    questionsEl.textContent = "";
    // adds text from final page
    finalPage.removeAttribute("class");
    //show button that allows them to go to the final score page
    document.getElementById("fin-score").textContent = time;
    // adds score to local storage
    localStorage.setItem("score", time);
}

function initials () {
// get initials and save them in local storage
var input = document.getElementById("initials").value;
localStorage.setItem("initials", input);
console.log(input);
}

document.querySelector(".frontpage").addEventListener("click", getAnswer)

startBtn.addEventListener("click", beginQuiz);

// scoreEl.addEventListener("click", //have them go to score page);