//Accessing parent, child and siblings element using DOM traversal methods
//Access the parent element of a specific element
const container = document.getElementById("container")
console.log(container.parentNode); //Output: <body>...</body>

//Access the child elements of a specific element
const paragraphs = container.children
console.log(paragraphs); //Output: HTMLCollection(4)

//Access the first child
const firstParagraph = container.firstElementChild
console.log(firstParagraph); //Output: <h1>...</h1>

//Access the next sibling element
const secondParagraph = firstParagraph.nextElementSibling
console.log(secondParagraph); //Output: <p>...</p>

//Access the parent element of a specific elemnt using parentNode property
console.log(secondParagraph.parentNode) //Output: <div id="container">...</div>

//Access the child elements of a specific element using children property
const contentDiv = document.querySelector(".content")
console.log(contentDiv.children); //Output: HTMLCollection(p)
const nestedParagraph = contentDiv.children[0]
console.log(nestedParagraph) //Output: <p>This is a nested paragraph.</p>

//Access the previous sibling element using previousSibling property
console.log(nestedParagraph.previousSibling); //#text

//Access the next sibling element using nextSibling property
console.log(nestedParagraph.nextSibling); //Output: null