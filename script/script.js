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
    //additionalExpensesItem.setAttribute("readonly", "readonly");
    targetAmount.setAttribute("readonly", "readonly");
    additionalIncomeItem1.setAttribute("readonly", "readonly");
    additionalIncomeItem2.setAttribute("readonly", "readonly");
    mainStart.style.display = "none";
    cancel.style.display = "block";
  
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
          this.expenses[itemExpenses] = +cashExpenses;
        }
    });
  },
  getIncome: function(){
    incomeItems.forEach (function(item) {
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if(itemIncome !== '' && cashIncome !== ''){
          this.income[itemIncome] = +cashIncome;
        }
      });
  },
  getAddExpenses: function(){
    appData.addExpenses = additionalExpensesItem.value.split(', ');
    appData.addExpenses.forEach(function(item){
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
      for(let key in this.expenses) {
        this.expensesMonth += this.expenses[key];
    }
  },
  getBudget: function() {
    this.budgetMonth = +this.budget - Number(expensesAmount.value) + Number(incomeAmount.value);
    this.budgetDay = this.budgetMonth / 30;
  },
  getTargetMonth: function(){
    return targetAmount.value / this.budgetMonth;
  },
  getPeriodSelect: function(){
    periodAmount.innerHTML = periodSelect.value;
  },
  getInfoDeposit: function () {
    if(this.deposit = confirm('Есть ли у Вас депозит в банке?')) {
      do {
        this.percentDeposit = prompt('Какой годовой процент?');
      } while (isNaN(parseFloat(this.percentDeposit)));
      do {
        this.moneyDeposit = prompt('Какая сумма заложена?');
      } while (isNaN(parseFloat(this.moneyDeposit)));
      
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
    appData.deposit = false;
    appData.budget = 0;
    appData.budgetDay = 0;
    appData.budgetMonth = 0;
    periodAmount.innerHTML = periodSelect.value;

    salaryAmount.removeAttribute("readonly", "readonly");
    incomeTitle.removeAttribute("readonly", "readonly");
    incomeAmount.removeAttribute("readonly", "readonly");
    expensesTitle.removeAttribute("readonly", "readonly");
    expensesAmount.removeAttribute("readonly", "readonly");
    //additionalExpensesItem.removeAttribute("readonly", "readonly");
    targetAmount.removeAttribute("readonly", "readonly");
    additionalIncomeItem1.removeAttribute("readonly", "readonly");
    additionalIncomeItem2.removeAttribute("readonly", "readonly");
    mainStart.style.display = "block";
    cancel.style.display = "none";
    


},

  };



  mainStart.addEventListener('click', function(){
    appData.start.bind(appData);
    appData.start();
    
  });
  


salaryAmount.addEventListener('input', appData.startFunc);
btnExpensesAdd.addEventListener('click', appData.addExpensesBlock);
btnIncomeAdd.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.getPeriodSelect);
cancel.addEventListener('click', appData.reset);



