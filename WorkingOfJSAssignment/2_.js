// Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product. Use function expression to define the function and call the function before it is declared to demonstrate hoisting

console.log(multiplyNumbers(5,5)) // ReferenceError: cannot access

const multiplyNumbers = function (n1, n2) {
    return n1 * n2
}