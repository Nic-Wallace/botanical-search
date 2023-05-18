

// variables for questions, next and running game
const quiz = document.getElementById("quiz");
const answerHTML = document.querySelectorAll(".answer");
const questionHTML = document.getElementById("question");
const answerA = document.getElementById("answer-a");
const answerB = document.getElementById("answer-b");
const answerC = document.getElementById("answer-c");
const answerD = document.getElementById("answer-d");
const nextButton = document.getElementById("next-btn");
const image = document.getElementById("img");
let currentQuestion = 0;
let score = 0;

startQuiz(); 

// starts quiz: shuffles and loads questions
function startQuiz() {
    shuffleQuestions(); 
    loadQuestion();
}

// shuffles question order
function shuffleQuestions() {
    quizQs = quizQs.sort(() => Math.random() - 0.5);
}

// loads the next question
function loadQuestion() {
    uncheckAnswers();
    const currentQuestionInput = quizQs[currentQuestion];
    image.src = `assets/images/${currentQuestionInput.image}`;
    questionHTML.innerText = currentQuestionInput.question;
    answerA.innerText = currentQuestionInput.a;
    answerB.innerText = currentQuestionInput.b;
    answerC.innerText = currentQuestionInput.c;
    answerD.innerText = currentQuestionInput.d;
}

// removes checks from radio buttons before next question
function uncheckAnswers() {
    answerHTML.forEach(answerHTML => answerHTML.checked = false);
}

// selects id of users selected answer
function getSelected() {
    let answer;
    answerHTML.forEach(answerHTML => {
        if (answerHTML.checked) {
            answer = answerHTML.id;
        }
    });
    return answer;
}

// checks for correct answer when next button is clicked
nextButton.addEventListener("click", checkAnswer);

// checks for correct answer and adds to score if correct
function checkAnswer() {
    const answer = getSelected();
    if (answer) {
        if (answer === quizQs[currentQuestion].correct) {
            incrementScore();
        }
        proceedQuiz();
    }
}

// adds one to score tally
function incrementScore() {
    score += 1;
}

// if there are more questions, load next question, if not, stop timer and show score
function proceedQuiz() {
    currentQuestion += 1;
    if (currentQuestion < quizQs.length) {
        loadQuestion();
    } else { 
        clearInterval(timerInterval);
        quiz.innerHTML = `
        <h2>You got ${score}/${quizQs.length} questions correct!</h2>
        <button onclick="location.reload()">Restart</button>
        `;
    }
}

const timer = document.getElementById('timer');
let timerInterval;

startTimer = () => {
    let second = 0,
      minute = 0,
      hour = 0;
  
    timerInterval = setInterval(function () {
      timer.classList.toggle('odd');
  
      timer.innerHTML =
        (hour ? hour + ':' : '') +
        (minute < 10 ? '0' + minute : minute) +
        ':' +
        (second < 10 ? '0' + second : second);

      second++;
  
      if (second == 60) {
        minute++;
        second = 0;
      }
  
      if (minute == 60) {
        hour++;
        minute = 0;
      }
    }, 1000);
  };