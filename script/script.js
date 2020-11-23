const money = +prompt('Ваш месячный доход?'),
  income = 'Подработка',
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
  deposit = confirm('Есть ли у Вас депозит в банке?'),
  mission  = 150000,
  period = 6,
  expenses1 = prompt('Введите обязательную статью расходов'),
  expenses2 = prompt('Введите обязательную статью расходов'),
  emount1 = +prompt('Во сколько это обойдется?'),
  emount2 = +prompt('Во сколько это обойдется?');
  budgetMonth = money - (emount1 + emount2);
  budgetDay = budgetMonth / 30;

console.log(typeof money, typeof income, typeof deposit);
console.log(addExpenses.length);
console.log('Период равен' + ' ' + period + ' ' + 'месяцев');
console.log('Цель заработать' + ' ' + mission + ' ' + 'рублей');
console.log(addExpenses.toLowerCase().split(', '));
console.log('Бюджет на день:' + ' ' + Math.floor(budgetDay));
console.log('Бюджет на месяц:' + ' ' + budgetMonth);
console.log('Цель будет достигнута через:' + ' ' + Math.ceil (mission / budgetMonth) + ' ' + 'месяцев');


if (budgetDay >= 1200) {
  console.log('У Вас высокий уровень дохода');
} else if (budgetDay < 1200 & budgetDay >=600) {
  console.log('У Вас средний уровень дохода');
} else if (budgetDay < 600 & budgetDay >= 0) {
  console.log('К сожалению у Вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
  console.log('Что-то пошло не так');
};


 



