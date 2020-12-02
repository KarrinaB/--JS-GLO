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
  deposit: false,
  mission: 150000,
  period: 6,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0 ,
  targetMonth: 0,
  asking: function() {
    let oneQuest,
      twoQuest;
      for (let i = 0; i < 2; i++) {
         oneQuest = prompt('Введите обязательную статью расходов');
      do {
        twoQuest = prompt('Во сколько это обойдется?');
        } while (isNaN(parseFloat(twoQuest)));
        appData.expenses[oneQuest] = Number(twoQuest);
  };
},
  getExpensesMonth: function(){
      for(let key in appData.expenses) {
        appData.expensesMonth += appData.expenses[key];
    };
  },
  getBudget: function() {
    appData.budgetMonth = Number(appData.budget) - appData.expensesMonth;
    appData.budgetDay = appData.budgetMonth / 30;
  },
  getTargetMonth: function(){
    appData.targetMonth = appData.mission / appData.budgetMonth;
},
  getStatusIncome: function() {
    if (appData.budgetDay >= 1200) {
      console.log('У Вас высокий уровень дохода');
  
    } else if (appData.budgetDay < 1200 & appData.budgetDay >=600) {
      console.log('У Вас средний уровень дохода');
  
    } else if (appData.budgetDay < 600 & appData.budgetDay >= 0) {
      console.log('К сожалению у Вас уровень дохода ниже среднего');
  
    } else if (appData.budgetDay < 0) {
      console.log('Что-то пошло не так');
    };
  },
  getThere: function (){
    if (appData.targetMonth >= 0) {
      console.log('Цель будет достигнута через:' + ' ' + Math.ceil (appData.targetMonth) + ' ' + 'месяцев');   
    } else if (appData.targetMonth < 0) {
      console.log('Цель не будет достигнута:(');
    };
  }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getThere();


console.log('Расходы за месяц: ' + appData.expensesMonth);

console.log('Наша программа включает в себя данные: ');
  for(let key in appData){
    console.log(key + ' ' + appData[key]);
  };

