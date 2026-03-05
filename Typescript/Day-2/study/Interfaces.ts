/* Interfaces in TypeScript are like blueprints that define the structure of an
object.
*/

// 1. Simple Interface
interface User {
  name: string;
  age: number;
  isActive: boolean;
}

let user1: User = {
  name: "Sagar",
  age: 24,
  isActive: true,
};

console.log(user1); // Output: { name: "Sagar", age: 24, isActive: true }

// 2. Optional Properties of an Interface
interface User2 {
  name: string;
  age: number;
  isActive: boolean;
  email?: string; // Optional property
}

let user2: User2 = {
  name: "Amit",
  age: 25,
  isActive: false,
  // email is optional, so we can skip it
};

console.log(user2); // Output: { name: "Amit", age: 25, isActive: false }

// 3. Read-Only Properties
interface User3 {
  readonly id: number;
  name: string;
  age: number;
}

let user3: User3 = {
  id: 101,
  name: "Kiran",
  age: 26,
};
// user3.id = 102; // Error: Cannot assign to 'id' because it is a read-only property.

// 4. Extending Interfaces
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

let employee1: Employee = {
  name: "John",
  age: 30,
  employeeId: 1234,
};
console.log(employee1); // Output: { name: "John", age:30, employeeId: 1234 }

// 5. Interface for Functions
// interface Greet {
//   (name: string): string;
// }

// let sayHello: Greet = function (name: string) {
//   return `Hello, ${name}!`;
// };
// console.log(sayHello("Sagar")); // Output: "Hello, Sagar!"