//Try...catch
/**allows to handle errors gracefully. wrap the code that might throw an error inside the "try" block, and if an error occurs, it is caught and handled in the "catch" block. */
try{
    //code that might throw an error
    throw new Error("This is an example error")
}catch(error){
    //handle the error
    console.log("caught an error:", error.message)
}

//throw statement
/**is used to generate an exception. You can throw predefined error objects (like "Error", "SyntaxError", etc.) or create your own error objects. */
function divide(a,b){
    if(b === 0){
        throw new Error("Division by zero is not allowed")
    }
    return a/b
}

//Custom Errors
/**you can create custom error types by extending the "Error" object. This allows you to provide more specific info about the type of error that occurred */
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

try {
    throw new CustomError('This is a custom error');
} catch (error) {
    console.error('Caught a custom error:', error.message);
}

//finally Block
/**if specified will be executed regardless of whether an exception is thrown or caught. It is useful for cleanup operations. */
try {
    // Code that might throw an exception
} catch (error) {
    // Handle the exception
} finally {
    // Code that will always run, regardless of whether there was an exception
}

//Error Object
/** JavaScript has built-in error objects like Error, SyntaxError, TypeError, etc. Each of these has specific use cases, and you can catch them selectively based on the type of error you expect.*/
try {
    // Code that might throw a TypeError
} catch (error) {
    if (error instanceof TypeError) {
        console.error('Caught a TypeError:', error.message);
    } else {
        console.error('Caught an error:', error.message);
    }
}
