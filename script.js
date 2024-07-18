document.addEventListener('DOMContentLoaded', () => {
  // Select DOM Elements
  const addButton = document.getElementById('add-task-button');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Create the addTask Function
  function addTask() {
      // Retrieve and trim the value from the task input field
      const taskText = taskInput.value.trim();

      // Check if taskText is not empty
      if (taskText === "") {
          alert("Please enter a task.");
          return;
      }

      // Create a new li element and set its textContent to taskText
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      // Create a new button element for removing the task
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.className = 'remove-btn';

      // Assign an onclick event to the remove button to remove the li element from taskList
      removeButton.onclick = () => {
          taskList.removeChild(listItem);
      };

      // Append the remove button to the li element
      listItem.appendChild(removeButton);

      // Append the li to taskList
      taskList.appendChild(listItem);

      // Clear the task input field
      taskInput.value = "";
  }

  // Attach Event Listeners
  addButton.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          addTask();
      }
  });
});