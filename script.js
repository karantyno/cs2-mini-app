document.addEventListener("DOMContentLoaded", () => {
    let tg = window.Telegram.WebApp; // Получаем объект Telegram
    tg.expand(); // Разворачиваем на весь экран

    let joinButton = document.getElementById("joinButton");
    joinButton.addEventListener("click", () => {
        tg.sendData("user_joined"); // Отправляем сигнал боту
        alert("Вы записаны на турнир!");
    });
});
