var todosArray = [
    { text: "Lorem", checked: true },
    { text: "Ipsum", checked: true },
    { text: "Dolor", checked: false }
];
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
var doneDOMElement;
var openDOMElement;
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    openDOMElement = document.querySelector("#open");
    doneDOMElement = document.querySelector("#done");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index) {
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + todosArray[index] + "'><i class='fas fa-check'></i></span>"
            + todosArray[index].text +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    };
    for (var index = 0; index < todosArray.length; index++) {
        _loop_1(index);
    }
    updateCounter();
}
function updateCounter() {
    var openCounter = 0;
    var doneCounter = 0;
    for (var index = 0; index < todosArray.length; index++) {
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
function addTodo() {
    if (inputDOMElement.value != "") {
        todosArray.unshift({ text: inputDOMElement.value, checked: true });
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    todosArray[index].checked = !todosArray[index].checked;
    drawListToDOM();
}
function deleteTodo(index) {
    todosArray.splice(index, 1);
    drawListToDOM();
}
/*Spracheingabe*/
//# sourceMappingURL=script.js.map