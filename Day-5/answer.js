// 1. Create an object representing a car with properties like make, model, year, and color. Then, log the car's make and model to the console.

const car1 = {
    make: "TATA",
    model: "Seirra",
    year: 2026,
    color: "Glossy Yellow",
}
console.log(car1.make, car1.model);


const car = new Object();
car.make = "Land Rover";
car.model = "Jaguar";
car.year = 2020;
car.color = "Pear White";

console.log(car.make, car.model);



// 2. Create an array of your favorite movies and log the second movie in the array to the console.

const favMovie = [`Avenger`, `BangBang`, `Aarya`, `Transformer`, `Orange`]
console.log(favMovie[1]);



// 3. Create an object representing a student with properties like name, age, and grade. Then, log the student's name and grade to the console.

const student = {
    name: 'John',
    age: 14,
    grade: '8th',
}
console.log(student.name, student.grade);



// 4. Create an array of objects representing different books, with properties like title, author, and year published. Then, log the title of the first book in the array to the console.

const books =
    [{ title: "Ask me Everything", author: "Marks joe", year: 2025 },
    { title: "abc", author: "ak", year: 2026 },
    { title: "Ask me", author: "Mark", year: 2024 }];

    console.log(books[0].title)



// 5. Create an object representing a person with properties like name, age, and hobbies (which should be an array). Then, log the person's name and their first hobby to the console.

// object creat method
const person1 = Object.create({})
    person1.name1 = "Biresh"
    person1.age = 26
    person1.hobbies = ['swimming', "cycling", "cricket"]

console.log(person1.name1, person1.hobbies[1])

// object literal method
const person = {
  name: "Biresh",
  age: 26,
  hobbies: ["swimming", "cycling", "cricket"]
};

console.log(person.name, person.hobbies[0]);


// 6. Create an array of numbers and calculate the sum of all the numbers in the array. Then, log the sum to the console.

const num = [1,2,3,4,5,6,7,8,9,11];
const sum = num.reduce((total, num) => total + num, 0);

console.log(sum);