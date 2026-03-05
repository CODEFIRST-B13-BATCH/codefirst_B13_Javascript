// 1. default params
function  add(num1 =15, num2=20) {
    console.log(`The addition of two number is ${num1+num2}`);
}

add(10);
// add(55, 45);

// Optional parameters
// function fullName(fName, mName?, lName?) {
//     console.log(mName);
//     if(mName != undefined){
//         console.log(fName+' '+ mName+' '+ lName)
//     }
//     else{
//         console.log(fName+' '+ lName)
//     }
    
// }

// fullName('Alex')

// 2. Template Literals

let test1 = "CTS Pune";
let test2 = `CTS Pune`;
// console.log(test1);
// console.log(test2);

// let test3 = " I am working at " + test1;
let test3 = `I am working at 
${test1}`;
// console.log(test3);

// 3.Arrow Function
// there are mutlipe ways to write a function in javascript
    // I. Normal function

    function fun1() {
        console.log('This is normal function');
    }
    fun1();
    // II.
    var fun2 = function(){
        console.log('this is function with variable name ')
    }
    fun2();
    // III arrow function
    var fun3 = ()=>{
        console.log('This is fat arrow function')
    }
    fun3();
    // IV arrow fun with params
     var fun3 = (dt)=>{
        console.log('This is fat arrow function ' +dt)
    }
    fun3('CTS');

    // V.
    var fun4 =  dt => 'hello ' + dt;
    console.log(fun4('Angular'));

    var fun4 =  (dt, dt1) => 'hello ' + dt +dt1;
    console.log(fun4('Angular', 'Java'));

    // VI anonymous function

    ()=>{
        console.log('Hello angular');
    }

    var test5 = setInterval(()=>{
        console.log('Hello angular');
    }, 1000);


   clearInterval(test5);