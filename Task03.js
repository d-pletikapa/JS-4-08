'use strict';
console.log('Задание 3:');

//TODO: Скопируйте код task02.js в task03.js
//TODO: Добавьте 4-ый опциональный параметр у функции
//TODO:
//TODO: 4-ый опциональный параметр это строка:
//TODO:     • если функция получает 'even', то функция возвращает массив чётных чисел
//TODO:     • если функция получает 'odd', то функция возвращает массив нечётных чисел


const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    // The maximum is inclusive and the minimum is inclusive
}

const randomArray = (itemAmount, n, m, evenOrodd) => {
    const newArr = [];
    let result = null;
    itemAmount -= 1;

    for (let i = 0; i <= itemAmount; i++ ) {
        newArr.push(getRandom(n, m));
    }

    newArr.map((item, index, array) => {

        switch (evenOrodd) {
            case 'even':
                result = array.filter(item => item %2 === 0);
                console.log("-> show even");
                break

            case 'odd':
                result = array.filter(item => item %2 !== 0);
                console.log("-> show odd");
                break
        }

    })

return result;

};

console.log("-> newArr", randomArray(20, 1, 20, 'even'));