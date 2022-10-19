'use strict';
console.log('Тренировка:')

const scientists = ['Mendeleev', 'Aristotle',
    'Tesla', 'Curie', 'Darwin'];

const numbers = [152,3,22,33,15,2,'16',57,542,121];

scientists.forEach(
    (item, index, arr) => {
        console.log('forEach item, index, arr:', item, index, arr);
}
);

const newArr = numbers.map((item) => {
const n = item * 2;
if (n > 1000) return null;
return item;
})
console.log("-> map newArr", newArr);

const newArr1 = numbers.some((item) => typeof item === 'string')
console.log("-> some newArr1", newArr1);

const newArr2 = numbers.every((item) => typeof item === 'string')
console.log("-> every newArr2", newArr2);

const smallNumbers= [1, 2, 4]
const newArr3 = smallNumbers.reduce((acc, item, i, arr) => {
    console.log("-> acc | item", acc, item);
    return acc * item;
}, 1);

console.log("-> reduce newArr3", newArr3);


const items1 = numbers.find((
    item, i, arr) => {
        return item % 2;
});
console.log("-> find items1", items1);

const items2 = numbers.filter(item => item < 50);
console.log("-> filter items2", items2);


const items3 = numbers.findIndex(item => item < 50 && item > 30);
console.log("-> findIndex items3", items3);

const items4 = numbers.indexOf(33);
console.log("-> indexOf items4", items4);

const superDeepArr = [1,12,45,[56,98],54,33,88,23,[[23],[664]],[[76,545]],21];
console.log("->  flat", superDeepArr.flat(Infinity));



