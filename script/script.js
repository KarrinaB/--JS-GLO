const money = +prompt('Ваш месячный доход?'),
  income = 'Подработка',
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
  deposit = confirm('Есть ли у Вас депозит в банке?'),
  mission  = 150000,
  period = 6,
  expenses1 = prompt('Введите обязательную статью расходов'),
  emount1 = +prompt('Во сколько это обойдется?'),
  expenses2 = prompt('Введите обязательную статью расходов'),
  emount2 = +prompt('Во сколько это обойдется?'),
  accumulatedMonth = getAccumulatedMonth(),
  budgetDay = accumulatedMonth / 30;
 

function showTypeOf (data){
  console.log(typeof(data));
};

showTypeOf(money);
showTypeOf(deposit);
showTypeOf(income);

console.log('Цель заработать' + ' ' + mission + ' ' + 'рублей');
console.log(addExpenses.toLowerCase().split(', '));
console.log('Бюджет на день:' + ' ' + Math.floor(budgetDay));
console.log('Цель будет достигнута через:' + ' ' + Math.ceil (getTargetMonth()) + ' ' + 'месяцев');
console.log('Расходы за месяц: ' + getExpensesMonth());
getStatusIncome();

function getStatusIncome(){
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


function getExpensesMonth(){
  return emount1 + emount2;
};

function getTargetMonth(){
  return mission / accumulatedMonth;
};

function getAccumulatedMonth(){
  return money - (emount1 + emount2);
};





