function welcome() {
    let name = " Nofal ";
    console.log("Welcome", `${name}`);
}
welcome(); //no retrn type


function add(a, b) {
    return a + b;
}

console.log(add(1, 2)); //return type

const obj = {
    name: "Nofal",
    age: 19,
    welcomeMessage: function () {
        console.log("welcome", `${this.name}`); //use in object
    }
}

// instant call after declaration : 
const fruits = ["a", "pine", "orange ", "mango"];
(function () { console.log(fruits)})();

//  Default Parameters

let Welcome = (name = "guest") => {
    console.log(`welcome ${name}`);
}
Welcome(); // Guest
Welcome("Nofal");