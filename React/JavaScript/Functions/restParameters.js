let add = (...numbers) => {
    let r = 0;
    numbers.forEach((e) => {
        r += e;
    })
    return r;
}

console.log(add(1, 2));
console.log(add(1, 2, 3, 4, 5));
console.log(add(1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1));