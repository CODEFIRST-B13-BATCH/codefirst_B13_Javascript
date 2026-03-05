// Template literal 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var fname = "John";
var age = 30;
var message = "My name is ".concat(fname, " and I am ").concat(age, " years old.");
console.log(message); // Output: My name is John and I am 30 years old.`
// spread operator
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
// let combinedArr: number[] = arr1.concat(arr2);
var combinedArr = __spreadArray(__spreadArray([], arr1, true), arr2, true);
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]
var Lname = "Doe";
console.log("Admin" /* UserRole.ADMIN */); // Output: 'Admin'
