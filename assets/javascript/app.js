questionArray = [{question: "What year did the Wright Brothers make their first flight?", answer1: "1890", answer2: "1903", answer3: "1906", answer4: "1911", correctAnswer: '1903'},
{question: "What is the capital of California?", answer1: "San Francisco", answer2: "Los Angeles", answer3: "Sacramento", answer4: "Fresno", correctAnswer: 'Sacramento'},
{question: "Where is the Nile River located?", answer1: "North America", answer2: "Africa", answer3: "South America", answer4: "Asia", correctAnswer: 'Africa'},
{question: "What is the seventh planet from the sun?", answer1: "Jupiter", answer2: "Neptune", answer3: "Saturn", answer4: "Uranus", correctAnswer: 'Uranus'},
{question: "Which ocean is the world's largest?", answer1: "Pacific", answer2: "Atlantic", answer3: "Arctic", answer4: "Indian", correctAnswer: 'Pacific'},
{question: "Who played Neo in the Matrix?", answer1: "Keanu Reeves", answer2: "The Rock", answer3: "Jackie Chan", answer4: "Bruce Willis", correctAnswer: 'Keanu Reeves'},
{question: "How many fingers does Mickey Mouse have?", answer1: "Two", answer2: "Three", answer3: "Four", answer4: "Five", correctAnswer: 'Three'},
{question: "What is the next number in the pattern: 144, 121, 100, 81, ...", answer1: "70", answer2: "64", answer3: "72", answer4: "60", correctAnswer: '64'},
{question: "Unlike most other fish, sharks have no ...?", answer1: "Bones", answer2: "Heart", answer3: "Liver", answer4: "Gills", correctAnswer: 'Bones'},
{question: "What tree do acorns come from?", answer1: "Acorn Tree", answer2: "Pine Tree", answer3: "Sequia Tree", answer4: "Oak Tree", correctAnswer: 'Olympia'}];
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var indexParam = 0;
var questionTime;
var intervalCountdown;
var chosenAnswer;
var gameDone = false;

//FUNCTIONS------------
//Countdown timer
function countdown() {
    stopClock() 
    questionTime = 2;
    $('#timer').text('Time Left For This Question: ' + questionTime);
    intervalCountdown = setInterval(function() {
        questionTime--;
        $('#timer').text('Time Left For This Question: ' + questionTime);
        if(questionTime === 0 && gameDone === false) {
            indexParam++;
            unanswered++;
            if(indexParam < questionArray.length) {
            createQuestionAnswers(indexParam);
            
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
    // clearInterval(intervalCountdown);
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
    gameDone = true;
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
