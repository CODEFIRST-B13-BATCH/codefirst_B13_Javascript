/* A class in TypeScript is defined using the class keyword. You can include:
Properties: Variables tied to the class.
Methods: Functions tied to the class.
*/

class Person {
  name: string; // Property
  age: number;
  constructor(name: string, age: number) { // constructor : A special method to initialize the properties of the class.
    this.name = name; // Assigning values
    this.age = age;
  }
  greet(): void {
    // Method
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
const person1 = new Person("Alice", 25); // person1 : An object created from the Person class.
person1.greet();