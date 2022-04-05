// Var to keep track of time
// index at 0
var questionsIndex = 0
// keep timer score for quiz
var time = questions.length * 5

// Traverse DOM
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials")

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
        title: "What is another name for the manatee?"
        choices: ["Sea Lion", "Sea Elephant", "Sea Cow"],
        answer: "Sea Cow"
    },

];

