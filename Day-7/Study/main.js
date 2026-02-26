//simple function

function methodCall() {
    const x=20;
    const y =60;
    console.log("Addition of 2 numbers:" , x + y);
}
methodCall();

//function with parameter
function add(a,b) {
    const result = a *b;
    console.log("multiplication of two numbers:",result);
    
    
}
add(39,39);

// function with default parameter
function divide(c,d=2){
 const result = c/d;
 console.log(" division of number:",result);
 
}
divide(4);

//function with return 
function sub(x,y){
    return x- y;

} 
const res = sub(8,3);
console.log(res);

//Arrow function

const res1 = (d,f)=>{
    console.log("I am Arroe function");
}

//annomnous function
()=>{
    console.log("Annomnous function");
    
}
// function :
 
// simple function
function methodCall() {
    const x = 10;
    const y = 20;
    console.log("Additio of two number:", x+y);
}
// methodCall();

// function with parameter
function multiple(a, b) {
    const result = a*b;
    console.log("multiplication of number :", result);
}
// multiple(5,7);

// function with default paramter
function divide(a, b=2) {
    const result = a/b;
    console.log("multiplication of number :", result);
}
// divide(20);

// function with return (returnable functions)

function substraction(x,y) {
    return x-y;
}
// const res = substraction(20,10);
// console.log(res);

// Arrow function
const fun = () => {
    console.log("I am arrow function");
}
// fun();

// Arrow function with paramter
const fun2 = (a,c) => {
    console.log("I am arrow function");
}
// fun(1,4);

// annomnous function.
()=>{
  console.log("Annomnous function");  
}

// call back function : Callback functions is the funtion which take another function as paramter is called as callback function.

const results = (a) =>{
    return a;
}
const z = results(fun2);
// console.log(z);

// setTimeout(()=>{
//   console.log("Annomnous function");  
// }, 1000);

console.log("first");

setTimeout(() => {
    console.log("I am settime out");
}, 0);

console.log("second");

// let interval = setInterval(() => {
//     console.log("I am interval");
// }, 1000);

