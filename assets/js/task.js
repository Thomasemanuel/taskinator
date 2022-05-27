
// the html is accessed by using document giving us the button 
var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);

// var is the section element id is tasks-to-do
var tasksToDoEl = document.querySelector("#tasks-to-do");
//after clicked this will run
var createTaskHandler = function() {
//add new li item with class name task item, text "this is new task"
  var listItemEl = document.createElement("ul");
  listItemEl.className = "task-form";
  listItemEl.textContent = "This is a new task.";
  //add to the end of the li items
  tasksToDoEl.appendChild(listItemEl);
};
//when clicked run createTaskhandler
buttonEl.addEventListener("click", createTaskHandler);


