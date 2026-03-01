//functional scope
/*var i=10
function fun()
{
    var i=20
   console.log(i)
}
console.log(i)
console.log(fun())
*/

//local scope

/*
var i=20
var i
{
    var i=5
}
console.log(i)
*/

//***************************************************
//let keyword

/*
let  a=10 // global scope
a=50 //reinitialization 
{
   let a=20 //local scope
   console.log(a)
}
console.log(a)
*/

//*************************************************************
//hoistig - accessing before declaration
/*
console.log(i) //output -undefined
var i

let a
console.log(a) // undefined
*/

/*
const i=10
{
    const i=30
    console.log(i)
}
console.log(i)
*/


/*
let a='hello this is string literal'
let b ="thise is string literal"
var test=`this is the 
multiline string and also known
 as templete literal`
console.log(test)
console.log(typeof test)
console.log(a)
console.log(b)
*/


//let num1=67
//num1="ts"

//let abc="hello"  //it takes string(datatype of first element) as a datatype
//abc= 123

// function outer(){
//     var a=10;
//     function()
//     {
//         var a=20;
//          console.log(a);
//     };
//     console.log(a)
// }
// outer();


//unary operator converts non-number to number
// let a =  +4;
// let b = +'2';   
// let c = +true;  
// let x = +false; 
// let y = +null;
     
// console.log(a); //  4  2  1  0 0 
// console.log(b);
// console.log(c);
// console.log(x);
// console.log(y);


// let x = 9 % 5;
// let y = -12 % 5;
// let z = 1 % -2;
// let a = 5.5 % 2;
// let b = -4 % 2;
// let c = NaN % 2;

// console.log(x);
// console.log(y);
// console.log(z);
// console.log(a);
// console.log(b);
// console.log(c);

// let a = 2;
// let b= "2";
// let c = true;
// let d = null;
// let e = undefined;

// console.log(a===b);
// console.log(a===c);
// console.log(d===e);
// console.log(d==e);


// let x = 5;
// let y = 0;

// // 5 (true) && 0 (false)
// let res = x && y; 
// console.log(res);    o/p ---0


// console.log(!!"false")
// console.log(0 == " ");
// console.log(test)
// const test


// let day = 3;
// let dayName;

// switch (day) {
//     case 1:
//         dayName = "Monday";
//         break;
//     case 2:
//         dayName = "Tuesday";
//         break;
//     case 3:
//         dayName = "Wednesday";
//         break;
//     case 4:
//         dayName = "Thursday";
//         break;
//     case 5:
//         dayName = "Friday";
//         break;
//     case 6:
//         dayName = "Saturday";
//         break;
//     case 7:
//         dayName = "Sunday";
//         break;
//     default:
//         dayName = "Invalid day";
// }

// console.log(dayName);


// let day = 3;
// let dayName;

// switch (day) {
//     case 1:
//         dayName = "Monday";
//     case 2:
//         dayName = "Tuesday";
//     case 3:
//         dayName = "Wednesday";
//     case 4:
//         dayName = "Thursday";
//     case 5:
//         dayName = "Friday";
//     case 6:
//         dayName = "Saturday";
//     case 7:
//         dayName = "Sunday";
//     default:
//         dayName = "Invalid day";
// }

// console.log(dayName);

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// for (let key in car) {
//     console.log(`${key}: ${car[key]}`);
// }

// let a = [];
// console.log(a);

// function greet(name, callback) {
//     console.log("Hello, " + name);
//     callback();
// }

// function sayBye() {
//     console.log("Goodbye!");
// }

// greet("Ajay", sayBye);


// function calc(a, b, callback) {
//     return callback(a, b);
// }

// function add(x, y) {
//     return x + y;
// }

// function mul(x, y) {
//     return x * y;
// }

// console.log(calc(5, 3, add));    
// console.log(calc(5, 3, mul));

// function divide(a, b, callback) {
//     if (b === 0) {
//         callback(new Error("Cannot divide by zero"), null);
//     } else {
//         callback(null, a / b);
//     }
// }




// function result(error, result) {
//     if (error) {
//         console.log("Error:", error.message);
//     } else {
//         console.log("Result:", result);
//     }
// }

// divide(10, 2, result);
// divide(10, 0, result);


function delayedFunction() {
    console.log("This won't be executed due to clearTimeout");
}

let timeoutId = setTimeout(delayedFunction, 2000);

// Cancel the setTimeout before it executes
clearTimeout(timeoutId);

console.log("Timeout canceled");