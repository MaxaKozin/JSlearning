'use strict';

let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

console.log(money, time);

let strictExpences = prompt('Введите обязательную статью расходов в этом месяце', '');
let strictExpencesValue = +prompt('Во сколько обойдется?', '');
let expences = {};
expences[strictExpences] = strictExpencesValue;

let appData = {
    budget : money,
    timeData : time,
    expences,
    optionalExpences : {},
    income : [],
    savings : false
}

alert("Бюджет на 1 день составляет : " + money/30 + " USD");


