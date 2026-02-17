/*
// simple function
function simple(){
    console.log("simple function");
}
simple();

// function with parameter
function withParameter(a,b){
    const add = a+b;
    console.log("Addition::",add);
}
withParameter(5,10);

// function with default paramere

function withDefultParameter(a,b=10){
    const result=a*b;
    console.log("Multiplication::",result);
}
withDefultParameter(20);

// function with return type

function withReturnType(a,b){
    return a/b;
}
const div=withReturnType(10,5);
console.log("Division::",div);

// Arrow function
const arrowFunction=() =>{
    console.log("Arrow Function");
}
arrowFunction();

// Arrow function with parameter
const arrowFunctionWithParameter=(a,b)=>{
    const addition=a+b;
    console.log("Add::",addition);
}
arrowFunctionWithParameter(10,90);

//Annomuos function
(()=>{
    console.log("Annomuos function");
})();

// call back function is a function to pass argument to another function and call later

const fun = () => {
  console.log("I am fun");
};

const results = (a) => {
  return a;
};

const z = results(fun);
z();
*/

/*
let interval = setInterval(() => {
  console.log("I am interval");
}, 1000);

setTimeout(() => {
  console.log("I am setTimeout");
  clearInterval(interval);
}, 10000);
*/