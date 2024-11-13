const taskInput = document.querySelector("#task")
const button = document.querySelector("button")
const container = document.querySelector(".container")

button.addEventListener("click", () => {
    const task = taskInput.value;
    
    const unOrderedListElement = document.createElement("ul")

    const listItemElement = document.createElement("li")

    listItemElement.innerHTML = `${task} <button id="deleteBtn" style="background-color: lightgreen;">Delete</button>`

    unOrderedListElement.appendChild(listItemElement)

    container.appendChild(unOrderedListElement)

    taskInput.value = ""

    

    listItemElement.querySelector("#deleteBtn").addEventListener("click", () => {
        console.log(listItemElement)
    listItemElement.remove();
  });
})

