//Handling events involves responding to user interactions, such as clicks, submissions, and keypresses, on web pages. By registering event listeners, you can execute specific actions or functions when an event occurs. Additionally, understanding the event object and its properties allows you to access information related to the event. Event delegation is a technique that optimizes event handling by assigning a single event listener to a parent element instead of attaching listeners to multiple child elements.

//Registering event listeners to respond to user interactions
const button = document.getElementById("btn")
console.log(button)

// const handleClick = () => {
//     console.log("the Button works")
//     alert('The button works!')
// }

button.addEventListener("click", handleClick)

function handleClick(e) {
    console.log("the Button works")
    console.log(e.type) //type of event : click
    console.log(e.target) //target element that triggered the event
}

//Register a submit event listener on a form
const form = document.getElementById("myForm")
form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault() //prevent default form submission behavior
    const nameInput = document.getElementById("name")
    const name = nameInput.value
    console.log(name)
    
    const inputText = document.getElementById("inputText");
    inputText.innerHTML = name

    //clear input value
    nameInput.value = ""
}