var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// string 
var Name = 'Pandurang Kale';
var Address = 'Sangola';
var Age = 23;
var Intro = "My name is ".concat(Name, " I am from ").concat(Address, " I am ").concat(Age, " years old");
console.log(Intro);
// Numbers
var Num = 100;
var Num1 = 20.5;
// boolean
var bol = true;
// null and undefined
var Value = null;
var Val = undefined;
// Array
var Arr1 = [1, 2, 3, 4, 5, 6, 7];
var Arr2 = ['pandu', 'amol', 'rohit'];
var Arr3 = [true, false, true, false];
// eg. array
var a = [10, 20, 30, 40, 50];
console.log(a);
// Tuple
var tuple = ['Pandurang', 200, true];
console.log(tuple);
// eg. tuple
var tuple1 = ['Rohan', 100, true, 'Rohit', 100, 'Amol'];
console.log(tuple1);
// enum
var student;
(function (student) {
    student["name"] = "Pandu";
    student[student["age"] = 23] = "age";
    student["address"] = "Sangola";
    student["education"] = "BCA";
})(student || (student = {}));
var information = student.education;
console.log(information);
// eg. enum
var marks;
(function (marks) {
    marks[marks["math"] = 45] = "math";
    marks[marks["bio"] = 30] = "bio";
    marks[marks["eng"] = 48] = "eng";
    marks[marks["mara"] = 50] = "mara";
})(marks || (marks = {}));
var Result = marks.bio;
console.log(Result);
//  any : Allows a variable to hold any type. Use cautiously, as it disables type checking.
var text1 = 'Pune';
text1 = 40;
text1 = 20;
console.log(text1);
// 9) unknow : Similar to any , but safer as it requires type checking before usage.
var greet1 = "Pandu";
// greet.toUpperCase(); // Error: Object is of type 'unknown'
if (typeof greet1 === "string") {
    console.log(greet1.toUpperCase()); // Output: HELLO
}
// eg. unknow
var name1 = "India is my country";
if (typeof name1 === "string") {
    console.log(name1.toUpperCase());
}
// 10) Never : Represents values that never occur, such as functions that always throw an error or never return.
function throwError1(message) {
    throw new Error(message);
}
// // Type Annotations in Functions
// function mul(a: number, b: number): number {
//     return a * b;
// }
// console.log(add(10, 5));
// eg. Type Annotations in Functions
function sub(a, b) {
    return a - b;
}
console.log(sub(100, 50));
// Template literal 
var nam = "John";
var ag = 30;
var messag = "My name is ".concat(nam, " and I am ").concat(ag, " years old.");
console.log(messag); // Output: My name is John and I am 30 years old.`
// spread operator
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
// let combinedArr: number[] = arr1.concat(arr2);
var combinedAr = __spreadArray(__spreadArray([], ar1, true), ar2, true);
console.log(combinedAr); // Output: [1, 2, 3, 4, 5, 6]
// eg. spread operator
var str = ['Pandurang'];
var str1 = ['Amol'];
var str3 = ['Rohan'];
var combine = __spreadArray(__spreadArray(__spreadArray([], str, true), str1, true), str3, true);
console.log(combine);
console.log("https://www.example.com" /* Login_URL.main */);
