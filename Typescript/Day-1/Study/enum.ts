/* Enums are a special feature in TypeScript that allow you to define a set of
named constants. They make code more readable and maintainable by
grouping related values together.

Use Cases of Enums
Readable Constants: Replace magic numbers or strings with meaningful names.
Grouping Values: Group related constants like roles, directions, or states.
Type Safety: Prevent invalid values from being assigned. 

*/

// Types of Enums in TypeScript

// 1. Numeric Enums
enum Status {
  Pending, // 0
  InProgress, // 1
  Completed, // 2
}
console.log(Status.Pending); // Output: 0
console.log(Status.InProgress); // Output: 1
console.log(Status.Completed); // Output: 2

// 2. Custom Numeric Enums
enum ResponseCode {
  Success = 200,
  BadRequest = 400,
  NotFound = 404,
}
console.log(ResponseCode.Success); // Output: 200
console.log(ResponseCode.BadRequest); // Output: 400
console.log(ResponseCode.NotFound); // Output: 404

// 3. String Enums
// Enums can also store strings, which are often more descriptive.

enum Direction {
  North = "NORTH",
  South = "SOUTH",
  East = "EAST",
  West = "WEST",
}
console.log(Direction.North); // Output: "NORTH"
console.log(Direction.West); // Output: "WEST"


// 4. Heterogeneous Enums
enum Mixed {
  Yes = 1,  
  No = "NO",
}

console.log(Mixed.Yes); // Output: 1
console.log(Mixed.No); // Output: "NO"  