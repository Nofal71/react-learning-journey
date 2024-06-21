// Function (simple): 
function addTwo(a, b) {
    console.log(this);  // global scope
    return a + b;
}

//  concept of this :-

console.log(this); // empty (node context)
console.log(addTwo(1, 2)); // global context

// Arrow Functions :

let addTwoArrow = (a, b) => {
    console.log(this); // same node context 
    return a + b;
}
addTwoArrow(); // In arrow function , there is no lexial 'this' Binding

let method1 = (a, b) => a + b;          // Directly returns a+b
let method2 = (a, b) => (a + b);        // To return use ( ) , recommended 
let method3 = () => ({name : "Nofal"}); // To return Object
