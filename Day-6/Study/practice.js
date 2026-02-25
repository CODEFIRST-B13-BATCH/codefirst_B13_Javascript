// array methods

const arr = [10, 20, 5, 30, 200, 25.5, 3, 300];

// 1. Push()
arr.push(35.5);
console.log(arr);

// 2.  Popc
arr.pop();
console.log(arr);
// arr.pop();
// console.log(arr);

// 3. unshift()
arr.unshift(0.5);
console.log(arr);

// 4. shift()
arr.shift();
console.log(arr);

// 5. IndexOf()
console.log(arr.indexOf(20));

// 6. Splice()
// arr.splice(3, 2);
arr.splice(4, 1, 40, 60, 75)
console.log(arr);

// 7. Slice()
// const newArr = arr.slice(3);
const newArr = arr.slice(5, 8);
console.log(newArr);

// 8. join()
const data = arr.join();
console.log(data);

// 9. Reverse()
console.log(arr.reverse());

// 10. split()
console.log(data.split());

const splt = data.split("");
console.log(splt);
console.log(splt.reverse());

const splt1 = data.split("").reverse().join("");
console.log(splt1);

