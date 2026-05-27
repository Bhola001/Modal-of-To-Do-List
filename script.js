function addTask() {

    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = taskText;

    let buttonDiv = document.createElement("div");
    buttonDiv.classList.add("task-buttons");

    // Complete Button
    let completeBtn = document.createElement("button");
    completeBtn.innerText = "Done";
    completeBtn.classList.add("complete-btn");

    completeBtn.onclick = function () {
        span.classList.toggle("completed");
    };

    // Delete Button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.onclick = function () {
        li.remove();
    };

    buttonDiv.appendChild(completeBtn);
    buttonDiv.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttonDiv);

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}

// Delete All Tasks
function deleteAllTasks() {
    document.getElementById("taskList").innerHTML = "";
}