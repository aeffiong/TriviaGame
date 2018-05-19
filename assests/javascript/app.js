// define variables
var game = [
    {
        question: "1. How many servings of fruits and vegetables should you eat a day?",
        answers: ["1 serving", "5 servings", "10 servings"],
        correctAnswer: "5 servings"
    },
    {
        question: "2. What's a serving size for protein?",
        answers: ["3 steaks", "1/4 of your plate", "no protein"],
        correctAnswer: "1/4 of your plate"
    },
    {
        question: "3. What's a serving size for carbs?",
        answers: ["all da carbs", "no carbs", "1/4 of your plate"],
        correctAnswer: "1/4 of your plate"
    },

    {
        question: "4. How hours a sleep a night is recommended for general health?",
        answers: ["7-9 hours a night", "less than 6 hours a night", "10-12 hours a night"],
        correctAnswer: "7-9 hours a night"
    },

    {
        question: "5. How many minutes of moderate intensity cardio should you aim for a week?",
        answers: ["150 minutes", "1 minute", "700 minutes"],
        correctAnswer: "150 minutes"
    },

    {
        question: "6. How many times a week should you do resistance training of all your major muscle groups?",
        answers: ["5-6 times a week", "Never do resistance training", "2-3 times a week"],
        correctAnswer: "2-3 times a week"
    },
]

// console.log(game);
// console.log(game[0].correctAnswer);
var numCorrect = 0;
var numWrong = 0;   
var timer = 10;
var intervalId;

// function to start the game
$(document).ready(function () {
    // getting questions to show on the page
    $("#question1").append(game[0].question);
    $("#q1-op1").append(game[0].answers[0]);
    $("#q1-op2").append(game[0].answers[1]);
    $("#q1-op3").append(game[0].answers[2]);

    $("#question2").append(game[1].question);
    $("#q2-op1").append(game[1].answers[0]);
    $("#q2-op2").append(game[1].answers[1]);
    $("#q2-op3").append(game[1].answers[2]);

    $("#question3").html(game[2].question);
    $("#q3-op1").append(game[2].answers[0]);
    $("#q3-op2").append(game[2].answers[1]);
    $("#q3-op3").append(game[2].answers[2]);

    $("#question4").html(game[3].question);
    $("#q4-op1").append(game[3].answers[0]);
    $("#q4-op2").append(game[3].answers[1]);
    $("#q4-op3").append(game[3].answers[2]);

    $("#question5").append(game[4].question);
    $("#q5-op1").append(game[4].answers[0]);
    $("#q5-op2").append(game[4].answers[1]);
    $("#q5-op3").append(game[4].answers[2]);

    $("#question6").html(game[5].question);
    $("#q6-op1").html(game[5].answers[0]);
    $("#q6-op2").html(game[5].answers[1]);
    $("#q6-op3").html(game[5].answers[2]);

    // submit function trying to get it to be a function - couldn't get it to work as a function
    // change interface when user clicks the submit button
    $("#submit").on("click", ".btn", function () {
        calculateScore();
        console.log(numCorrect, numWrong);
        $(".card-body").html("<p> Correct answers: " + numCorrect +
            "</p> <p> Incorrect answers: " + numWrong + "</p>");
        $(".btn").hide();
        clearInterval(intervalId);
    });
    // intervalId = setInterval(decrement, 1000)


    // function to start timer
    function start() {
        intervalId = setInterval(decrement, 1000)
    }
    // function to start timer countdown
    function decrement() {
        timer--;

        $("#timer").html("<h1> Time remaining: " + timer + " seconds</h1>");
        // change interface when time is up
        if (timer <= 0) {
            clearInterval(intervalId);
            calculateScore();
            // alert("Time's Up!!")
            $(".card-body").html("<p> Correct answers: " + numCorrect +
                "</p> <p> Incorrect answers: " + numWrong + "</p>");
            $(".btn").hide();
        }
    }


    function calculateScore() {

        // var userGuess would equal the button that they clicked which would be an answer from the answer array
        // calculating points - if guess equals correctAnswer then numCorrect increase, if guess doesn't equal correct
        // then numWrong increases. Figure out a way to count unanswered if user doesn't answer a question
        // double for loop to get the questions length and then the questions[i].answers.length to get answers

        // for (var i = 0; i < game.length; i++) {
            // console.log(i);
            // for (var j = 0; j < game[i].answers.length; j++) {
            //     console.log(game[i].answers[j]);
            //     console.log("Hi");
            // }

            // capture user guess and give them points for correct or incorrect - right now that numbers are out of control high lol
            var userGuess6 = $('input[name=question-6]:checked').val();
            console.log(userGuess6);

            if (userGuess6 === game[5].correctAnswer) {
                console.log("shfhffhsfshhsfhsfhsf");
                numCorrect++;
                console.log(userGuess6);
                console.log(game[5].correctAnswer);
            }

            else {
                numWrong++;
            }
            var userGuess5 = $('input[name=question-5]:checked').val();
            console.log(userGuess5);

            if (userGuess5 === game[4].correctAnswer) {

                numCorrect++;
                console.log(userGuess5);
                console.log(game[4].correctAnswer);
            }

            else {
                numWrong++;
            }
            var userGuess4 = $('input[name=question-4]:checked').val();
            console.log(userGuess4);

            if (userGuess4 === game[3].correctAnswer) {

                numCorrect++;
                console.log(userGuess4);
                console.log(game[3].correctAnswer);
            }

            else {
                numWrong++;
            }
            var userGuess3 = $('input[name=question-3]:checked').val();
            console.log(userGuess3);

            if (userGuess3 === game[2].correctAnswer) {

                numCorrect++;
                console.log(userGuess3);
                console.log(game[2].correctAnswer);
            }

            else {
                numWrong++;
            }
            var userGuess2 = $('input[name=question-2]:checked').val();
            console.log(userGuess2);

            if (userGuess2 === game[1].correctAnswer) {

                numCorrect++;
                console.log(userGuess2);
                console.log(game[1].correctAnswer);
            }

            else {
                numWrong++;
            }
            var userGuess1 = $('input[name=question-1]:checked').val();
            console.log(userGuess1);

            if (userGuess1 === game[0].correctAnswer) {

                numCorrect++;
                console.log(userGuess1);
                console.log(game[0].correctAnswer);
            }

            else {
                numWrong++;
            }
        // }
    }



    start();
    // function to record answers for each question and add up score
    // var userGuess = $('input[name=question-6]:checked').val();

    // if(userGuess === game[5].correctAnswer) {

    //     numCorrect ++;
    //     console.log(userGuess);
    //     console.log(game[5].correctAnswer);
    // } 

    // else {
    //     numWrong ++;
    // }


});







