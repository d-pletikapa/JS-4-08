'use strict';
console.log('Задание 1:')

// TODO: Напишите функцию генератор массива случайных чисел в файле task01.js
// TODO: Функция принимает один обязательный параметр это количество элементов в массиве
// TODO: И возвращает массив со случайными числами от одного до 100 включительно;

const newArr = [];

const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    // The maximum is inclusive and the minimum is inclusive
}

const randomArray = (itemAmount) => {
    itemAmount -= 1;


    for (let i = 0; i <= itemAmount; i++ ) {
        newArr.push(getRandom(1, 100));
    }
    return newArr;
};

randomArray(20);
console.log("-> newArr", newArr);