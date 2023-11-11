/**Working with APIs (Application Programming Interfaces) in JavaScript is a common task in web development. APIs allow different software applications to communicate with each other. In the context of web development, APIs are often used to fetch data from external servers, interact with third-party services, or perform other remote operations. */

//HTTP Requests:
/** Most API interactions involve making HTTP requests. JavaScript provides various methods and libraries for making HTTP requests, such as XMLHttpRequest, the Fetch API, and third-party libraries like Axios.

Example using Fetch API:*/

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

//JSON (JavaScript Object Notation):
/** SON is a common data format used for API communication. The Fetch API and many APIs return data in JSON format. JavaScript provides methods (JSON.parse() and JSON.stringify()) for parsing JSON data.*/

// Example JSON data
const jsonData = '{"name": "John", "age": 30}';

// Parsing JSON data
const parsedData = JSON.parse(jsonData);
console.log(parsedData.name); // Output: John

//Promises with Fetch:
/**The Fetch API returns promises, making it easy to work with asynchronous code using .then() and .catch(). */

function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json());
}

fetchData()
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));


//Async/Await with Fetch:
/** Using async/await with the Fetch API results in more concise and readable asynchronous code.*/

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();


//Using APIs with Libraries:
/** Some libraries, like Axios, simplify working with APIs and provide additional features, such as automatic JSON parsing and error handling.

Example using Axios:*/

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));
