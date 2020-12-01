'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;

const start = function() {
  do {
    money = prompt('Ваш месячный доход?');
  } while (isNaN(parseFloat(money)));
};
start();

let expenses1,
  expenses2;
const income = 'Подработка',
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
  deposit = confirm('Есть ли у Вас депозит в банке?'),
  mission  = 150000,
  period = 6;
  
  const getExpensesMonth = function() {
    let sum = 0,
      quest = 0;
    for (let i = 0; i < 2; i++) {
  
      if (i === 0) {
        expenses1 = prompt('Введите обязательную статью расходов');
      } else if (i === 1) {
        expenses2 = prompt('Введите обязательную статью расходов');
      };
      do {
        quest = prompt('Во сколько это обойдется?');
      } while (isNaN(parseFloat(quest)));
      sum += sum;
      };
  return sum;
    };
    console.log(getExpensesMonth());
    
   



const expensesAmount = getExpensesMonth();

const getAccumulatedMonth = function (){
  return money - expensesAmount;
};

const accumulatedMonth = getAccumulatedMonth();

const showTypeOf = function(data) {
  console.log(typeof(data));
};

const budgetDay = accumulatedMonth / 30;

showTypeOf(money);
showTypeOf(deposit);
showTypeOf(income);



const  getTargetMonth = function() {
  return mission / accumulatedMonth;
};
getTargetMonth();

const targetMonth = getTargetMonth();

const getStatusIncome = function() {
  if (budgetDay >= 1200) {
    console.log('У Вас высокий уровень дохода');

  } else if (budgetDay < 1200 & budgetDay >=600) {
    console.log('У Вас средний уровень дохода');

  } else if (budgetDay < 600 & budgetDay >= 0) {
    console.log('К сожалению у Вас уровень дохода ниже среднего');

  } else if (budgetDay < 0) {
    console.log('Что-то пошло не так');
  };
};
getStatusIncome();

const getThere = function (){
  if (targetMonth >= 0) {
    console.log('Цель будет достигнута через:' + ' ' + Math.ceil (getTargetMonth()) + ' ' + 'месяцев');   
  } else if (targetMonth < 0) {
    console.log('Цель не будет достигнута:(');
};
};
getThere();

console.log('Цель заработать' + ' ' + mission + ' ' + 'рублей');
console.log(addExpenses.toLowerCase().split(', '));
console.log('Бюджет на день:' + ' ' + Math.floor(budgetDay));
console.log('Расходы за месяц: ' + expensesAmount);

