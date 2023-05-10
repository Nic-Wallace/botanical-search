// questions for quiz
const quizData = [
    {
        question: "How many arches can you find in the picture?",
        a: "6",
        b: "7",
        c: "8",
        d: "9",
        correct: "c",
    },
    {
        question: "How many orange butterflies can you find in the picture?",
        a: "9",
        b: "10",
        c: "11",
        d: "12",
        correct: "b",
    },
    {
        question: "How many flamingos can you find in the picture?",
        a: "26",
        b: "35",
        c: "29",
        d: "32",
        correct: "d",
    },
    {
        question: "How many purple flowers can you find in the picture?",
        a: "9",
        b: "10",
        c: "11",
        d: "12",
        correct: "a",
    },
    {
        question: "How many people wearing the colour red can you find in the picture?",
        a: "9",
        b: "6",
        c: "12",
        d: "15",
        correct: "a",
    },
    {
        question: "How many vertical gardens can you find in the picture?",
        a: "13",
        b: "14",
        c: "15",
        d: "16",
        correct: "c",
    },
    {
        question: "How many waterfalls can you find in the picture?",
        a: "8",
        b: "9",
        c: "10",
        d: "11",
        correct: "c",
    },
];

// variables for questions, next and running game
const quiz = document.getElementById("quiz")
const answerHTML = document.querySelectorAll(".answer")
const questionHTML = document.getElementById("question")
const questionA = document.getElementById("question-a")
const questionB = document.getElementById("question-b")
const questionC = document.getElementById("question-c")
const questionD = document.getElementById("question-d")
const nextButton = document.getElementById("next-btn")
let currentQuestion = 0
let score = 0
loadQuestion()
function loadQuestion() {
    uncheckAnswers()
    const currentQuestionInput = quizQs[currentQuestion]
    questionHTML.innerText = currentQuestionInput.question
    questionA.innerText = currentQuestionInput.a
    questionB.innerText = currentQuestionInput.b
    questionC.innerText = currentQuestionInput.c
    questionD.innerText = currentQuestionInput.d
}
function uncheckAnswers() {
    answerHTMLs.forEach(answerHTML => answerHTML.checked = false)
}