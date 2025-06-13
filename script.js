// Wait until the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim input value

        // Validate input
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create list item element for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn"); // ✅ Required by the task

        // Event: remove the task on click
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Add button to list item, and list item to task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Event: add task on button click
    addButton.addEventListener('click', addTask);

    // Event: add task on Enter key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
