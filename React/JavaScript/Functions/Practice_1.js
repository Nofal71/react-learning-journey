// Write a function greet that takes a name as an argument and returns a greeting string. For example, greet("Alice") should return "Hello, Alice!".

function greet(name) {
    return `Hello , ${name}`
}

// Write a function sum that takes two numbers as arguments and returns their sum.

let sum = (a, b) => a + b;

// Write a function generateMultiplicationTable that takes a number n and returns an array containing the multiplication table for n (from 1 to 10).

let generateMultiplicationTable = (n) => {
    let table = [];
    for (let i = 0; i <= 10; i++) {
        table[i] = i * n;
    }
    return table;
}

// Write a function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

let filterEvenNumbers = ((...e) => e.filter((n) => n % 2 == 0))

// Write a function squareNumbers that takes an array of numbers and returns a new array with the squares of each number.

let squareNumbers = ((...arr) => arr.map((e) => e * 2))

// Write a function getStringLengths that takes an array of strings and returns a new array with the lengths of each string.

let getStringLengths = ((...str) => {
    let arr = [];
    for(let i = 0 ; i < str.length ;i++){
         arr[i] = str[i].length;
    }
    return arr;
})
console.log(getStringLengths("NOFAL" , "abc"));