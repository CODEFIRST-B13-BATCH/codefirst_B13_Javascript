// day-6 array practice 

const arr = [5, 6, 7, 8, 9, 10];

// push...

arr.push(11);
console.log(arr);
// ------------------------------------->

// pop...

arr.pop();
console.log(arr);
// ------------------------------------->

// unshift...

arr.unshift(4);
console.log(arr);
// ------------------------------------->

// shift...

arr.shift();
console.log(arr);
// ------------------------------------->

// slice...

const data = arr .slice (2, 3);
console.log(data);
// ------------------------------------->

// splice...

arr.splice(2, 4);
console.log(arr);
// ------------------------------------->

// indexof...

console.log(arr.indexOf(6));

// if not found value is -1
console.log(arr.indexOf(25));   
// ------------------------------------->

// join ().....

const value = arr.join("-");
console.log(value);

// imp example.....

const state = "maharastra";
const arr2 = state.split("");
console.log(arr2)

const arr3 = arr2.reverse();
console.log(arr3);

const value2 = arr3.join("-");
console.log(value2);

const result = state.split("").reverse().join(" ");
console.log(result);

// reverse....

console.log(arr.reverse());

// map method....

const arr4 = arr.map((element) => element * 2);
console.log(arr4);

// imp example of map 

const users = [
    {name: "om", year: 2003},
    {name: "shreyash", year: 2001},
    {name: "mynk", year: 2003},
    {name: "prajyot", year: 2002},
];

const names = users.map((user) => user.name.toUpperCase());
console.log(names);

// filter method.....

const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr5 = num1.filter((element) => element > 7);
console.log(arr5);

const filterUser = users.filter((user) => user.year < 2003);
console.log(filterUser);
// ------------------------------------------------------------->


// find method .....

const findUser = users.find((user) => user.year < 2003);
console.log(findUser);
// -------------------------------------------------------------->

// reduce method....

