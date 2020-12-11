'use strict';

let mainStart = document.getElementById('start'), 
    cancel = document.getElementById('cancel'),
    btnIncomeAdd = document.getElementsByTagName('button')[0], 
    btnExpensesAdd = document.getElementsByTagName('button')[1], 
    depositCheck = document.querySelector('#deposit-check'), 
    additionalIncomeItem1 = document.getElementsByClassName('additional_income-item')[0], 
    additionalIncomeItem2 = document.getElementsByClassName('additional_income-item')[1],
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0], 
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0], 
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0], 
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0], 
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0], 
    targetMonthValue = document.getElementsByClassName('target_month-value')[0], 
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('input.income-title'),
    expensesTitle = document.querySelector('input.expenses-title'), 
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'), 
    depositAmount = document.querySelector('.deposit-amount'), 
    depositPercent = document.querySelector('.deposit-percent'),
    targetAmount = document.querySelector('.target-amount'), 
    periodSelect = document.querySelector('.period-select'),
    incomeItems = document.querySelectorAll('.income-items'),
    periodAmount = document.querySelector('.period-amount'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesAmount = document.querySelector('.expenses-amount');
    
    
const appData = {
  income: {},
  addIncome: [],
  incomeMonth: 0,
  expenses: {},
  addExpenses: [],
  deposit: false,
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  targetMonth: 0,
  percentDeposit: 0,
  moneyDeposit: 0,
  
  
  start: function() { 
    
    appData.budget = +salaryAmount.value;
    

    appData.getExpenses();
    
    appData.getIncome();
    appData.getExpensesMonth();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.getTargetMonth();
    appData.getBudget();
    appData.startFunc();
    appData.showResult();
    
  },
  

  startFunc: function(){
    if(salaryAmount.value === ''){
      mainStart.disabled = 'disabled';
      return;
    } else {
      mainStart.removeAttribute('disabled');
    }
    
  },
  showResult: function(){
      budgetMonthValue.value = this.budgetMonth;
      budgetDayValue.value = Math.ceil(this.budgetDay);
      expensesMonthValue.value = this.expensesMonth;
      additionalExpensesValue.value = this.addExpenses.join(', ');
      additionalIncomeValue.value = this.addIncome.join(', ');
      targetMonthValue.value = Math.ceil(this.getTargetMonth());
      incomePeriodValue.value = this.calcSavedMoney();
      periodSelect.addEventListener('input', function(){
        appData.calcSavedMoney();
        appData.showResult();
      });
      
  },
  addIncomeBlock: function() {
    let cloneIncomeItems = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItems, btnIncomeAdd);
    incomeItems = document.querySelectorAll('.income-items');
      if(incomeItems.length === 3){
        btnIncomeAdd.style.display = 'none';
      }
  },
  addExpensesBlock: function(){
      
      let cloneExpensesItems = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItems, btnExpensesAdd);
      expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
          btnExpensesAdd.style.display = 'none';
        }
  },
  getExpenses: function(){
    expensesItems.forEach (function(item) {
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== ''){
          appData.expenses[itemExpenses] = +cashExpenses;
        }
    });
  },
  getIncome: function(){
    incomeItems.forEach (function(item) {
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if(itemIncome !== '' && cashIncome !== ''){
          appData.income[itemIncome] = +cashIncome;
        }
      });
  },
  getAddExpenses: function(){
    let addExpenses = additionalExpensesItem.value.split(', ');
    addExpenses.forEach(function(item){
      item = item.trim();
      if(item !== ''){
        appData.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function(){
    additionalIncomeItem.forEach(function(item){
      let itemValue = item.value.trim();
      if(itemValue !== ''){
        appData.addIncome.push(itemValue);
      }
    });
  },
  getExpensesMonth: function(){
      for(let key in appData.expenses) {
        appData.expensesMonth += appData.expenses[key];
    };
  },
  getBudget: function() {
    appData.budgetMonth = +appData.budget - Number(expensesAmount.value) + Number(incomeAmount.value);
    appData.budgetDay = this.budgetMonth / 30;
  },
  getTargetMonth: function(){
    return targetAmount.value / appData.budgetMonth;
  },
  getPeriodSelect: function(){
    periodAmount.innerHTML = periodSelect.value;
  },
  getInfoDeposit: function () {
    if(appData.deposit = confirm('Есть ли у Вас депозит в банке?')){
      do {
        appData.percentDeposit = prompt('Какой годовой процент?');
      } while (isNaN(parseFloat(appData.percentDeposit)));
      do {
        appData.moneyDeposit = prompt('Какая сумма заложена?');
      } while (isNaN(parseFloat(appData.moneyDeposit)));
      
    }
  },
  calcSavedMoney: function() {
    return this.budgetMonth * periodSelect.value;
  },
  reset: function(){
    additionalIncomeItem1.value = '';
    additionalIncomeItem2.value = '';
    budgetDayValue.value = '';
    budgetMonthValue.value = '';
    expensesMonthValue.value = '';
    additionalIncomeValue.value = '';
    additionalExpensesValue.value = '';
    incomePeriodValue.value = '';
    targetMonthValue.value = '';
    salaryAmount.value = '';
    incomeTitle.value = '';
    expensesTitle.value = '';
    expensesItems.value = '';
    additionalExpensesItem = '';
    depositAmount.value = '';
    targetAmount.value = '';
    periodSelect.value = 0;
    incomeItems.value = '';
    incomeAmount.value = '';
    expensesAmount.value = '';
    incomeAmount.value = '';
    periodAmount.innerHTML = periodSelect.value;
},
  };

function newStart(){
  mainStart.addEventListener('click', appData.start);
};

newStart.apply(appData);

mainStart.addEventListener('click', function(){
  salaryAmount.setAttribute("readonly", "readonly");
  incomeTitle.setAttribute("readonly", "readonly");
  incomeAmount.setAttribute("readonly", "readonly");
  expensesTitle.setAttribute("readonly", "readonly");
  expensesAmount.setAttribute("readonly", "readonly");
  additionalExpensesItem.setAttribute("readonly", "readonly");
  targetAmount.setAttribute("readonly", "readonly");
  additionalIncomeItem1.setAttribute("readonly", "readonly");
  additionalIncomeItem2.setAttribute("readonly", "readonly");
  mainStart.style.display = "none";
  cancel.style.display = "block";
  
});


salaryAmount.addEventListener('input', appData.startFunc);
appData.startFunc();
btnExpensesAdd.addEventListener('click', appData.addExpensesBlock);
btnIncomeAdd.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.getPeriodSelect);
cancel.addEventListener('click', appData.reset);



