'use strict';
console.log('Сложное задание 1:');

//TODO: Создайте файл game01.js
//TODO: Написать простой игровой бот "Угадай число", который умеет следующее:

//TODO: • Загадывает число от 1 до 100;

//TODO: • предлагает пользователю ввести свой вариант отгадки;

//TODO: • если пользовательское число больше, чем загаданное,
// то бот выводит “Меньше!” и предлагает ввести новый вариант;

//TODO: • если пользовательское число меньше, чем загаданное,
// то бот выводит “Больше!” и предлагает ввести новый вариант;

//TODO: • если пользователь вводит правильное число,
// то бот выводит “Правильно!”;

//TODO: • если пользователь ввел не число,
// то выводит “Введи число!”;

//TODO: • если пользователь нажимает “Отмена”,
// то игра заканчивается.

const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    // The maximum is inclusive and the minimum is inclusive
}

const newGame = () => {
    const randomNumber = getRandom(1, 100);
    console.log('randomNumber =', randomNumber);
    alert('Бот загадал число от 1 до 100, попробуй его отгадать!');
    let playerNumber = 0;

        while (+playerNumber !== randomNumber) {
            // playerNumber = +playerNumber;
            if (Number.isNaN(parseFloat(+playerNumber))) {
                playerNumber = prompt(`${playerNumber} - не число, Введи число! : `);
                console.log('playerNumber', playerNumber);
            } else if (playerNumber === 0) {
                playerNumber = prompt('Угадай моё число! : ', 50);
                console.log('playerNumber', playerNumber);

            } else if (playerNumber < randomNumber && playerNumber !== 0 && playerNumber !== null) {
                playerNumber = prompt('Больше! : ', playerNumber);
                console.log('playerNumber', playerNumber);
            } else if (playerNumber > randomNumber && playerNumber !== 0 && playerNumber !== null) {
                playerNumber = prompt('Меньше! : ', playerNumber);
                console.log('playerNumber', playerNumber);
            } else if (playerNumber === null) {
                return alert('Заходи еще!')
            }
        }

    console.log(`playerNumber = randomNumber, ${playerNumber} = ${randomNumber}`)
    return alert(`Правильно! твой ответ: ${playerNumber} совпал с моим: ${randomNumber}`);
}

newGame();