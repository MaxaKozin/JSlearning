'use strict';

let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: false
};

expencesInput: for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = +prompt('Во сколько обойдется?', '');

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
        console.log('all OK');
        appData.expences[a] = b;
    } else {
        continue expencesInput;
    };
};

// let i = 0;
// while (i < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = +prompt('Во сколько обойдется?', '');

//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log('all OK');
//         appData.expences[a] = b;
//     } else {

//     };

//     i++;
// };

// let i = 0;
// do {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = +prompt('Во сколько обойдется?', '');

//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log('all OK');
//         appData.expences[a] = b;
//     } else {

//     };
//     i++;
// } while (i < 2);

appData.moneyPerDay = appData.budget / 30;
alert("Бюджет на один день составляет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('So low');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Medium salary');
} else if (appData.moneyPerDay > 2000) {
    console.log('High salary');
} else {
    console.log('Error');
};
