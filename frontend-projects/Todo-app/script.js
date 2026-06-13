const userInput = document.querySelector("#userinput");
const  addButton = document.getElementById("add-btn");
const todoItemContainer = document.querySelector('.todo-items-container');





function  createTodo(text){
    const container = document.createElement("div");
    container.classList.add("todo-item");
    
    const todoItem = document.createElement("p");
    todoItem.classList.add("todo-text");
    todoItem.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add("todo-delete");
    deleteButton.textContent = "delete";

    container.appendChild(todoItem);
    container.appendChild(deleteButton);
    todoItemContainer.appendChild(container);
    

    todoItem.addEventListener("click",() => {
        if(todoItem.classList.contains("done")){
            todoItem.classList.remove("done");
        }
        else{
            todoItem.classList.add("done");  
        }
    });
    
    deleteButton.addEventListener("click",(e) => {
        e.target.parentElement.remove();
    });

    

}

function clearInput(){
    document.getElementById("userinput").value = "";
}

addButton.addEventListener("click",() => {
    createTodo(userInput.value);
    clearInput();
});


