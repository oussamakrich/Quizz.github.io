const questions = [
    {
        question: "Which is largest animal in the world?",
        ansewrs:[
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        ansewrs:[
            { text: "Vatican City", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Shri Lanka", correct: false },
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        ansewrs:[
            { text: "kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true },
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        ansewrs:[
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
        ]
    }
]

const questionElement = document.getElementById("question");
const ansewrsButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '.' + currentQuestion.question;

    currentQuestion.ansewrs.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        ansewrsButtons.appendChild(button);
        if (answer.correct)
            button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
    });

}

function resetState(){
    nextButton.style.display = "none";
    while (ansewrsButtons.firstChild)
        ansewrsButtons.removeChild(ansewrsButtons.firstChild);
}

function selectAnswer(e){
    const selectedBtn = e.target;
    if (selectedBtn.dataset.correct){
        selectedBtn.classList.add("correct");
        score++;
    }
    else
        selectedBtn.classList.add("incorrect");
    Array.from(ansewrsButtons.children).forEach(button => {
            if (button.dataset.correct === "true")
                button.classList.add("correct");
            button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length)
        showQuestion();
    else
        showScore();
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length)
        handleNextButton();
    else
        startQuiz();
});

startQuiz();


































