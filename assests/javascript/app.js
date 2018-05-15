// $().button('toggle')	Toggles push state. Gives the button the appearance that it has been activated. 
// will need these for the button clicks for answers selected - might need this method

// define variables
var game = {

}

var numCorrect = 0;
var numWrong = 0;
var numUnanswered = 0;
var timer = 120;
var intervalId;

// function to start the game
$(document).ready(function(){
    function start() {
        intervalId = setInterval(decrement, 1000)
    }
    function decrement() {
        timer --;

        $("#timer").html("<h1> Time remaining: " + timer + " seconds</h1>");
        if(timer === 0) {
            clearInterval(intervalId);
            alert("Time's Up!!")
        }
    
    }
start();

// function to record answers for each question

// function to change interface when time is up or user answers all questions
    
});
