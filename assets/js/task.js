
// the html is accessed by using document giving us the button 
var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);

var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
};

buttonEl.addEventListener("click", createTaskHandler);


