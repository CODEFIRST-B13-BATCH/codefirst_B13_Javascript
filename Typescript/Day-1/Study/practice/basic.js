var Name = 'Amol';
var full = "My name is ".concat(Name);
console.log(full);
var a = 100;
var b = 32.32;
console.log(a);
var bool1 = true;
console.log(bool1);
var vall = null;
var un = undefined;
console.log(vall);
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var array1 = ["amol", "pandu", "omkar"];
var boolean = [true, false];
console.log(array1);
console.log(array);
var tuple = [123, "amol", true];
console.log(tuple);
var System;
(function (System) {
    System["Laptop"] = "laptop";
    System["Pc"] = "pc";
    System["Mouse"] = "mouse";
})(System || (System = {}));
var walSystem = System.Pc;
console.log(walSystem);
// let age: any ="amol";
// age = 30;
// age = true;
// console.log(age);
var age = 'amol';
age = 100;
age = true;
console.log(age);
var gret = "amol";
if (typeof gret === "string") {
    console.log(gret.toUpperCase());
}
function throError(message) {
    throw new Error(message);
}
// Type Annotations in Functions
function addd(a, b) {
    return a + b;
}
console.log(addd(54, 45));

