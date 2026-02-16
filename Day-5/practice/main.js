// create object 

let person = {
    name : "sanket" ,
    age : 20 ,
     student : " yes"
}
// console.log(person);

// create object using new key word
let person2 = new Object();
person2.name= 'sanket',
person2.age= 20,
person2.student = true;

// console.log(person2);
// console.log(person2.age);

//create object using creat boject

let person3 = Object.create({});
person3.name='sanket',
person3.age=20;
person3.student=true;

// console.log(person3);

//create object using assing keyword
let name = 'sanket';
let age = 22;
let student = true;
let person4 = Object.assign({name,age,student});

// console.log(person4);

// String methods

// let str = "  Sanket Yewale  ";
// let str2 = "Satarkar";

// // 1.Lenth()
// console.log(str.length);
// // 2.uppercase()
// console.log(str.toUpperCase());
// // 3.lowercase()
// console.log(str.toLowerCase());
// // 4.split()
// console.log(str.split(" "));
// // 5.indexof()
// console.log(str.indexOf("Ye"));
// // 6.slice()
// console.log(str.slice(0,10));
// // 7.replace
// console.log(str.replace("Sanket Yewale","Avdhut Patil"));
// // 8.trim()
// console.log(str.trim());
// // 9.include()
// console.log(str.includes("Sanke1"));
// // 10.serch()
// console.log(str.search("ew"));
// // 11.charAt()
// console.log(str.charAt(5));
// // 12.concate()
// console.log(str.concat(" ",str2));

// questions for practice :
// 1. Create a string variable and use the length property to find out how many characters it contains.

//  let str =  " my favrate place is pune";
//  let str1 = " and satara. "

// // console.log(str.length);

// // 2. Create a string variable and convert it to uppercase using the toUpperCase() method.
//  console.log(str.toUpperCase());
// // 3. Create a string variable and convert it to lowercase using the toLowerCase() method.
//  console.log(str.toLowerCase());
// // 4. Create a string variable and use the indexOf() method to find the position of a specific word in the string.
//  console.log(str.indexOf(" place"));
// // 5. Create a string variable and use the includes() method to check if a specific word is present in the string.
//  console.log(str.includes("place"));
// //6. Create a string variable and use the slice() method to extract a portion of the string.
// console.log(str.slice(5,10));
// // 7. Create a string variable and use the split() method to split the string into an array of words.
// console.log(str.split(" "));
// // 8. Create a string variable and use the replace() method to replace a specific word with another word.
// console.log(str.replace("place","destination"));
// // 9. Create a string variable with leading and trailing whitespace and use the trim() method to remove the whitespace.
// console.log(str.trim());
// // 10. Create a string variable and use the charAt() method to find the character at a specific index.
// console.log(str.charAt("pla"));
// // 11. Create a string variable and use the search() method to find the position of a specific word in the string.
// console.log(str.search("pune"));
// // 12. Create two string variables and use the concat() method to combine them into a single string.
// console.log(str.concat(" ",str1));



// questions for practice :
// 1. Create an object representing a car with properties like make, model, year, and color. Then, log the car's make and model to the console.

let car = new Object();
car.make = "TATA";
car.model= "safari";
car.year=2024;
car.color="white";

// console.log(car.make);
// console.log(car.model);

// 2. Create an array of your favorite movies and log the second movie in the array to the console.

let movies=["Tere nam","ishq","kantara","shole"];
// console.log(movies.indexOf(0));



// 3. Create an object representing a student with properties like name, age, and grade. Then, log the student's name and grade to the console.

let Student = new Object();
Student.name = "sanket";
Student.age=23;
Student.grade="A++";
// console.log(Student.name);
// console.log(Student.grade);

// 4. Create an array of objects representing different books, with properties like title, author, and year published. Then, log the title of the first book in the array to the console.

const books = [
  {
    title: "Mrityunjay",
    author: "Shivaji Sawant",
    yearPublished: 1967
  },
  {
    title: "Yayati",
    author: "V. S. Khandekar",
    yearPublished: 1959
  },
  {
    title: "Batatyachi Chaal",
    author: "P. L. Deshpande",
    yearPublished: 1958
  }
];


console.log(books[2].title);


// 5. Create an object representing a person with properties like name, age, and hobbies (which should be an array). Then, log the person's name and their first hobby to the console.
// 6. Create an array of numbers and calculate the sum of all the numbers in the array. Then, log the sum to the console.
// 7. Create an object representing a company with properties like name, industry, and employees (which should be an array of objects representing individual employees). Then, log the company's name and the name of the first employee to the console.
// 8. Create an array of objects representing different countries, with properties like name, population, and capital. Then, log the name of the country with the largest population to the console.
// 9. Create an object representing a recipe with properties like name, ingredients (which should be an array), and instructions. Then, log the recipe's name and the first ingredient to the console.
// 10. Create an array of objects representing different cars, with properties like make, model, year, and color. Then, log the make and model of the car that was manufactured in the year 2020 to the console.