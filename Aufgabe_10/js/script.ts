interface todoInterface {
    text: String;
    checked: Boolean;
}

var todosArray: todoInterface[] = [
    {text: "Lorem", checked: true},
    {text: "Ipsum", checked: true},
    {text: "Dolor", checked: false}
];
 

var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
let doneDOMElement: HTMLElement;
let openDOMElement: HTMLElement;


window.addEventListener("load", function(): void {

    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    openDOMElement = document.querySelector("#open");
    doneDOMElement = document.querySelector("#done");

    addButtonDOMElement.addEventListener("click", addTodo);

    drawListToDOM();
});

function drawListToDOM(): void {
   
    todosDOMElement.innerHTML = "";

    for (let index: number = 0; index < todosArray.length; index++) {

        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

       
        todo.innerHTML =  "<span class='check " + todosArray[index] + "'><i class='fas fa-check'></i></span>"
                            + todosArray[index].text +
                            "<span class='trash fas fa-trash-alt'></span>";

 
        todo.querySelector(".check").addEventListener("click", function(): void {
         
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {
         
            deleteTodo(index);
        });

        todosDOMElement.appendChild(todo);
    }

    updateCounter();
}

function updateCounter(): void {
    let openCounter: number = 0;
    let doneCounter: number = 0;

    for (let index: number = 0; index < todosArray.length; index++) {
        if (todosArray[index].checked == true) {
            openCounter++;
        }
        else {
            doneCounter++;
        }
    }

    openDOMElement.innerHTML = openCounter + " open";
    doneDOMElement.innerHTML = doneCounter + " done";
    counterDOMElement.innerHTML = todosArray.length + " in total";
}


function addTodo(): void {

    if (inputDOMElement.value != "") {

        todosArray.unshift(
            {text: inputDOMElement.value, checked: true}
        )

        inputDOMElement.value = "";

        drawListToDOM();
    }
}

function toggleCheckState(index: number): void {
    todosArray[index].checked = !todosArray[index].checked;
    drawListToDOM();
}

function deleteTodo(index: number): void {

    todosArray.splice(index, 1);

    drawListToDOM();
}


/*Spracheingabe*/

