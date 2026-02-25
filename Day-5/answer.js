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

const num = [1,2,3,4,5,6,7,8,9];
const sum = num.reduce((total, num) => total + num, 0);

console.log(sum);

// 7. Create an object representing a company with properties like name, industry, and employees (which should be an array of objects representing individual employees). Then, log the company's name and the name of the first employee to the console.

const company = {
    name: 'Tata',
    industry: 'IT',
    employees:[{id: 101010},{id:202020},{id:303030}]
    // [{id: 101010, post: 'junior'},{id:202020, post: 'junior'}, {id: 303030, post: 'senior'}]
}
console.log(`company name: ${company.name}, first employee: ${company.employees[0].id}`);



// 8. Create an array of objects representing different countries, with properties like name, population, and capital. Then, log the name of the country with the largest population to the console.

const country = [
    {name: 'India', population: '150cr', capital: 'Delhi'},
    {name: 'Israel', population: '5cr', capital: 'Jerusalem'},
    {name: 'Rasia', population: '50cr', capital: 'Moscow'},
]

// with for loop 
const populatedCountry = country[0];

for ( i=0; i<populatedCountry.length; i++) {
    if(country[i].population <= populatedCountry.population)
        {
            populatedCountry = country[i];
    }
}

console.log(`largest populated country is ${populatedCountry.name}.`);

// with reduce method
const populatedCountries = country.reduce((max, country) =>
  country.population < max.population ? country : max
);

console.log("country with largest population:", populatedCountries.name);


// 9. Create an object representing a recipe with properties like name, ingredients (which should be an array), and instructions. Then, log the recipe's name and the first ingredient to the console.

const recipe = {
    name: "Pulav",
    ingredient: ['Rice', 'Potato', 'Paneer', 'Greenchilli']
}

console.log(`It is a ${recipe.name} recipe & first ingredient is ${recipe.ingredient[0]}.` );


// 10. Create an array of objects representing different cars, with properties like make, model, year, and color. Then, log the make and model of the car that was manufactured in the year 2020 to the console.


const cars = [
    {make: "Tata", model: "Fortuner", year: 2021, color:"white"},
    {make: "Maruti", model: "Ciaz", year: 2020, color:"White"},
    {make: "Ford", model: "Polo", year: 2022, color:"Red"},
    {make: "Honda", model: "Amaze", year: 2020, color:"Black"},
    {make: "Hyundai", model: "i10", year: 2023, color:"Yellow"},
]

// find method --> return only one object
// const cars1 = cars.find(cars1 => cars1.year === 2020);
// if(cars1){
//     console.log(`manufactured in year 2020 cars is ${cars1.make} & model is ${cars1.model}.`);
// }

// filter method --> returns all the matching values
const cars2 = cars.filter(car2 => car2.year === 2020);
if(cars2){
    console.log(`manufactured in year 2020 cars is ${cars2.make} & model is ${cars2.model}.`);
}