const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

function showMessage(text, type){
    message.textContent = text;
    message.className = type;

    setTimeout(()=>{
        message.textContent = "";
        message.className = "";
    },2000);
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

function addTask(){

    const task = taskInput.value.trim();

    if(task === ""){
        showMessage("Task cannot be empty!", "error");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task;

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "task-buttons";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";

    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttonDiv);

    taskList.appendChild(li);

    taskInput.value = "";

    showMessage("Task added successfully!", "success");

    editBtn.addEventListener("click", function(){

        const newTask = prompt("Edit Task", span.textContent);

        if(newTask === null){
            return;
        }

        if(newTask.trim() === ""){
            showMessage("Task cannot be empty!", "error");
            return;
        }

        span.textContent = newTask.trim();
        showMessage("Task updated successfully!", "success");

    });

    deleteBtn.addEventListener("click", function(){

        li.remove();
        showMessage("Task deleted successfully!", "success");

    });

}