"use strict";
// use strich is going to check the scope and type of data compulsory 
var test1 = "CTS Pune";
let test2 = 'CTS Mumbai';
const test3 = "CTS Solapur";
test4 ="CTS Hydrabad";

// console.log(test1 , test2 , test3, test4);
// console.log(test1);
var test1 = "Claritech Pune";

// console.log(test1);

test1 ="Mumbai";

// console.log(test1);

function func(){
    var test5 =" Hello JavaScript";
    console.log(test1);
    for (let i = 0; i <5; i++) {
        var test6 = "Hello JS";
        console.log(i);
        console.log(test5);
        console.log(test1);        
    }
    console.log(test6);
}
func();
// console.log(test5);

