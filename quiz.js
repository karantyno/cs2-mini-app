document.addEventListener("DOMContentLoaded", () => {
    const questionElement = document.getElementById("question");
    const imageElement = document.getElementById("question-image");
    const answersElement = document.getElementById("answers");
    const nextButton = document.getElementById("next");

    const quizData = [
        {
            question: "Какое оружие наносит самый большой урон в CS2?",
            image: null, 
            answers: ["AWP", "AK-47", "Бизон-Бизоныч"],
            correct: "Бизон-Бизоныч"
        },
        {
            question: "Сколько секунд длится стандартный раунд в CS2 (без установки бомбы)?",
            image: null, 
            answers: ["90 секунд", "120 секунд", "180 секунд"],
            correct: "120 секунд"
        },
        {
            question: "Что значит фаст раш?",
            image: null, 
            answers: [
                "Раскидка гранат всей командой",
                "Быстрое занятие какой-либо позиции",
                "Часть команды бежит на А, остальная на Б, часть тормозит на респе"
            ],
            correct: "Часть команды бежит на А, остальная на Б, часть тормозит на респе"
        },
        {
            question: "Что это за карта?",  
            image: "dast.jpg", 
            answers: ["de_dust", "de_aztec", "cs_mansion"],
            correct: "de_dust"
        }
    ];

    let currentQuestionIndex = 0;
    let answered = false; // Флаг, чтобы нельзя было нажать несколько раз на ответы

    function showQuestion() {
        answered = false;
        const currentQuestion = quizData[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;

        // Показываем картинку, если она есть
        if (currentQuestion.image) {
            imageElement.src = currentQuestion.image;
            imageElement.style.display = "block";
        } else {
            imageElement.style.display = "none";
        }

        // Убираем старые ответы
        answersElement.innerHTML = "";
        nextButton.style.display = "none"; // Скрываем кнопку "Далее"

        // Создаем кнопки с вариантами ответов
        currentQuestion.answers.forEach((answer) => {
            const button = document.createElement("button");
            button.textContent = answer;
            button.classList.add("game-button");
            button.onclick = () => checkAnswer(button, answer);
            answersElement.appendChild(button);
        });
    }

    function checkAnswer(button, selectedAnswer) {
        if (answered) return; // Блокируем повторное нажатие

        answered = true;
        const currentQuestion = quizData[currentQuestionIndex];

        if (selectedAnswer === currentQuestion.correct) {
            button.style.backgroundColor = "green";
        } else {
            button.style.backgroundColor = "red";
        }

        nextButton.style.display = "block"; // Показываем кнопку "Далее"
    }

    nextButton.addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            showQuestion();
        } else {
            questionElement.textContent = "Вы прошли тест!";
            imageElement.style.display = "none";
            answersElement.innerHTML = "";
            nextButton.style.display = "none";
        }
    });

    showQuestion();
});
