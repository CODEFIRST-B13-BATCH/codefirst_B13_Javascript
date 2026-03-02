// 1. simple function : 
function add() {
    console.log(2 + 3);
}
add();

// 2. function with parameters :
function sub(a, b) {
    console.log(a - b);
}
sub(10,8);

// 3. function with return type :
function mul(a, b) {
    return a*b;
}
let result = mul(5, 6);
console.log(result);

// 4. function with default parameters :
function div(a=5, b=2) {
    return a/b;
}
const z = div(6);
console.log(z);

// 5. function with rest parameters : it takes all extra values and put them inside one array.
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
const totalSum = sum(1, 2, 3, 4, 5);
console.log(totalSum);

// 6. function expression :
const greet = function(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Rahul"));

// 7. arrow function :
const square = (x) => x * x;
console.log(square(4));

// 8. IIFE (Immediately Invoked Function Expression) :
(function() {
    console.log("This is an IIFE!");
})();

setTimeout(function() {
    console.log("This is an IIFE!");
}, 100);

// 9. callback function :
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "Rahul", age: 30 };
        callback(data);
    }, 1000);
}
fetchData(function(data) {
    console.log("Data received:", data);
});

// 10. impure function :every execution time output changes 
function population() {
    return Math.random() * 1000; // returns a random population value each time
}
const y = population();
console.log(y);
 
