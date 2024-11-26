const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true},
            { text: "Bhutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Sri Lanka", correct: false},
        ]

    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false},
            { text: "Sahara", correct: true},
            { text: "Antartica", correct: false},
        ]

    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
        ]

    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("nxt-btn");


let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    //whenever we start the quiz reset the score and question index as 0
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    
}

function showQuestion(){
    resetState();
    // goes through each question and updates...works as a loop
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    // this one just displays the question with the question No
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // goes through the answers
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        // display the text provided in the answers in these buttons
        button.innerHTML = answer.text;
        button.classList.add("btn");
        // this appends the buttons in the div 
        answerButtons.appendChild(button);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
startQuiz();
