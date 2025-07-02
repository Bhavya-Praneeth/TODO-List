
const savedTodos = JSON.parse(localStorage.getItem('todoList'));
const todoList = savedTodos || [
  {
    name: 'make dinner',
    dueDate: '2025-12-22'
  }
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const { name, dueDate } = todoList[i];

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-button" onclick="
        todoList.splice(${i}, 1);
        saveToStorage();   // ✅ 3. Save updated list after deleting
        renderTodoList();
      ">Delete</button>
    `;

    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-todo-input');  
  const name = inputElement.value.trim();

  const dueDateInputElement = document.querySelector('.js-duedate');
  const dueDate = dueDateInputElement.value;

  if (name !== '' && dueDate !== '') {
    todoList.push({
      name,
      dueDate
    });

    inputElement.value = '';
    dueDateInputElement.value = '';

    saveToStorage(); 
    renderTodoList();
  } else {
    alert("Please enter both a task and a due date.");
  }
}
function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}
