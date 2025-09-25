const quizData = [
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "What does CSS stand for?",
        options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which year was JavaScript launched?",
        options: ["1996", "1995", "1994", "1997"],
        answer: "1995"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const scoreEl = document.getElementById('score');

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerHTML = currentQuizData.question;
    
    optionsEl.innerHTML = '';
    currentQuizData.options.forEach(option => {
        const button = document.createElement('button');
        button.innerHTML = option;
        button.addEventListener('click', () => selectOption(option));
        optionsEl.appendChild(button);
    });
    
    nextBtn.style.display = 'none';
}

function selectOption(selected) {
    const currentQuizData = quizData[currentQuestion];
    const options = optionsEl.querySelectorAll('button');
    
    options.forEach(option => {
        option.disabled = true;
        if (option.innerHTML === currentQuizData.answer) {
            option.style.borderColor = 'green';
            option.style.background = '#d4edda';
        } else if (option.innerHTML === selected && selected !== currentQuizData.answer) {
            option.style.borderColor = 'red';
            option.style.background = '#f8d7da';
        }
    });
    
    if (selected === currentQuizData.answer) {
        score++;
        scoreEl.innerHTML = `Score: ${score}`;
    }
    
    nextBtn.style.display = 'block';
}

nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        questionEl.innerHTML = `Quiz completed! Your score: ${score}/${quizData.length}`;
        optionsEl.innerHTML = '';
        nextBtn.style.display = 'none';
    }
});

loadQuestion();