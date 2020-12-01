'use strict';

let money;

const start = function() {
  do {
    money = prompt('Ваш месячный доход?');
  } while (isNaN(parseFloat(money)));
};
start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  budget: 'money',
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  getExpensesMonth: function(){
    //let sum = 0,
      //quest = 0;
    for (let i = 0; i < 2; i++) {
  
      if (i === 0) {
        expenses1 = prompt('Введите обязательную статью расходов');
      } else if (i === 1) {
        expenses2 = prompt('Введите обязательную статью расходов');
      };
      do {
        quest = prompt('Во сколько это обойдется?');
      } while (isNaN(parseFloat(quest)));
      sum += +quest;
      };
  return sum;
    },
  getAccumulatedMonth: function(){
    return money - expensesAmount;
  },
  getTargetMonth: function(){
    return mission / accumulatedMonth;
  },
  getStatusIncome: function() {
    if (budgetDay >= 1200) {
      console.log('У Вас высокий уровень дохода');
  
    } else if (budgetDay < 1200 & budgetDay >=600) {
      console.log('У Вас средний уровень дохода');
  
    } else if (budgetDay < 600 & budgetDay >= 0) {
      console.log('К сожалению у Вас уровень дохода ниже среднего');
  
    } else if (budgetDay < 0) {
      console.log('Что-то пошло не так');
    };
  },
  asking: function() {
      for (let i = 0; i < 2; i++) {
         let oneQuest = prompt('Введите обязательную статью расходов');
         let twoQuest;
      };
      do {
        let twoQuest = prompt('Во сколько это обойдется?');
        } while (isNaN(parseFloat(twoQuest)));
        appData.expenses[oneQuest] = twoQuest;
  }
    };

  
//};
appData.asking();

let expenses1,
  expenses2;
const income = 'Подработка',
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
  deposit = confirm('Есть ли у Вас депозит в банке?'),
  mission  = 150000,
  period = 6;
    
const expensesAmount = appData.getExpensesMonth();
const accumulatedMonth = appData.getAccumulatedMonth();

const budgetDay = accumulatedMonth / 30;
 
appData.getTargetMonth();

const targetMonth = appData.getTargetMonth();

appData.getStatusIncome();

const getThere = function (){
  if (targetMonth >= 0) {
    console.log('Цель будет достигнута через:' + ' ' + Math.ceil (appData.getTargetMonth()) + ' ' + 'месяцев');   
  } else if (targetMonth < 0) {
    console.log('Цель не будет достигнута:(');
};
};
getThere();

console.log('Цель заработать' + ' ' + mission + ' ' + 'рублей');
console.log(addExpenses.toLowerCase().split(', '));
console.log('Бюджет на день:' + ' ' + Math.floor(budgetDay));
console.log('Расходы за месяц: ' + expensesAmount);

