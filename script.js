let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push({
    text: taskText,
    completed: false
});
    saveTasks();
    displayTasks();

    taskInput.value = "";
}

function displayTasks() {
    let taskList = document.getElementById("taskList");

    // Purani list clear karo
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        let span = document.createElement("span");
        span.innerText = task.text;

        if (task.completed) {
            span.classList.add("completed");
        }

        let buttonDiv = document.createElement("div");
        buttonDiv.classList.add("task-buttons");

        // Done Button
        let completeBtn = document.createElement("button");
        completeBtn.innerText = "Done";
        completeBtn.classList.add("complete-btn");

        completeBtn.onclick = function () {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            displayTasks();
        };

        // Delete Button
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.onclick = function () {
            tasks.splice(index, 1);
            saveTasks();
            displayTasks();
        };

        buttonDiv.appendChild(completeBtn);
        buttonDiv.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(buttonDiv);

        taskList.appendChild(li);
    });
}

function deleteAllTasks() {
    tasks = [];
    saveTasks();
    displayTasks();
}

displayTasks();
