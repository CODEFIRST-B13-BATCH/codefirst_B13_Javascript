// Template literal 

let fname: string = "John";
let age: number = 30;
let message: string = `My name is ${fname} and I am ${age} years old.`;  
console.log(message); // Output: My name is John and I am 30 years old.`

// spread operator
let arr1: number[] = [1, 2, 3];
let arr2: number[] = [4, 5, 6];
// let combinedArr: number[] = arr1.concat(arr2);
let combinedArr: number[] = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]

const Lname: any = "Doe";

const enum UserRole {
    ADMIN = 'Admin',
    USER = 'User',
    GUEST = 'Guest' 
}

const enum Login_URL {
    MAIN = "https://www.example.com"
}

console.log(UserRole.ADMIN); // Output: 'Admin'

const url: string = Login_URL.MAIN;

const role: string = '';
if (role === UserRole.ADMIN) {
    console.log("You have admin access.");
}

