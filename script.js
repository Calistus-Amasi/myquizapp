const questions = [
    {
        question: 'What is the first book in the bible?',
        answers: [
            { text: 'Galathians', correct: 'false' },
            { text: 'Exodus', correct: 'false' },
            { text: 'Daniel', correct: 'false' },
            { text: 'Genesis', correct: 'true' },
        ]
    },

    {
        question: 'How many days did God take to create the world?',
        answers: [
            { text: '7', correct: 'false' },
            { text: '6', correct: 'true' },
            { text: '5', correct: 'false' },
            { text: '4', correct: 'false' },
        ]
    },

    {
        question: 'Who was the first man created by God in the bible?',
        answers: [
            { text: 'Isaac', correct: 'false' },
            { text: 'Abel', correct: 'false' },
            { text: 'Adam', correct: 'true' },
            { text: 'Cain', correct: 'false' },
        ]
    },

    {
        question: 'Who did God instructed to build an ark?',
        answers: [
            { text: 'Adam', correct: 'false' },
            { text: 'Noah', correct: 'true' },
            { text: 'Abraham', correct: 'false' },
            { text: 'Enoch', correct: 'false' },
        ]
    },

    {
        question: 'Adam and Eve gave birth to three sons?',
        answers: [
            { text: 'Andrew, Jacob, Esau', correct: 'false' },
            { text: 'Peter, James, John', correct: 'false' },
            { text: 'Cain, Abel, Seth', correct: 'true' },
            { text: 'Jeremiah, Ezekiel, Philip', correct: 'false' },
        ]
    },

    {
        question: 'How many days and night did it rain when Noah was on the ark?',
        answers: [
            { text: '60days', correct: 'false' },
            { text: '50days', correct: 'false' },
            { text: '45days', correct: 'false' },
            { text: '40days', correct: 'true' },
        ]
    },

    {
        question: 'How many brothers did Joseph have?',
        answers: [
            { text: '12', correct: 'false' },
            { text: '11', correct: 'true' },
            { text: '10', correct: 'false' },
            { text: '9', correct: 'false' },
        ]
    },

    {
        question: "What was God's sign to Noah that he would never destroy the earth again?",
        answers: [
            { text: 'A raincoat', correct: 'false' },
            { text: 'A rainboat', correct: 'false' },
            { text: 'A rainbow', correct: 'true' },
            { text: 'A raindrop', correct: 'false' },
        ]
    },

    {
        question: 'Where did Adam and Eve live at the beginning of the world?',
        answers: [
            { text: 'Paradise Garden', correct: 'false' },
            { text: 'Garden of Rose', correct: 'false' },
            { text: 'Garden of Everest', correct: 'false' },
            { text: 'Garden of Eden', correct: 'true' },
        ]
    },

    {
        question: 'What did Jacob give to Joseph that sparked jealousy from his brothers?',
        answers: [
            { text: 'A coat of love', correct: 'false' },
            { text: 'A coat of purity', correct: 'false' },
            { text: 'A coat of many colors', correct: 'true' },
            { text: 'A coat of majesty', correct: 'false' },
        ]
    },

    {
        question: 'What trigger hate from Joseph brothers?',
        answers: [
            { text: 'His Star', correct: 'false' },
            { text: 'His Dreams', correct: 'true' },
            { text: 'His Pride', correct: 'false' },
            { text: 'His Father love', correct: 'false' },
        ]
    },

    {
        question: "How did Moses' mother save him from the Egyptian soldiers?",
        answers: [
            { text: 'Put him inside a boat in the river', correct: 'false' },
            { text: 'Put him inside ship in the river', correct: 'false' },
            { text: 'Put him inside a basket in the river', correct: 'true' },
            { text: 'Put him inside a canoe in the river', correct: 'false' },
        ]
    },

    {
        question: 'Through what did God speak to Moses in the desert?',
        answers: [
            { text: 'A burning tree', correct: 'false' },
            { text: 'A burning bush', correct: 'true' },
            { text: 'A burning leave', correct: 'false' },
            { text: 'A burning dustbin', correct: 'false' },
        ]
    },

    {
        question: 'How many plagues did God send on Egypt?',
        answers: [
            { text: '12', correct: 'false' },
            { text: '11', correct: 'false' },
            { text: '13', correct: 'false' },
            { text: '10', correct: 'true' },
        ]
    },

    {
        question: 'Where did God give Moses the Ten Commandments?',
        answers: [
            { text: 'Mountain Everest', correct: 'false' },
            { text: 'Mountain Sinai', correct: 'true' },
            { text: 'Mountain Kilimanjaro', correct: 'false' },
            { text: 'Mountain Carmel', correct: 'false' },
        ]
    },

    {
        question: 'Who was the first king of isreal?',
        answers: [
            { text: 'Saul', correct: 'true' },
            { text: 'Samuel', correct: 'false' },
            { text: 'David', correct: 'false' },
            { text: 'Solomon', correct: 'false' },
        ]
    },

    {
        question: 'Who was Jesus adoptive father on Earth?',
        answers: [
            { text: 'Jacob', correct: 'false' },
            { text: 'Joseph', correct: 'true' },
            { text: 'John', correct: 'false' },
            { text: 'Jeremiah', correct: 'false' },
        ]
    },

    {
        question: 'Name the city Jesus was born?',
        answers: [
            { text: 'Isreal', correct: 'false' },
            { text: 'Nazareth', correct: 'false' },
            { text: 'Bethlehem', correct: 'true' },
            { text: 'Capernaum', correct: 'false' },
        ]
    },

    {
        question: "Name Jesus' hometown?",
        answers: [
            { text: 'Bathlehem', correct: 'false' },
            { text: 'Nazareth', correct: 'true' },
            { text: 'Isreal', correct: 'false' },
            { text: 'Capernaum', correct: 'false' },
        ]
    },

    {
        question: 'What is the shortest verse in the bible?',
        answers: [
            { text: 'John 3:16', correct: 'false' },
            { text: 'John 6:2', correct: 'false' },
            { text: 'John 11:35', correct: 'true' },
            { text: 'John 16:5', correct: 'false' },
        ]
    },

    {
        question: 'How many bread and fish did Jesus use to feed more than 5,000 peoples?',
        answers: [
            { text: '10 loaves and 2 fishes', correct: 'false' },
            { text: '5 loaves and 2 fishes', correct: 'true' },
            { text: '4 loaves and 5 fishes', correct: 'false' },
            { text: '8 loaves and 4 fishes', correct: 'false' },
        ]
    },

    {
        question: 'What did Jesus do at the last super to his disciples?',
        answers: [
            { text: 'Speak in tongues', correct: 'false' },
            { text: 'Washed their feet', correct: 'true' },
            { text: 'Pray with them', correct: 'false' },
            { text: 'Preach God Kingdom to them', correct: 'false' },
        ]
    },

    {
        question: 'What did the woman pour on Jesus feet at the home of Simon the Leper?',
        answers: [
            { text: 'Jar of expensive perfume', correct: 'true' },
            { text: 'Jar of expensive olive oil', correct: 'false' },
            { text: 'Jar of expensive pomade', correct: 'false' },
            { text: 'Jar of expensive vaseline', correct: 'false' },
        ]
    },

    {
        question: 'Which among the disciples betrayed Jesus?',
        answers: [
            { text: 'Simon Peter', correct: 'false' },
            { text: 'James', correct: 'false' },
            { text: 'John', correct: 'false' },
            { text: 'Judas Iscariot', correct: 'true' },
        ]
    },

    {
        question: 'Observe the Sabbath day and keep it holy?',
        answers: [
            { text: 'first Commandment', correct: 'false' },
            { text: 'Third Commandment', correct: 'false' },
            { text: 'Fifth Commandment', correct: 'true' },
            { text: 'Seventh Commandment', correct: 'false' },
        ]
    },

    {
        question: 'The greatest commandment of God?',
        answers: [
            { text: 'Sacrifice', correct: 'false' },
            { text: 'Charity', correct: 'false' },
            { text: 'Patience', correct: 'false' },
            { text: 'Love', correct: 'true' },
        ]
    },

    {
        question: 'Who received the 10 commandments from God?',
        answers: [
            { text: 'Abraham', correct: 'false' },
            { text: 'Isaac', correct: 'false' },
            { text: 'Moses', correct: 'true' },
            { text: 'Noah', correct: 'false' },
        ]
    },

    {
        question: 'How many books have the name John in them?',
        answers: [
            { text: 'One', correct: 'false' },
            { text: 'Two', correct: 'false' },
            { text: 'Three', correct: 'false' },
            { text: 'Four', correct: 'true' },
        ]
    },

    {
        question: 'Jesus rose on which day?',
        answers: [
            { text: 'Fourth day', correct: 'false' },
            { text: 'Third day', correct: 'true' },
            { text: 'Last day', correct: 'false' },
            { text: 'First day', correct: 'false' },
        ]
    },

    {
        question: 'Who among the disciples denied Jesus?',
        answers: [
            { text: 'Judas', correct: 'false' },
            { text: 'Peter', correct: 'true' },
            { text: 'Andrew', correct: 'false' },
            { text: 'James', correct: 'false' },
        ]
    }

];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
    })
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Your score ${score} out of ${questions.length}`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();