'use strict';

let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

console.log(money, time);

let appData = {
    budget : money,
    timeData : time,
    expences: {},
    optionalExpences : {},
    income : [],
    savings : false
}
let strictExpences = prompt('Введите обязательную статью расходов в этом месяце', ''),
    strictExpencesValue = prompt('Во сколько обойдется?', ''),
    strictExpences2 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    strictExpencesValue2 = prompt('Во сколько обойдется?', '');

appData.expences.strictExpences = strictExpencesValue;
appData.expences.strictExpences2 = strictExpencesValue2;

console.log(appData.expences);

alert(appData.budget/30);


