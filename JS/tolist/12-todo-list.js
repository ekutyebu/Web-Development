const todoList = [];

      renderTodoList();

      function renderTodoList() {
        let todoListHTML = '';

        todoList.forEach(function(todoObject, index) {

          const {name, dueDate} = todoObject;
         
          const html = `
              <div>${name}</div> 
              <div>${dueDate}</div>
              <button class="delete-todo-button" onclick="
                todoList.splice(${index}, 1);
                renderTodoList();
              ">Delete</button>
          `;
          todoListHTML += html;
        });

        /*
        for (let i = 0; i < todoList.length; i++) {
          const todoObject = todoList[i];
          //const name = todoObject.name;
          const {name, dueDate} = todoObject;
          //const dueDate = todoObject.dueDate;
          const html = `
              <div>${name}</div> 
              <div>${dueDate}</div>
              <button class="delete-todo-button" onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
              ">Delete</button>
          `;
          todoListHTML += html;
        }
        */

        console.log(todoListHTML);

        document.querySelector('.js-todo-list')
          .innerHTML = todoListHTML;
      }

      let todoListHTML = '';

      for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `
          <p>${todo}</p>
        `;
        todoListHTML += html;
      }

      console.log(todoListHTML);

      document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;

      function addTodo() {
        const inputElement =
        document.querySelector('.js-name-input');

        const name = inputElement.value;

        const dateInputElement = document.querySelector('.js-due-date-input');

        const dueDate = dateInputElement.value;

        todoList.push({
          //name: name,
          //dueDate: dueDate,
          name,
          dueDate
        });


        //console.log(todoList);

        inputElement.value = '';

        renderTodoList();
      }