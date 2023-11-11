/**DOM (Document Object Model) manipulation in JavaScript involves interacting with the structure, content, and style of HTML documents. The DOM represents the document as a tree-like structure of objects, and JavaScript allows you to manipulate these objects to dynamically update the content and appearance of a web page. */

//Accessing Elements:
//You can use various methods to select and access elements in the DOM.

document.getElementById('id') // Selects an element with a specific ID.
document.getElementsByClassName('class') // Selects elements with a specific class.
document.getElementsByTagName('tag') //Selects elements with a specific tag.
document.querySelector('selector') //Selects the first element that matches a CSS selector.
document.querySelectorAll('selector') //Selects all elements that match a CSS selector.

//Modifying Content:
/** You can change the content of HTML elements using the innerHTML property or by manipulating the textContent property.*/
// Changing the content of an element by ID
document.getElementById('example').innerHTML = 'New Content';

// Changing the content of all elements with a specific class
const elements = document.getElementsByClassName('example-class');
for (let i = 0; i < elements.length; i++) {
    elements[i].textContent = 'New Text';
}

//Changing Attributes:
//you can change HTML attributes using the "setAttribute" method
// Changing the src attribute of an image
const image = document.getElementById('myImage');
image.setAttribute('src', 'new-image.jpg');

//Creating and Appending Elements:

// Creating a new paragraph element
const paragraph = document.createElement('p');
paragraph.textContent = 'New Paragraph';

// Appending the paragraph to an existing element
document.getElementById('container').appendChild(paragraph);

//Event Handling:

// Adding a click event listener to a button
const button = document.getElementById('myButton');
button.addEventListener('click', function () {
    alert('Button Clicked!');
});

//CSS manipulation:

// Changing the background color of an element
const element = document.getElementById('myElement');
element.style.backgroundColor = 'blue';


