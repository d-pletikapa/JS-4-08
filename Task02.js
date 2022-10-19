'use strict';
console.log('Задание 2:');

//TODO: Функция принимает еще два параметра n и m
//TODO: Числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массива
//TODO: m и n включительно
//TODO: Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.

const newArr = [];

const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    // The maximum is inclusive and the minimum is inclusive
}

const randomArray = (itemAmount, n, m,) => {
    itemAmount -= 1;

    for (let i = 0; i <= itemAmount; i++ ) {
        newArr.push(getRandom(n, m));
    }

    return newArr;


};

randomArray(20, 1, 30);
console.log("-> newArr", newArr);