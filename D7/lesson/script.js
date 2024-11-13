//Accessing elements by ID
const heading = document.getElementById("heading")
console.log(heading)

//Accessing elements by class name
const text = document.getElementsByClassName("text")
console.log(text)

//Accessing elements by tag name
const p = document.getElementsByTagName("p")
console.log(p)

//Accessing elements by query selector
const heading2 = document.querySelector("#heading")
console.log(heading2)

//Accessing elements by query selector all
const list = document.querySelectorAll("li")
console.log(list)

//Modifying element content using textContent
const firstParagraph = text[0]
firstParagraph.textContent = "This is an updated paragraph"
console.log(firstParagraph)

//Modifying element attributes using setAttribute
const listItem = list[0]
listItem.setAttribute("class", "highlight")
console.log(listItem)

//Modifying element styles using style property
const btn = document.querySelector("#btn")
btn.style.backgroundColor = "red"
btn.style.color = "white"

//Creating new elemts dynamically

const newParagraph = document.createElement("p")
newParagraph.textContent = "This is a new paragraph"
const container = document.querySelector(".container")
container.appendChild(newParagraph)

//Removing elements
const secondListItem = list[1]
secondListItem.remove()