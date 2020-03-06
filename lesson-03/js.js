'use strict';

let money, time;

let appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: false
};

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    appData.budget = money;
    appData.timeData = time;
}

function detectDayBudget() {
    appData.moneyPerDay = money / 30;
    alert("Бюджет на один день составляет: " + appData.moneyPerDay);
}

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('So low');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Medium salary');
    } else if (appData.moneyPerDay > 2000) {
        console.log('High salary');
    } else {
        console.log('Error');
    };
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

function detectOptionalExpences() {
    for (let i = 1; i < 4; i++) {
        let a = +prompt('Введите статью необязательных расходов:', '');
        appData.optionalExpences[i] = a;
    };
}

start();
detectExpences();
detectDayBudget();
detectLevel();
detectOptionalExpences();


