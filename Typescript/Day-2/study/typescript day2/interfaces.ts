/* Interfaces in TypeScript are like blueprints that define the structure of an
object.
*/
// simple interface
interface USERINFO{
    name:string;
    age:number;
    address: string;
}

const details1 : USERINFO = {
    name:"Ram",
    age:20,
    address:"Pune"
}
console.log(details1);

// // extend interface

// interface EMPLOYEE extends USERINFO{
//     id:number,
//     designation: string
// }
//  const employeeDetails: EMPLOYEE ={
//     name:"Pandu",
//     age: 23,
//     address: "Sangola",
//     id:50,
//     designation:"Software Enginner"
// };

// readonly interface example
interface READONLY {
    readonly id: number;
    name: string;
}

const information1: READONLY = {
    id: 1,
    name: "Jane Doe"
};
console.log(information1)

// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.


// 2. Optional Properties of an Interface
interface INFO {
  name: string;
  age: number;
  isActive: boolean;
  email?: string; // Optional property
}

let user0: INFO = {
  name: "Amit",
  age: 25,
  isActive: false,
  // email is optional, so we can skip it
};

console.log(user0); // Output: { name: "Amit", age: 25, isActive: false }

// 5. Interface for Functions
// interface Greet {
//   (name: string): string;
// }

// let sayHello: Greet = function (name: string) {
//   return `Hello, ${name}!`;
// };
// console.log(sayHello("Sagar")); // Output: "Hello, Sagar!"