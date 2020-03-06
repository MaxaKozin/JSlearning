'use strict';


function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

function detectExpences() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = +prompt('Во сколько обойдется?', '');

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('all OK');
            appData.expences[a] = b;
        } else {
            console.log('Error!');
            i--;
        };
    };
}

function detectLevel () {
    if (moneyPerDay < 100) {
        console.log('So low');
    } else if (moneyPerDay > 100 && moneyPerDay < 2000) {
        console.log('Medium salary');
    } else if (moneyPerDay > 2000) {
        console.log('High salary');
    } else {
        console.log('Error');
    };
}

function detectOptionalExpences() {
    for (let i = 0; i < 3; i++) {
        let a = +prompt('Введите статью необязательных расходов:', ''),
            if ((typeof (a)) === 'number' && (typeof (a)) != null && a != '' && a.length < 50) {
            console.log('all OK');
            appData.expences[a] = b;
        } else {
            console.log('Error!');
            i--;
        };
    };
}

let money, time, moneyPerDay, optionalExpences;

let appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: false
};

function detectDayBudget() {
    appData.moneyPerDay = money / 30;
    alert("Бюджет на один день составляет: " + appData.moneyPerDay);
}




// let i = 0;
// while (i < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = +prompt('Во сколько обойдется?', '');

//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log('all OK');
//         appData.expences[a] = b;
//     } else {
//         console.log('Error!');
//         i--;
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
//         console.log('Error!');
//         i--;
//     };
//     i++;
// } while (i < 2);
start();
detectExpences();
detectDayBudget();
detectLevel();


