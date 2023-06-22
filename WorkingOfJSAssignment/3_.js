// Write a function that takes two numbers as arguments and return their sum. Declare a variable inside the function using the var keyword and log its value to the console before it is assigned a value to demonstrate variable hoisting.


function sumOfTwoNumbers(n1, n2) {
    console.log(sum) // undefined
    var sum = n1 + n2
    return sum
}

console.log(sumOfTwoNumbers(5,5)) // 10