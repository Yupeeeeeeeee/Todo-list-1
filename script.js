let title = document.getElementById("title");
let taskInp = document.getElementById("taskInp");
let addBtn = document.getElementById("addBtn");
let message = document.getElementById("message");
let taskCount = document.getElementById("taskCount");
let taskList = document.getElementById("taskList");

let count = 0;

addBtn.addEventListener("click",function(){
    let taskText = taskInp.value;

    if(taskText === ""){
        message.textContent = "Please Enter A New Task";
        return;
    }

    let li = document.createElement(li);

    let taskSpan = document.createElement(span);
    span.textContent = taskText;

    let deleteBtn = document.createElement(button);
    deleteBtn.textContent = "Delete";

    let noteInp = document.getElementById(input);
    noteInp.placeholder = "Add Note";
     
    taskList.appendChild(li);
    
    li.appendChild(span);
    li.appendChild(noteInp);
    li.appendChild(deleteBtn);

    count++;
    taskCount.textContent = count;
    message.textContent = "Task Added Successfully";

    deleteBtn.addEventListener("click",function(){
        li.remove();
        
        count--;
        taskCount.textContent = count;

        message.textContent= "Task deleted";
    });
});