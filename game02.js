'use strict';
console.log('Сложное задание 2:');

// Создайте файл game02.js
// Усовершенствуйте игру, которую написали в game01
// • бот предлагает ввести два числа, и загадывает случайное число в этом диапазоне
// • бот запоминает каждое число которое ввел пользователь и записывает в массив

// бот отграничивает количество попыток до 30% от количества цифр в диапазоне
// • если диапазон от 50 до 100, то попыток бот даёт 15
// если пользователь повторно ввел число, которое вводил ранее, то бот выводит "Это число вы уже вводили" попытка не засчитывается
// • если попытки закончились игра прекращается



const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    // The maximum is inclusive and the minimum is inclusive
}

const numberIsnumber = (anyNumber, typeNumber) => {
    while (Number.isNaN(parseFloat(anyNumber))) {
        anyNumber = prompt(`Ошибка ${anyNumber} - не число, введи ${typeNumber} число : `);
        console.log(`'${anyNumber}'`, anyNumber);
    }
}

const minNumber = prompt(`Введите минимальное число : `, '1');
numberIsnumber(minNumber, 'минимальное');

const maxNumber = prompt(`Введите максимальное число : `, '100');
numberIsnumber(maxNumber, 'максимальное');

let tryAmount;

if (maxNumber - minNumber > 50) {tryAmount = 15}
else
    {
        tryAmount = Math.floor((maxNumber - minNumber) * 0.3);
    }

const checkTryAmount = () =>
{
    if (playerNumber.some((item) => item === lastAnswer)) {
        console.log("-> tryAmount попытка не засчитывается вы уже вводили это число, попыток осталось: ", tryAmount);
    } else {
        tryAmount--;
        console.log("-> tryAmount -1 попытка, попыток осталось: ", tryAmount);
    }
}
console.log("-> tryAmount Попыток осталось ", tryAmount);

    const randomNumber = getRandom(minNumber, maxNumber);
    console.log('randomNumber =', randomNumber);

const playerNumber = [];
let lastAnswer;
console.log("-> playerNumber", playerNumber);
const findLastNumber = () => {
    return parseInt(playerNumber[playerNumber.length - 1])
}
    const newGame = () => {

        playerNumber.push(lastAnswer = prompt('Угадай моё число! (выйти - отмена) : ', '50'));
        console.log('findLastNumber()', findLastNumber(), playerNumber);

        while (+findLastNumber() !== randomNumber) {

            if (Number.isNaN(parseFloat(lastAnswer)) && lastAnswer !== null) {
                alert(`${lastAnswer} - не число`);

                playerNumber.pop();
                playerNumber.push((lastAnswer = prompt(`Введи число! : `)));
                console.log('findLastNumber()', findLastNumber());
                console.log("-> playerNumber", playerNumber);

            } else if (findLastNumber() < randomNumber && findLastNumber() !== null && tryAmount > 0) {

                lastAnswer = prompt('Больше! : ', findLastNumber())

                checkTryAmount();

                playerNumber.push(lastAnswer);
                console.log('findLastNumber()', findLastNumber());
                console.log("-> playerNumber", playerNumber);
            }
            else if (findLastNumber() > randomNumber && findLastNumber() !== null && tryAmount > 0) {
                lastAnswer = prompt('Меньше! : ', findLastNumber())

                checkTryAmount();

                playerNumber.push(lastAnswer);
                console.log('findLastNumber()', findLastNumber());
                console.log("-> playerNumber", playerNumber);
            }
            else if (tryAmount <= 0) {
                console.log("-> tryAmount Попыток осталось ", tryAmount);
                return  alert(`Ваши попытки закончились, осталось ${tryAmount}  - попыток`);
            }
            else if (lastAnswer === null) {
                return alert('Заходи еще!');
            }

        }
            console.log("-> playerNumber", playerNumber);
            console.log(`playerNumber = randomNumber, ${lastAnswer} = ${randomNumber}`);
            console.log("-> tryAmount Попыток осталось ", tryAmount);
            return alert(`Правильно! твой ответ: ${lastAnswer} совпал с моим: ${randomNumber}, Еще осталось попыток: ${tryAmount}`);

    }

newGame();