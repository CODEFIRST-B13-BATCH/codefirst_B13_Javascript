// Array :  collection of similar data types

const arr = [1,2,3,4,5,6];

// Array Methods
// 1. push() : add element at the end of the array
arr.push(7);
console.log(arr);

// 2. pop() : remove element from the end of the array
arr.pop();
console.log(arr);

// 3. unshift() : add element at the beginning of the array
arr.unshift(0);
console.log(arr);

// 4. shift() : remove element from the beginning of the array
arr.shift(0);
console.log(arr);

// 5. indexOf() : return the index of the first occurrence of the element
console.log(arr.indexOf(4));

// 6. splice() : add/remove elements from the array
// start index, number of elements to remove, elements to add
arr.splice(2, 1);
console.log(arr); 

// 7.slice : return a new array containing a portion of the original array
// start index, end index -1 (not included) 
const container = arr.slice(1, 3);
console.log(container); 

// 8.join() : return a string by concatenating all the elements of the array

const value = arr.join(" ");
console.log(value);

// // interview question : reverse a string using array methods
const country = "Pandurang";
// split method first
const arr2 = country.split("");
console.log(arr2);
// reverse method second
const arr3 = arr2.reverse();
console.log(arr3);
// join method third step
const arr4 = arr3.join("");
console.log(arr4);
// then split all step 

// simple method to solve reverse a string using array methods
const country1 = "India"
const result = country1.split("").reverse().join("");
console.log(result);

// 9. reverse : reverse an array without using reverse method
console.log(arr.reverse());

// 10.map() : return a new array by applying a function to each element of the array
const arr1 = arr.map((element) => element * 2);
console.log(arr1);

// example of map 
const users = [
    {name: "Pandu", age: 30},
    {name: "Amol", age: 32},
    {name: "Rohit", age: 20},
    {name: "Rahul", age: 19},
];

const names = users.map((user) => user.name.toUpperCase());
console.log(names); // ["JOHN", "JANE", "DOE"]

// 11. filter() : return a new array containing only the elements that satisfy a condition
const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr5 = num1.filter((element) => element > 5);
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