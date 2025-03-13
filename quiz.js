document.addEventListener("DOMContentLoaded", () => {
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    const quizData = [
        {
            question: "Какое оружие наносит самый большой урон в CS2?",
            answers: {
                a: "AWP",
                b: "Desert Eagle",
                c: "Бизон-Бизоныч"
            },
            correct: "a"
        },
        {
            question: "Сколько секунд длится стандартный раунд в CS2 (без установки бомбы)?",
            answers: {
                a: "90 секунд",
                b: "120 секунд",
                c: "180 секунд"
            },
            correct: "b"
        },
        {
          question: "Что значит фаст раш?"
            answers: {
                a: "Раскидка гранат всей командой",
                b: "быстрое занятие какой-либо позиции",
                c: "часть команды бежит на А, остальная на Б, часть тормозит на респе"
            },
            correct: "b"
    ];

    function buildQuiz() {
        const output = [];
        quizData.forEach((questionData, index) => {
            const answers = [];
            for (let letter in questionData.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${index}" value="${letter}">
                        ${letter}: ${questionData.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question"> ${questionData.question} </div>
                <div class="answers"> ${answers.join(" ")} </div>`
            );
        });
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        let score = 0;
        quizData.forEach((questionData, index) => {
            const selector = `input[name=question${index}]:checked`;
            const userAnswer = (document.querySelector(selector) || {}).value;
            if (userAnswer === questionData.correct) {
                score++;
            }
        });
        resultsContainer.innerHTML = `Вы набрали ${score} из ${quizData.length}!`;
    }

    buildQuiz();
    submitButton.addEventListener("click", showResults);
});
