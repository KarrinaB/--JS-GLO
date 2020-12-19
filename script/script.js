'use strict';

const mainStart = document.getElementById('start'), 
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
    depositAmount = document.querySelector('.deposit-amount'), 
    depositPercent = document.querySelector('.deposit-percent'),
    targetAmount = document.querySelector('.target-amount'), 
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesAmount = document.querySelector('.expenses-amount');
    let expensesItems = document.querySelectorAll('.expenses-items'),
     incomeItems = document.querySelectorAll('.income-items');
     let additionalExpensesItem = document.querySelector('.additional_expenses-item');
    
const AppData = function() {
  this.income = {},
  this.addIncome = [],
  this.incomeMonth = 0,
  this.expenses = {},
  this.addExpenses = [],
  this.deposit = false,
  this.budget = 0,
  this.budgetDay = 0,
  this.budgetMonth = 0,
  this.expensesMonth = 0,
  this.targetMonth = 0,
  this.percentDeposit = 0,
  this.moneyDeposit = 0;
}; 
  
  AppData.prototype.start = function() { 
    
    this.budget = +salaryAmount.value;
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getTargetMonth();
    this.getBudget();
    this.startFunc();
    this.showResult();

    salaryAmount.setAttribute("readonly", "readonly");
    incomeTitle.setAttribute("readonly", "readonly");
    incomeAmount.setAttribute("readonly", "readonly");
    expensesTitle.setAttribute("readonly", "readonly");
    expensesAmount.setAttribute("readonly", "readonly");
    targetAmount.setAttribute("readonly", "readonly");
    additionalIncomeItem1.setAttribute("readonly", "readonly");
    additionalIncomeItem2.setAttribute("readonly", "readonly");
    mainStart.style.display = "none";
    cancel.style.display = "block";
  
  },
  
  AppData.prototype.startFunc = function(){
    if(salaryAmount.value === ''){
      mainStart.disabled = 'disabled';
      return;
    } else {
      mainStart.removeAttribute('disabled');
    }
  },
  AppData.prototype.showResult = function(){
      budgetMonthValue.value = this.budgetMonth;
      budgetDayValue.value = Math.ceil(this.budgetDay);
      expensesMonthValue.value = this.expensesMonth;
      additionalExpensesValue.value = this.addExpenses.join(', ');
      additionalIncomeValue.value = this.addIncome.join(', ');
      targetMonthValue.value = Math.ceil(this.getTargetMonth());
      incomePeriodValue.value = this.calcSavedMoney();
      const _this = this;
      periodSelect.addEventListener('input', function(){
        incomePeriodValue.value = periodSelect.value * _this.budgetMonth;
    });
  };
  AppData.prototype.addIncomeBlock = function() {
    let cloneIncomeItems = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItems, btnIncomeAdd);
    incomeItems = document.querySelectorAll('.income-items');
      if(incomeItems.length === 3){
        btnIncomeAdd.style.display = 'none';
      }
  };
  AppData.prototype.addExpensesBlock = function(){
      
      let cloneExpensesItems = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItems, btnExpensesAdd);
      expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
          btnExpensesAdd.style.display = 'none';
        }
  };
  AppData.prototype.getExpenses = function(){
    const _this = this;
    expensesItems.forEach (function(item) {
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== ''){
          _this.expenses[itemExpenses] = +cashExpenses;
        }
    });
  };
  AppData.prototype.getIncome = function(){
    const _this = this;
    incomeItems.forEach (function(item) {
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if(itemIncome !== '' && cashIncome !== ''){
          _this.income[itemIncome] = +cashIncome;
        }
      });
  };
  AppData.prototype.getAddExpenses = function(){
    const _this = this;
    const addExpenses = additionalExpensesItem.value.split(', ');
    addExpenses.forEach(function(item){
      item = item.trim();
      if(item !== ''){
        _this.addExpenses.push(item);
      }
    });
  };
  AppData.prototype.getAddIncome = function(){
    const _this = this;
    additionalIncomeItem.forEach(function(item){
      let itemValue = item.value.trim();
      if(itemValue !== ''){
        _this.addIncome.push(itemValue);
      }
    });
  };
  AppData.prototype.getExpensesMonth = function(){
      for(let key in this.expenses) {
        this.expensesMonth += this.expenses[key];
    }
  };
  AppData.prototype.getBudget = function() {
    this.budgetMonth = +this.budget - Number(expensesAmount.value) + Number(incomeAmount.value);
    this.budgetDay = this.budgetMonth / 30;
  };
  AppData.prototype.getTargetMonth = function(){
    return targetAmount.value / this.budgetMonth;
  };
  AppData.prototype.getPeriodSelect = function(){
    periodAmount.innerHTML = periodSelect.value;
  };
  AppData.prototype.getInfoDeposit = function () {
    if(this.deposit = confirm('Есть ли у Вас депозит в банке?')) {
      do {
        this.percentDeposit = prompt('Какой годовой процент?');
      } while (isNaN(parseFloat(this.percentDeposit)));
      do {
        this.moneyDeposit = prompt('Какая сумма заложена?');
      } while (isNaN(parseFloat(this.moneyDeposit)));
      
    }
  };
  AppData.prototype.calcSavedMoney = function() {
    return this.budgetMonth * periodSelect.value;
  };
  AppData.prototype.reset = function(){
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
    additionalExpensesItem.value = '';
    depositAmount.value = '';
    targetAmount.value = '';
    periodSelect.value = 0;
    incomeItems.value = '';
    incomeAmount.value = '';
    expensesAmount.value = '';
    incomeAmount.value = '';
    this.deposit = false;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.addExpenses = [] ;
    this.addIncome = [] ;
    this.income = {};
    this.incomeMonth = 0;
    this.expenses = {},
    this.expensesMonth = 0;
    this.targetMonth = 0;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    periodAmount.innerHTML = periodSelect.value;

    salaryAmount.removeAttribute("readonly", "readonly");
    incomeTitle.removeAttribute("readonly", "readonly");
    incomeAmount.removeAttribute("readonly", "readonly");
    expensesTitle.removeAttribute("readonly", "readonly");
    expensesAmount.removeAttribute("readonly", "readonly");
    targetAmount.removeAttribute("readonly", "readonly");
    additionalIncomeItem1.removeAttribute("readonly", "readonly");
    additionalIncomeItem2.removeAttribute("readonly", "readonly");
    mainStart.style.display = "block";
    cancel.style.display = "none";

    if(incomeItems[1]){
      incomeItems[1].parentNode.removeChild(incomeItems[1]);
    };

    if(incomeItems[2]){
      incomeItems[2].parentNode.removeChild(incomeItems[2]);
    };

    btnIncomeAdd.style.display = 'block';

    if(expensesItems[1]){
    expensesItems[1].parentNode.removeChild(expensesItems[1]);
    };

    if(expensesItems[2]){
    expensesItems[2].parentNode.removeChild(expensesItems[2]);
    };
    
    btnExpensesAdd.style.display = 'block';
  };
AppData.prototype.eventsListeners = function(){
  mainStart.addEventListener('click', this.start.bind(this));
  salaryAmount.addEventListener('input', this.startFunc);
  btnExpensesAdd.addEventListener('click', this.addExpensesBlock);
  btnIncomeAdd.addEventListener('click', this.addIncomeBlock);
  periodSelect.addEventListener('input', this.getPeriodSelect);
  cancel.addEventListener('click', this.reset.bind(this));
};
const appData = new AppData();
appData.eventsListeners();





