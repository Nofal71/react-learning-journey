// function context can be accessable by child function within its scope :

// function display() {
//     let name = "Nofal";
// }

// console.log(name); // Can't be accessable BUT :

function display(){
    let name = "Nofal";
    function print(){
        console.log(name); // can be accessable , this function has executional context of parent function ;
    }
    print();
}
// But not accesable outer to parent scope (LEXIAL SCOPING)
display();

function print(){
    let age = 10 ;
    function display(){
        console.log(age);
    }
    return display;
}
print(); // it retuens function so fist execute it , after execution function values removed , but inner function has lexial scoping so , can again executable and can access values of parent even after parent executed 

let p = print();
p();