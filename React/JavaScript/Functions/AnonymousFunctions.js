// when function is used without names . 

setTimeout(function () { console.log("Print after 2 seconds"); }, 2000)

// As in foreach , filter , map , (methods of array)

const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((e) => e * 2)
// console.log(newArr);
newArr.forEach((e) => {
    console.log(e);
})
// can be used as arrow or simple using function keyword

const n = arr.filter((e) => {
    return e != 1;
})
console.log(n);
