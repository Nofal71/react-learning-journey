// function as parameter or aurgiment in function :

let display = (fn, times) => {
    let i = 0;
    while (i < times) {
        console.log(fn());
        i++;
    }
}

function star() {
    return "*";
}

// display(() => "*", 5);
display(star, 5); // used as variable star , not like star()

function double(n) {
    return n * 2;
}
function doubleFilter(n) {
    return n < 500; //true false
}
function displayforEach(n){
    console.log(n);
}

let salaries = [200, 300, 400, 500];
// let v = salaries.filter(function (e) {
//     return e < 400;
// })

let v = salaries.map(double).filter((e) => e < 800);
// let v = salaries.filter(doubleFilter);
salaries.forEach(displayforEach);
// console.log(v);

// filter gets true or false as return type