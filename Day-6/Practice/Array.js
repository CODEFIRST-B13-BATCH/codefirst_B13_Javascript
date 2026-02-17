// // Array 
 const arr  = [1, 2, 3, 4, 5];

// // Array Methods
// // 1. push() 
// arr.push(10);
// console.log(arr); 

// // 2. pop() 
// arr.pop();
// console.log(arr); 

// // 3. unshift() 
// arr.unshift(0);
// console.log(arr); 

// // 4. shift()
// arr.shift();
// console.log(arr); // [1, 2, 3, 4, 5]

// // 5. indexOf() 
// console.log(arr.indexOf(3)); // 2

// // 6. splice() 
// arr.splice(2, 1);
// console.log(arr); 

// // 7.slice 
// const container = arr.slice(2, 4);
// console.log(container); 

// // 8.join() 

// const value = arr.join(" ");
// console.log(value); 

// const country = "India";
// const arr2 = country.split("");
// console.log(arr2); // ["I", "n", "d", "i", "a"]

// const arr3 = arr2.reverse();
// console.log(arr3); // ["a", "i", "d", "n", "I"]

// const value2 = arr3.join("");
// console.log(value2); 

// const result = country.split("").reverse().join("");
// console.log(result); 

// // 9. reverse 
// console.log(arr.reverse());

// 10.map() 
// const arr4 = arr.map((element) => element * 2);
// console.log(arr4); 

// example of map 
// const users = [
//     {name: "Avadhut", age: 30},
//     {name: "Raj", age: 25},
//     {name: "omkar", age: 35},
//     {name: "sanket", age: 25},
// ];

// const names = users.map((user) => user.name.toUpperCase());
// console.log(names); 

// // 11. filter() 
// const num100 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr5 = num100.filter((element) => element > 5);
// console.log(arr5);

// const filterUser = users.filter((user) => user.age < 30);
// console.log(filterUser); 

// // // 12. find() 
// const findUser = users.find((user) => user.age < 30);
// console.log(findUser);

// // 13. reduce() 
// const num = [1, 2, 3, 4, 5];
// const sum = num.reduce((acc, currentValue)=>{
//     return acc + currentValue;
// },0);
// console.log(sum); 