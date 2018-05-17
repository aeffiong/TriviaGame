// $().button('toggle')	Toggles push state. Gives the button the appearance that it has been activated. 
// will need these for the button clicks for answers selected - might need this method

// define variables
var game = [
    {   question: "1. text 1",
        answers: ["text", "text", "text"],
        correct: 0
    },
    {   question: "2. text 2",
        answers: ["text 2", "text 2", "text 2"],
        correct: 1
    },
    {   question: "3. text 3",
        answers: ["text", "text", "text"],
        correct: 0
    },

    {   question: "4. text 4",
        answers: ["text", "text", "text"],
        correct: 2
    },

    {   question: "5. text 5",
        answers: ["text 1", "text 2", "text 3"],
        correct: 2
    },

    {   question: "6. text 6",
        answers: ["text", "text", "text"],
        correct: 1
    },
]

console.log(game);
var numCorrect = 0;
var numWrong = 0;
var numUnanswered = 0;
var timer = 120;
var intervalId;

// function to start the game
$(document).ready(function(){
    // getting questions to show on the page
    $("#question1").html(game[0].question);
    $("#radio120").append("#question1");

    $("#question2").html(game[1].question);
    // $("#radio120").append("#question1");
    // $("#radio123").html(game[1].answers[0]);
    // $("#radio124").html(game[1].answers[1]);

    $("#question3").html(game[2].question);

    $("#question4").html(game[3].question);

    $("#question5").html(game[4].question);
    $("#q5-op1").html(game[4].answers[0]);
    $("#q5-op2").html(game[4].answers[1]);
    $("#q5-op3").html(game[4].answers[2]);

    $("#question6").html(game[5].question);


// function to start timer
    function start() {
        intervalId = setInterval(decrement, 1000)
    }
    // function to start timer countdown
    function decrement() {
        timer --;

        $("#timer").html("<h1> Time remaining: " + timer + " seconds</h1>");
        // change interface when time is up
        if(timer === 0) {
            clearInterval(intervalId);
            // alert("Time's Up!!")
            $(".card-body").html("<p> Correct answers: " + numCorrect + 
            "</p> <p> Incorrect answers: " + numWrong + "</p> <p> Unanswered questions: "
            + numUnanswered + "</p>");
            $(".btn").hide();
        }
        // change interface when user clicks the submit button, but button click isn't working
    function submit() {
        $(".btn").on("click", function(){
            alert("Button clicked");
            $(".card-body").html("<p> Correct answers: " + numCorrect + 
            "</p> <p> Incorrect answers: " + numWrong + "</p> <p> Unanswered questions: "
            + numUnanswered + "</p>");
            $(".btn").hide()
        });
    // var userGuess would equal the button that they clicked which would be an answer from the answer array
    // calculating points - if guess equals correct then numCorrect increase, if guess doesn't equal correct
    // then numWrong increases. Figure out a way to count unanswered if user doesn't answer a question
    if(userGuess === correct) {
        numCorrect ++;
    }
    else if (userGuess !== correct) {
        numWrong ++;
    }
    }
    
    }
start();


// function to record answers for each question

// function to change interface when time is up or user answers all questions
    
});
