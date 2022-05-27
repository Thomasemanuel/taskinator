
// the html is accessed by using document giving us the button 
var formEl = document.querySelector("#task-form");

// var is the section element, id is tasks-to-do
var tasksToDoEl = document.querySelector("#tasks-to-do");

//after clicked this will run
var createTaskHandler = function(event) {
    //prevent default text 
    event.preventDefault();
    //add new li item with class name task item, text "this is new task"
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    //add to the end of the li items
    tasksToDoEl.appendChild(listItemEl);
};
//when clicked run createTaskhandler
formEl.addEventListener('submit',createTaskHandler);




