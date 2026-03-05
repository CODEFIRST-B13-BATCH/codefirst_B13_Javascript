/* A class in TypeScript is defined using the class keyword. You can include:
Properties: Variables tied to the class.
Methods: Functions tied to the class.
*/
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name; // Assigning values
        this.age = age;
    }
    Person.prototype.greet = function () {
        // Method
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
var result = new Person("Alice", 25); // person1 : An object created from the Person class.
result.greet();
