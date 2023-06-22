// Declare a variable using let inside a block scope and attempt to log its value to the console before it is assigned a value to demonstsarate the dead zone

{
    console.log(x) // throws ReferenceError

    let x = "salman"

    console.log(x) // "salman"
}