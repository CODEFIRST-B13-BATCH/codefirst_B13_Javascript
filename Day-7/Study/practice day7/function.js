//1. Simple function

function add(){
    console.log(5+8);
}
add();

//function add(){
//    const result = 2+4;
//    console.log("addition of two numbers", result);
// }
// add()

//2.Function with parameter

function div(a,b){
    console.log(a/b);
}
div(10,2);

//3.Function with default parameter

function mul(a, b=4){
    console.log(a*b);
}
mul(5);

//4. Function with return type

function sub(a,b){
    return a-b;
}
const result1 = sub(10,5);
console.log(result1);

//. practice question myself
function simple(a,b){
    if(a==b){
        console.log("a is equal to b");
    }else{
        console.log("a is not equal to b");
    }
}
simple(10,11);

//5. Function with rest parameter 

function sum(...numbers){
    let total=0;
    for(let num of numbers){
        total += num;
    }
    return total;
}
let answer = sum(1,2,3,4,5,6,7);
console.log(answer);

// rest function my practice
function city(...name){
    console.log(name);
}
city('pune','mumbai','solapur','kolhapur','sangola');

//6. Function expression

const greet = function(name){
  return `Hello, ${name}!`
}
console.log(greet("Pandu"));

//7. Arrow function

const square = (y) => y * y;
console.log(square(5));

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
        const data = { name: "Pandu", age: 23 };
        callback(data);
    }, 1000);
}

fetchData(function(data) {
    console.log("Data received:", data);
});

// 10. impure function :
function population() {
    return Math.random() * 1000; // returns a random population value each time
}
const y = population();
console.log(y);
