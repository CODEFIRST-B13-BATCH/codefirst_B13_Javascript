// questions for practice :
// 1. Create an object representing a car with properties like make, model, year, and color. Then, log the car's make and model to the console.

let car = {
  make: "Toyato",
  model: " BMW",
  year: 2000,
  colour: "Red",
};
console.log(car.make);
console.log(car.model);

// 2. Create an array of your favorite movies and log the second movie in the array to the console.

let arr = ["Chhava", "Sairat", "Chintu", "1920 London"];
console.log(arr[1]);

// 3. Create an object representing a student with properties like name, age, and grade. Then, log the student's name and grade to the console.
let students = {
  name: "Sai",
  age: "10",
  grade: "A",
};
console.log(students.name);
console.log(students.grade);

// 4. Create an array of objects representing different books, with properties like title, author, and year published. Then, log the title of the first book in the array to the console.
let arr2 = [
  { title: "Shyamachi Aai", author: " V.S.Khandekar", "published year": 2000 },
  { title: "Amrutvel", author: " V.S.Khandekar", "published year": 2005 },
  { title: "Ekach Pyala", author: " V.P.Kale", "published year": 2008 },
];
console.log(arr2[0].title);

// 5. Create an object representing a person with properties like name, age, and hobbies (which should be an array). Then, log the person's name and their first hobby to the console.
let person = {
  name: "abc",
  age: 10,
  hobbies: ["Listening Music", "Drawing", "Swimming"],
};
console.log(person.name);
console.log(person.hobbies[0]);

// 6. Create an array of numbers and calculate the sum of all the numbers in the array. Then, log the sum to the console.
numbers = [1, 2, 3, 4, 5, 6];
const a = numbers.reduce((acc, currentvalue) => {
  return acc + currentvalue;
}, 0);
console.log(a);

// 7. Create an object representing a company with properties like name, industry, and employees (which should be an array of objects representing individual employees). Then, log the company's name and the name of the first employee to the console.
company = {
  name1: "TCS",
  industry: "IT",
  employees: ["abc", "qwe", "jkl", " uoi"],
};
console.log(company.name1);
console.log(company.employees[0]);

// 8. Create an array of objects representing different countries, with properties like name, population, and capital. Then, log the name of the country with the largest population to the console.

const countries = [
  { name: "India", population: 1400, capital: "New Delhi" },
  { name: "USA", population: 331000000, capital: "Washington D.C." },
  { name: "China", population: 1440000000, capital: "Beijing" },
];

const p = countries.reduce((max, current) => {
  return current.population > max.population ? current : max;
});
console.log(p.name);

// 9. Create an object representing a recipe with properties like name, ingredients (which should be an array), and instructions. Then, log the recipe's name and the first ingredient to the console.

recipe = {
  name: "Tea",
  ingredients: ["sugar", "Tea Powder", "Milk", "Water", "Ginger"],
  instruction:
    "Add  ingredients in water boil for 5 min thwn add millk after boiling filter it for drink",
};
console.log(recipe.name);
console.log(recipe.ingredients[0]);

// 10. Create an array of objects representing different cars, with properties like make, model, year, and color. Then, log the make and model of the car that was manufactured in the year 2020 to the console.
let car1 = [{
  make: "Toyato",
  model: " BMW",
  year: 2020,
  colour: "Red",
},
{
   make: "TATA",
  model: "Safari",
  year: 2000,
  colour: "Red", 
}];
 let result = car1.find(car => car.year === 2020);
 console.log(result.make ,result.mode);
 
