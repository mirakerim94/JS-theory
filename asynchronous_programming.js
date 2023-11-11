/**Asynchronous programming is a programming paradigm that allows code to execute independently of the main program flow. In JavaScript, which is primarily used in web development, asynchronous programming is essential for dealing with operations that might take some time to complete, such as fetching data from a server or reading a file. */

//Callbacks:
/** Callbacks are functions passed as arguments to another function. They are executed once the asynchronous operation is complete. Callbacks are a fundamental way to handle asynchronous code in JavaScript, but they can lead to callback hell (nested callbacks), making the code hard to read and maintain.*/

function fetchData(callback) {
    // Simulating an asynchronous operation (e.g., fetching data)
    setTimeout(function () {
        const data = 'Async Data';
        callback(data);
    }, 1000);
}

fetchData(function (result) {
    console.log(result); // Output: Async Data
});

//Promises:
/** Promises provide a more structured way to handle asynchronous code. A promise represents the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, or rejected.*/

function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation (e.g., fetching data)
        setTimeout(function () {
            const data = 'Async Data';
            resolve(data);
        }, 1000);
    });
}

fetchData()
    .then(result => {
        console.log(result); // Output: Async Data
    })
    .catch(error => {
        console.error(error);
    });


//Async/Await:
/** Async/await is a modern syntax built on top of promises, making asynchronous code look more like synchronous code. The async keyword is used to define a function that returns a promise, and the await keyword is used within that function to wait for a promise to resolve.*/

async function fetchData() {
    return new Promise(resolve => {
        // Simulating an asynchronous operation (e.g., fetching data)
        setTimeout(function () {
            const data = 'Async Data';
            resolve(data);
        }, 1000);
    });
}

async function main() {
    try {
        const result = await fetchData();
        console.log(result); // Output: Async Data
    } catch (error) {
        console.error(error);
    }
}

main();
