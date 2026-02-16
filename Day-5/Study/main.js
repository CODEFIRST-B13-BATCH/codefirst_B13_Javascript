// Data Types : 
// 1. Primitive Data Types : 
    // Value directly stored in the variable
    // String, Number, Boolean, Null, Undefined

 // Non-Primitive Data Types :
    // Value stored as reference in the variable
    // Object, Array
// 

// Primitive Data Types :

let name = "John"; // String
let age = 30; // Number
let isStudent = true; // Boolean
let address = null; // Null

// console.log(typeof(address)); // object
let phoneNumber; // Undefined

// console.log(typeof(phoneNumber)); // undefined

// Non-Primitive Data Types :
 // object creation methods;

 // 1. Object literal
let person = { 
    name: "Alice",
    age: 25,
    isStudent: false
}; // Object
console.log(person);

// 2. using new keyword
let person1 = new Object();
person1.name = "Bob";
person1.age = 30;
person1.isStudent = true;

console.log(person1);

// 3. using Object.create() method
let person2 = Object.create({});
person2.name = "Charlie";
person2.age = 35;
person2.isStudent = false;
console.log(person2);

// 4. using object.assign() method
const name2 = "David";
const age2 = 40;
const isStudent2 = true;
let person3 = Object.assign({ name2, age2,isStudent2 });
console.log(person3);   

// array
let numbers = [1, 2, 3, 4, 5]; // Array
let fruits = ["Apple", "Banana", "Orange"]; // Array
let mixedArray = [1, "Hello", true, null, { name: "Bob" }, [1, 2, 3]]; // Array with mixed data types
let arrayOfObjects = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
]; // Array of objects


// questions for practice :
// 1. Create an object representing a car with properties like make, model, year, and color. Then, log the car's make and model to the console.
// 2. Create an array of your favorite movies and log the second movie in the array to the console.
// 3. Create an object representing a student with properties like name, age, and grade. Then, log the student's name and grade to the console.
// 4. Create an array of objects representing different books, with properties like title, author, and year published. Then, log the title of the first book in the array to the console.
// 5. Create an object representing a person with properties like name, age, and hobbies (which should be an array). Then, log the person's name and their first hobby to the console.
// 6. Create an array of numbers and calculate the sum of all the numbers in the array. Then, log the sum to the console.
// 7. Create an object representing a company with properties like name, industry, and employees (which should be an array of objects representing individual employees). Then, log the company's name and the name of the first employee to the console.
// 8. Create an array of objects representing different countries, with properties like name, population, and capital. Then, log the name of the country with the largest population to the console.
// 9. Create an object representing a recipe with properties like name, ingredients (which should be an array), and instructions. Then, log the recipe's name and the first ingredient to the console.
// 10. Create an array of objects representing different cars, with properties like make, model, year, and color. Then, log the make and model of the car that was manufactured in the year 2020 to the console.
 