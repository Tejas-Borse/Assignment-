const taskList = document.getElementById('task-list');
const addTaskForm = document.getElementById('add-task-form');
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');

addTaskForm.addEventListener('submit', addTask);
taskList.addEventListener('click', deleteTask);

function addTask(e) {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText) {
    const taskHtml = `
      <li>
        <input type="checkbox" id="task-${taskList.children.length + 1}">
        <label for="task-${taskList.children.length + 1}">${taskText}</label>
        <button class="delete-btn">Delete</button>
      </li>
    `;
    taskList.insertAdjacentHTML('beforeend', taskHtml);
    taskInput.value = '';
  }
}

function deleteTask(e) {
  if (e.target.classList.contains('delete-btn')) {
    const taskListItem = e.target.parentNode;
    taskListItem.remove();
  }
}
