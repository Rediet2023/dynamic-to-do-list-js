// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM Elements
  const addButton = document.getElementById('add-task-btn');
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
      removeButton.classList.add('remove-btn'); // Using classList.add to set the class

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
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM Elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from Local Storage
  loadTasks();

  // Create the addTask Function
  function addTask(taskText, save = true) {
      // If taskText is not provided, retrieve and trim the value from the task input field
      if (taskText === undefined) {
          taskText = taskInput.value.trim();
      }

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
      removeButton.classList.add('remove-btn'); // Using classList.add to set the class

      // Assign an onclick event to the remove button to remove the li element from taskList
      removeButton.onclick = () => {
          taskList.removeChild(listItem);
          removeTaskFromLocalStorage(taskText);
      };

      // Append the remove button to the li element
      listItem.appendChild(removeButton);

      // Append the li to taskList
      taskList.appendChild(listItem);

      // Clear the task input field
      taskInput.value = "";

      // Save task to Local Storage if the save flag is true
      if (save) {
          saveTaskToLocalStorage(taskText);
      }
  }

  // Save task to Local Storage
  function saveTaskToLocalStorage(taskText) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }

  // Remove task from Local Storage
  function removeTaskFromLocalStorage(taskText) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const updatedTasks = storedTasks.filter(task => task !== taskText);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  // Load tasks from Local Storage and add to the DOM
  function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
  }

  // Attach Event Listeners
  addButton.addEventListener('click', () => addTask());
  taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          addTask();
      }
  });
});