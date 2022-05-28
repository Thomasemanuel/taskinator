
// the html is accessed by using document giving us the button 
var formEl = document.querySelector("#task-form");

// var is the section element, id is tasks-to-do
var tasksToDoEl = document.querySelector("#tasks-to-do");

//taskform is 
var taskFormHandler= function(event){
    //prevent default text 
    event.preventDefault();
    //sets the user input to variable taskNameInput
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    // check if inputs are empty
    if (taskNameInput === "" || taskTypeInput === ""){
        alert("You need to fill out the task form!");
        return false;
    }
    // rests for feilds
    formEl.reset();
    document.querySelector("input[name='task-name']").value = "";
    document.querySelector("select[name='task-type']").selectedIndex = 0;
    
    var taskDataObj ={
        name: taskNameInput,
        type: taskTypeInput
    };
    //run function to make list 
    createTaskEl(taskDataObj);
};

var createTaskEl =function(taskDataObj) {

    //add new li item with class name task item, 
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    //create div to hold task info
    var taskInfoEl = document.createElement("div");
    //class name
    taskInfoEl.className = "task-info";
    // add html to div
    taskInfoEl.innerHTML= "<h3 class ='task-name'>" + taskDataObj.name+ "</h3><span class ='task-type'>"+taskDataObj.type+"</span>";
    listItemEl.appendChild(taskInfoEl);

    console.dir(listItemEl);
    //add to the end of the li items
    tasksToDoEl.appendChild(listItemEl);
};
//when clicked run createTaskhandler
formEl.addEventListener('submit', taskFormHandler);





