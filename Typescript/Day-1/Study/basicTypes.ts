// 1) string

let fName:string = 'codefirst';
let intro:string = `My name is ${fName}`;
console.log(intro);

// 2) number 
let num:number = 100;
let numb:number = 3.14;

// 3) boolean
let bool:boolean = true;

// 4) null and undefined
let value : null = null;
let val: undefined = undefined;

// 5) Array
let arr:number[] = [1,5,7,8];
let arr2:string[] = ['test','test2'];
let arr3:boolean[] = [true,false,true];

// 6) Tuple
let tup:[string, number, boolean] = ['name',7440, true];

// 7) enum
enum Color {
    Red = 'red',
    Green = 'green',
    Yellow = 'yellow'
}

const wallcColor:Color = Color.Green;
console.log(wallcColor);

// 8) any : Allows a variable to hold any type. Use cautiously, as it disables type checking.
let text:any = 'Coefirst';
text = 100;
text = true; 

// 9) unknow : Similar to any , but safer as it requires type checking before usage.
let greet: unknown = "Hello";
// greet.toUpperCase(); // Error: Object is of type 'unknown'
if (typeof greet === "string") {
    console.log(greet.toUpperCase()); // Output: HELLO
}

// 10) Never : Represents values that never occur, such as functions that always throw an error or never return.
function throwError(message: string): never {
    throw new Error(message);
}

// Type Annotations in Functions
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 5));