// $().button('toggle')	Toggles push state. Gives the button the appearance that it has been activated. 
// will need these for the button clicks for answers selected - might need this method

// define variables
var game = [
    {   question: "1. text 1",
        answers: ["text", "text 1 answer", "text"],
        correctAnswer: "text 1 answer"
    },
    {   question: "2. text 2",
        answers: ["text 2", "text 2 answer", "text 2"],
        correctAnswer: "text 2 answer"
    },
    {   question: "3. text 3",
        answers: ["text", "text", "text 3 answer"],
        correctAnswer: "text 3 answer"
    },

    {   question: "4. text 4",
        answers: ["text 4 answer ", "text", "text"],
        correctAnswer: "text 4 answer"
    },

    {   question: "5. text 5",
        answers: ["text 5 answer", "text 2", "text 3"],
        correctAnswer: "text 5 answer"
    },

    {   question: "6. text 6",
        answers: ["text", "text", "text 6 answer"],
        correctAnswer: "text 6 answer"
    },
]

console.log(game);
console.log(game[0].correctAnswer);
var numCorrect = 0;
var numWrong = 0;
var numUnanswered = 0;
var timer = 120;
var intervalId;

// function to start the game
$(document).ready(function(){
    // getting questions to show on the page
    $("#question1").append(game[0].question);
    $("#q1-op1").append(game[0].answers[0]);
    $("#q1-op2").append(game[0].answers[1]);
    $("#q1-op3").append(game[0].answers[2]);

    $("#question2").append(game[1].question);
    $("#q2-op1").append(game[2].answers[0]);
    $("#q2-op2").append(game[2].answers[1]);
    $("#q2-op3").append(game[2].answers[2]);

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
    $("#submit").on("click", ".btn", function(){
        $(".card-body").html("<p> Correct answers: " + numCorrect + 
        "</p> <p> Incorrect answers: " + numWrong + "</p> <p> Unanswered questions: "
        + numUnanswered + "</p>");
        $(".btn").hide();
        clearInterval(intervalId);
    });


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
       
    
        
            
    // var userGuess would equal the button that they clicked which would be an answer from the answer array
    // calculating points - if guess equals correctAnswer then numCorrect increase, if guess doesn't equal correct
    // then numWrong increases. Figure out a way to count unanswered if user doesn't answer a question
    // double for loop to get the questions length and then the questions[i].answers.length to get answers
    
    for(var i = 0; i < game.length; i++) {
        console.log(i);
        for(var j = 0; j < game[i].answers.length; j++) {
            console.log(game[i].answers[j]);
        }
    }

  
    }
    start();
      // function to record answers for each question and add up score
    var userGuess = $('input[name=question-6]:checked').val();
  
    if(userGuess === game[5].correctAnswer) {
        
        numCorrect ++;
        console.log(userGuess);
        console.log(game[5].correctAnswer);
    } 

    // else {
    //     numWrong ++;
    // }
    
  
    });





    

