/**TEMPLATE LITERALS:
 * introduced in ECMAScript 6 (ES6) provide a way to create str that can contain embedded expressions and multiple lines more conveniently than traditional str concatenation. `str ${values or expressions}`
 */
const name = "Alice"
const greeting = `Hello, ${name}`
console.log(greeting)

/**MULTI-LINE STRINGS:
 * templates literals make it easy to create multi-line str without having to use explicit line breaks:
 */
const message = `
This is a multi-line string.
It spans multiple lines.
`
console.log(message)

/**EXPRESSIONS:
 * you can embed JS expressions within template literals. These expressions are evaluated, and their results are included in the resulting str.:
 */
const num1 = 5
const num2 = 3
const result = `${num1} + ${num2} = ${num1 + num2}`
console.log(result)

/**FUNCTION CALLS:
 * you can call functions and include their return values within template literals:
 */
function getAge() {
    return 25
}
const name_1 = "Alice"
const age = getAge()
const info = `${name_1} is ${age} years old.
`
console.log(info)

/**NESTING TEMPLATE LITERALS: 
 * you can nest template literals within each other to create more complex str.:
 * 
 */
const nombre = "Alice"
const edad = 33

const mensage = `My name is ${nombre} and I am ${edad} years old.`
const fullMessage = `Hello! ${mensage}`

console.log(fullMessage)