// Array :  collection of similar data types

const arr  = [1, 2, 3, 4, 5];

// Array Methods
// 1. push() : add element at the end of the array
arr.push(10);
console.log(arr); // [1, 2, 3, 4, 5, 6]

// 2. pop() : remove element from the end of the array
arr.pop();
console.log(arr); // [1, 2, 3, 4, 5]

// 3. unshift() : add element at the beginning of the array
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3, 4, 5]

// 4. shift() : remove element from the beginning of the array
arr.shift();
console.log(arr); // [1, 2, 3, 4, 5]

// 5. indexOf() : return the index of the first occurrence of the element
console.log(arr.indexOf(3)); // 2

// 6. splice() : add/remove elements from the array
// start index, number of elements to remove, elements to add
arr.splice(2, 1);
console.log(arr); // [1, 2, 10, 20, 3, 4, 5]

// 7.slice : return a new array containing a portion of the original array
// start index, end index -1 (not included) 
const container = arr.slice(2, 4);
console.log(container); // [10, 20]

// 8.join() : return a string by concatenating all the elements of the array

const value = arr.join(" ");
console.log(value); // "1 2 10 20 3 4 5"

// // interview question : reverse a string using array methods
const country = "India";
const arr2 = country.split("");
console.log(arr2); // ["I", "n", "d", "i", "a"]

const arr3 = arr2.reverse();
console.log(arr3); // ["a", "i", "d", "n", "I"]

const value2 = arr3.join("");
console.log(value2); // "aidnI"

const result = country.split("").reverse().join("");
console.log(result); // "aidnI"

// 9. reverse : reverse an array without using reverse method
console.log(arr.reverse());

// 10.map() : return a new array by applying a function to each element of the array
const arr4 = arr.map((element) => element * 2);
console.log(arr4); // [10, 20, 6, 8, 2]

// example of map 
const users = [
    {name: "John", age: 30},
    {name: "Jane", age: 25},
    {name: "Doe", age: 35},
    {name: "Alex", age: 25},
];

const names = users.map((user) => user.name.toUpperCase());
console.log(names); // ["JOHN", "JANE", "DOE"]

// 11. filter() : return a new array containing only the elements that satisfy a condition
const num100 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr5 = num100.filter((element) => element > 5);
console.log(arr5); // [6, 7, 8, 9, 10]

const filterUser = users.filter((user) => user.age < 30);
console.log(filterUser); // [{name: "Jane", age: 25}]

// // 12. find() : return the first element that satisfies a condition
const findUser = users.find((user) => user.age < 30);
console.log(findUser); // {name: "Jane", age: 25}

// 13. reduce() : return a single value by applying a function to each element of the array
const num = [1, 2, 3, 4, 5];
const sum = num.reduce((acc, currentValue)=>{
    return acc + currentValue;
},0);
console.log(sum); // 15