let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskDateTime = document.getElementById("taskDateTime");

    let taskText = taskInput.value.trim();
    let dateTime = taskDateTime.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push({
        text: taskText,
        datetime: dateTime,
        completed: false
    });

    saveTasks();
    displayTasks();

    taskInput.value = "";
    taskDateTime.value = "";
}

function displayTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        let span = document.createElement("span");

        span.innerHTML = `
            <b>${task.text}</b><br>
            <small>${task.datetime ? new Date(task.datetime).toLocaleString() : ""}</small>
        `;

        if (task.completed) {
            span.classList.add("completed");
        }

        let buttonDiv = document.createElement("div");
        buttonDiv.classList.add("task-buttons");

        let completeBtn = document.createElement("button");
        completeBtn.innerText = "Done";

        completeBtn.onclick = function () {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            displayTasks();
        };

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
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
