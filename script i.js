(function() {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    const quizQuestions = [
        {
            question: "What does HTML stand for?",
            answers: {
                a: "Hyper Text Markup Language",
                b: "Home Tool Markup Language",
                c: "Hyperlinks and Text Markup Language"
            },
            correctAnswer: "a"
        },
        {
            question: "What is the purpose of CSS?",
            answers: {
                a: "To add functionality to the webpage",
                b: "To define the structure of a webpage",
                c: "To style and layout the webpage"
            },
            correctAnswer: "c"
        },
        {
            question: "Which programming language is used to add interactivity to a webpage?",
            answers: {
                a: "JavaScript",
                b: "Python",
                c: "PHP"
            },
            correctAnswer: "a"
        }
    ];

    function buildQuiz() {
        const output = [];

        quizQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];

            for (let letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            output.push(
                `<div class="question">${currentQuestion.question}</div>
                <div class="answers">${answers.join('')}</div>`
            );
        });

        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');

        let numCorrect = 0;

        quizQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'green';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        resultsContainer.innerHTML = `You got ${numCorrect} out of ${quizQuestions.length} correct!`;
    }

    buildQuiz();

    submitButton.addEventListener('click', showResults);
})();
