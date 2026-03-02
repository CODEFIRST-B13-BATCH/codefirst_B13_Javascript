const arr=[10,20,30,40,50];
arr.push(70);//push method
console.log(arr);
arr.pop(0);//pop method
console.log(arr);
arr.unshift(70);//unshift method
console.log(arr);
arr.shift(2);//shift method 
console.log(arr);
arr.splice(1,2);//splice method
console.log(arr);
const value = arr.join(" ");//join method 
console.log(value);
console.log(arr.indexOf(5));//indexof method 
const container = arr.slice(2, 4);//slice method 
console.log(container); 
const country = "India";
const arr2 = country.split("");//split method
console.log(arr2);
const arr3 = arr2.reverse();//reverse method
console.log(arr3);
const value2 = arr3.join("");//join method
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
