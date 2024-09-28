let tasks = [];

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Clear the task list

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'task-item'; 

        // Add completed class
        if (task.completed) {
            li.classList.add('completed');
        }

        li.innerHTML = `
            ${task.name} - ${task.category} - ${task.deadline} - ${task.priority} 
            <button class="complete-btn" onclick="completeTask(${index})">Complete</button>
            <button class="edit-btn" onclick="editTask(${index})">Edit</button>
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
            <div class="progress-bar">
                <div class="progress-bar-fill" style="width: ${task.progress}%;"></div>
                <div class="progress-percentage">${task.progress}%</div>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// Function to add a task
document.getElementById('task-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    const taskName = document.getElementById('task-name').value;
    const category = document.getElementById('category').value;
    const deadline = document.getElementById('deadline').value;
    const priority = document.getElementById('priority').value;
    const reminder = document.getElementById('reminder').value; // Reminder
    const progress = document.getElementById('progress').value; // Progress

    tasks.push({ name: taskName, category, deadline, priority, reminder, progress, completed: false }); // Add task to array
    displayTasks(); // Update task list
    this.reset(); // Reset the form
});

// Function to complete a task
function completeTask(index) {
    tasks[index].completed = true; // Mark as completed
    displayTasks(); // Update task list
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1); // Remove task from array
    displayTasks(); // Update task list
}

// Function to edit a task
function editTask(index) {
    const task = tasks[index];
    document.getElementById('task-name').value = task.name;
    document.getElementById('category').value = task.category;
    document.getElementById('deadline').value = task.deadline;
    document.getElementById('priority').value = task.priority;
    document.getElementById('reminder').value = task.reminder; // Set reminder value
    document.getElementById('progress').value = task.progress; // Set progress value

    deleteTask(index); // Remove task from list after editing
}
