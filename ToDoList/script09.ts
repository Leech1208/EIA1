const inputField: HTMLInputElement = (document.getElementById("inputField") as HTMLInputElement);
let changeCounter: number = 0;


/*Funktion neuen Task anlegen*/

function createNewTask(): void {

    let myDiv: HTMLDivElement = document.createElement("div");
    myDiv.className = "myDiv"; 
    
    let myCheckbox: HTMLInputElement = document.createElement("input");
    myCheckbox.type = "checkbox";
    myCheckbox.className = "checkboxField";

    let myLabel: HTMLLabelElement = document.createElement("label");
    myLabel.className = "myClass";
    myLabel.innerHTML = inputField.value;

    let myTrash: HTMLElement = document.createElement("i");
    myTrash.className = "fas fa-trash";

    myTrash.addEventListener("click", function(): void {
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

    function countTasks(): void {
        document.getElementById("taskCount").innerHTML = changeCounter + " open tasks";
        }


    /*Enter-Taste*/

    inputField.addEventListener("keypress", function (event: KeyboardEvent): void {
        if (event.key == "Enter") {
            createNewTask();
            inputField.value = " ";
        }    
        });


    /* Funktion Tasks löschen*/

    function removeTask(taskBox: HTMLDivElement): void {
        taskBox.remove(); 
    
        changeCounter--;
        countTasks();
    }