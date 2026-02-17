// Simple Function Method 

function methodCallAdd() {
    const p = 12;
    const q = 14;
    console.log("addition : ", p + q);
}
methodCallAdd();

function methodCallSub() {
    const p = 10;
    const q = 20;
    const result = p - q;
    console.log("subtraction : ",result);
}
methodCallSub();


function stringCall() {
    const a = "Captain";
    const b = "America";
    const join = a+b;
    console.log(join);
}
stringCall();

// function with parameters

function paraCall(x,y) {
    const result = x*y;
    console.log("Multiplication :",result);
}
paraCall(2,5);

function paraCall(c,d) {
    const strng = c+d;
    console.log("add string values:", strng);
}
paraCall("well","Come");

// function with default parameter

function defaultPara(e,f="age") {
    const defPara = e + f;
    console.log(defPara);
}
defaultPara(23);

function defaultParaMul(e=23,f) {
    const defParaMul = e * f;
    console.log("Multiplication with default value:", defParaMul);
}
defaultParaMul(5,23);

// function with return value

const resl = divide(200,20);
console.log("division :", resl);

function divide(g,h) {
    return(g/h);
}

//Arrow Function 

const fun = () => {
    console.log("i'am Arrow function");
}
fun();

// Arrow function with parameter

const fun2 = (a,c) => {
    console.log("i'am Arrow function with parameter :", a+c);
}
fun2(1,"4");

// Annomnous function

(() => {
    console.log("i'am Annomnous Function");
})
();

// call back function
function callBack() {
    console.log("i'am call back function");
}
setTimeout(callBack, 2000);

setTimeout(() => {
    console.log("i'am call back function with arrow function");
}, 3000);