let title =document.getElementById("title");
let taskInp = document.getElementById("taskInp");
let addBtn = document.getElementById("addBtn");
let message = document.getElementById("message");
let taskCount = document.getElementById("taskCount");
let taskList = document.getElementById("taskList");

let count= 0;

addBtn.addEventListener("click",function(){
    let taskText = taskInp.value;
    if(taskText === ""){
        message.textContent = "please enter new task";
        return;
    }
  let li = document.createElement("li");
  li.textContent = taskText;
  
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    message.textContent="Task added successfully";
    count++;
    taskCount.textContent= count;

    taskInp.value = "";

    deleteBtn.addEventListener("click",function(){
        li.remove();
        count--;
        taskCount.textContent = count;
        message.textContent = "Task deleted";
    });
});
