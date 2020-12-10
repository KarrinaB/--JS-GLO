'use strict';

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed'),
    todoRemove = document.querySelector('.todo-remove');
    
    
let todoData = localStorage.getItem('memory') ? JSON.parse(localStorage.getItem('memory')) : [];
localStorage.setItem('memory', JSON.stringify(todoData));

const data = JSON.parse(localStorage.getItem('memory'));


const render = function() {
  
    todoList.textContent = '';
    todoCompleted.textContent = '';
  
    data.forEach(function(item, i){
      
       const li = document.createElement('li');
      
       li.classList.add('todo-item');
       
       li.innerHTML = '<span class="text-todo">' + item.value + '</span>' + '<div class="todo-buttons">' + '<button class="todo-remove"></button>' + '<button class="todo-complete"></button>' + '</div>';

       localStorage.setItem('memory', JSON.stringify(data));
       headerInput.value = null;
      
       if(item.completed){
         todoCompleted.append(li);
       } else {
        todoList.append(li);
       };
       localStorage.setItem('memory', JSON.stringify(data));


       const btnTodoCompleted = li.querySelector('.todo-complete');
       const btnTodoRemove = li.querySelector('.todo-remove');

       btnTodoRemove.addEventListener('click', function(){
        data.splice(i, 1);
        localStorage.setItem('memory', JSON.stringify(data));
        render();
        
      });
      
       btnTodoCompleted.addEventListener('click', function(){
          item.completed = !item.completed;
          localStorage.setItem('memory', JSON.stringify(data));
          render();
         });
    
         
        

        
    
       

  });

  
  };
  
  

      
    
        todoControl.addEventListener('submit', function(event){
          
          event.preventDefault();
        
          const newTodo = {
              value: headerInput.value,
              completed: false
              
          }

        
          if(headerInput.value !== ''){
          data.push(newTodo);
          localStorage.setItem('memory', JSON.stringify(data));
          }

          
          render();
        
        });
        
    
      
      render();
      