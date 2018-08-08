questionArray = [{question: "What color is the grass?", answer1: "Blue", answer2: "Purple", answer3: "Green", answer4: "Brown", correctAnswer: 'Green'},
{question: "What is the capital of California?", answer1: "San Francisco", answer2: "Los Angeles", answer3: "Sacramento", answer4: "Fresno", correctAnswer: 'Sacramento'},
{question: "Where is the Nile River located?", answer1: "North America", answer2: "Africa", answer3: "South America", answer4: "Asia", correctAnswer: 'Africa'},
{question: "What is the capital of Washington?", answer1: "Olympia", answer2: "Seattle", answer3: "abc", answer4: "123", correctAnswer: 'Olympia'}];
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var indexParam = 0;
var questionTime;
var intervalCountdown;
var chosenAnswer;

//FUNCTIONS------------
//Countdown timer
function countdown() {
    stopClock() 
    questionTime = 5;
    $('#timer').text('Time Left For This Question: ' + questionTime);
    intervalCountdown = setInterval(function() {
        questionTime--;
        $('#timer').text('Time Left For This Question: ' + questionTime);
        if(questionTime === 0) {
            indexParam++;

            if(indexParam < questionArray.length) {
            createQuestionAnswers(indexParam);
            unanswered++;
            stopClock();
            countdown();
        } else {
            gameOver();
            clearInterval(intervalCountdown)

        } 
        }
    }, 1000);
}
function stopClock() {
    clearInterval(intervalCountdown);
}

//Create answers function
function createQuestionAnswers(indexParam) {
    $('#question-answer').empty();
    var heading = $('<h2>');
    heading.text('Question');
    heading.attr('id', 'questionHeader');
    $('#question-answer').append(heading);
    var question = $('<h2>');
    question.text(questionArray[indexParam].question);
    question.attr('id', 'question');
    $('#question-answer').append(question);
    var answer = $('<button>');
    answer.html('<h2>' + questionArray[indexParam].answer1 + '</h2>')
    answer.attr('class', 'answer');
    $('#question-answer').append(answer);
    var answer = $('<button>');
    answer.html('<h2>' + questionArray[indexParam].answer2 + '</h2>')
    answer.attr('class', 'answer');
    $('#question-answer').append(answer);
    var answer = $('<button>');
    answer.html('<h2>' + questionArray[indexParam].answer3 + '</h2>')
    answer.attr('class', 'answer');
    $('#question-answer').append(answer);
    var answer = $('<button>');
    answer.html('<h2>' + questionArray[indexParam].answer4 + '</h2>')
    answer.attr('class', 'answer');
    $('#question-answer').append(answer);
};
//Function to stop the interval
function stopQuestions() {
    if(index === (questionArray.length)) {
        clearInterval(intervalFunction);
    }
};
//Function to check answer
function status() {
    if(chosenAnswer === questionArray[indexParam].correctAnswer) {
        console.log("That\'s right!");
        correct++;
    }
    if(chosenAnswer !== questionArray[indexParam].correctAnswer) {
        console.log('That\'s incorrect!');
        incorrect++;
    }
};
function gameOver() {
    $('#question-answer').empty();
    $('#timer').empty();
    $('#timer').css('display', 'none');
    var status = $('<h2>');
    status.text('Game Over');
    status.attr('id', 'gameOver');
    $('#question-answer').append(status);
    var correctAnswers = $('<p>');
    correctAnswers.text('Number of correct answers: ' + correct);
    correctAnswers.attr('class', 'results');
    $('#question-answer').append(correctAnswers);
    var incorrectAnswers = $('<p>');
    incorrectAnswers.text('Number of incorrect answers: ' + incorrect);
    incorrectAnswers.attr('class', 'results');
    $('#question-answer').append(incorrectAnswers);
    var noAnswer = $('<p>');
    noAnswer.text('Number of unanswered questions: ' + unanswered);
    noAnswer.attr('class', 'results');
    $('#question-answer').append(noAnswer);
    $('#start-button').text('Retry');
    $('#start-button').css('display', 'block');
}
$('#start-button').on("click", function() {
    //Remove start button
    $('#start-button').css('display', 'none');
    $('#intro').css('display', 'none');
    $('#timer').css('display', 'inline-block')
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    indexParam = 0;
    createQuestionAnswers(indexParam);
    countdown();
      
});
$(document).on("click", '.answer', function() {
    chosenAnswer = $(this).text();
    if(indexParam < questionArray.length) {
    status();
    indexParam++;
    console.log('test1');
    
    console.log(indexParam);
    if (indexParam > 0 && indexParam < questionArray.length) {
        console.log('test');
    createQuestionAnswers(indexParam);
    countdown();
    }
}
    if (indexParam === questionArray.length) {
        gameOver();
   
    } 



   
});
