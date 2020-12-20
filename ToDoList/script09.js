var inputField = document.getElementById("inputField");
var changeCounter = 0;
/*Funktion neuen Task anlegen*/
function createNewTask() {
    var myDiv = document.createElement("div");
    myDiv.className = "myDiv";
    var myCheckbox = document.createElement("input");
    myCheckbox.type = "checkbox";
    myCheckbox.className = "checkboxField";
    var myLabel = document.createElement("label");
    myLabel.className = "myClass";
    myLabel.innerHTML = inputField.value;
    var myTrash = document.createElement("i");
    myTrash.className = "fas fa-trash";
    myTrash.addEventListener("click", function () {
        console.log("trash");
        removeTask(myDiv);
    });
    document.getElementById("container").appendChild(myDiv);
    myDiv.appendChild(myCheckbox);
    myDiv.appendChild(myLabel);
    myDiv.appendChild(myTrash);
    changeCounter++;
    countTasks();
}
/*Funktion Tasks zählen*/
function countTasks() {
    document.getElementById("taskCount").innerHTML = changeCounter + " open tasks";
}
/*Enter-Taste*/
inputField.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        createNewTask();
        inputField.value = " ";
    }
});
/* Funktion Tasks löschen*/
function removeTask(taskBox) {
    taskBox.remove();
    changeCounter--;
    countTasks();
}
//# sourceMappingURL=script09.js.map