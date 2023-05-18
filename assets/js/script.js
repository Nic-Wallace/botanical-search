// questions for quiz
const quizQs = [
    {
        question: "How many arches can you find in the picture?",
        image: "arches.jpg",
        a: "6",
        b: "7",
        c: "8",
        d: "9",
        correct: "c",
    },
    {
        question: "How many lupin flowers and buds can you find in the picture?",
        image: "lupins.jpg",
        a: "13",
        b: "14",
        c: "15",
        d: "16",
        correct: "b",
    },
    {
        question: "How many flamingos can you find in the picture?",
        image: "flamingos.jpg",
        a: "26",
        b: "35",
        c: "29",
        d: "32",
        correct: "d",
    },
    {
        question: "How many purple flowers can you find in the picture?",
        image: "flowers.jpg",
        a: "9",
        b: "10",
        c: "11",
        d: "12",
        correct: "a",
    },
    {
        question: "How many people wearing the colour red can you find in the picture?",
        image: "people.jpg",
        a: "9",
        b: "6",
        c: "12",
        d: "15",
        correct: "a",
    },
    {
        question: "How many vertical gardens can you find in the picture?",
        image: "vertical-gardens.jpg",
        a: "13",
        b: "14",
        c: "15",
        d: "16",
        correct: "c",
    },
    {
        question: "How many waterfalls can you find in the picture?",
        image: "waterfalls.jpg",
        a: "8",
        b: "9",
        c: "10",
        d: "11",
        correct: "c",
    },
    {
        question: "How many lilypads can you find in the picture?",
        image: "lilypads.jpg",
        a: "29",
        b: "30",
        c: "31",
        d: "32",
        correct: "d",
    },
];

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

loadQuestion(); //will not work when i put it in the startQuiz function???

function startQuiz() {
    shuffleQuestions(); //shuffle doesn't work???
    loadQuestion();
}

function shuffleQuestions(quizQs) {
    for(let i = quizQs.length; i > 0; i--) {
      const j = Math.floor(Math.random() * (i+1));
      [quizQs[i], quizQs[j]] = [quizQs[j], quizQs[i]];
    }
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