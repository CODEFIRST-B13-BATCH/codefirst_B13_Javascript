// string 
let Name: string = 'Pandurang Kale';
let Address: string = 'Sangola';
let Age: number = 23;
let Intro: string = `My name is ${Name} I am from ${Address} I am ${Age} years old`; 
console.log(Intro);

// Numbers
let Num: number = 100;
let Num1: number = 20.5;

// boolean
let bol:boolean = true;

// null and undefined
let Value:null = null;
let Val:undefined = undefined;

// Array
let Arr1:number[] = [1,2,3,4,5,6,7];
let Arr2:string[] = ['pandu','amol','rohit'];
let Arr3:boolean[] = [true,false,true,false]; 

// eg. array
let a:number[] = [10,20,30,40,50];
console.log(a);

// Tuple
let tuple:[string,number,boolean] = ['Pandurang',200,true];
console.log(tuple);

// eg. tuple
let tuple1 = ['Rohan',100,true,'Rohit',100,'Amol'];
console.log(tuple1);

// enum
enum student{
   name = "Pandu",
   age = 23,
   address = "Sangola",
   education = "BCA"
}
const information:student = student.education;
console.log(information);

// eg. enum
enum marks{
    math = 45,
    bio = 30,
    eng = 48,
    mara = 50
}
const Result:marks = marks.bio;
console.log(Result);

//  any : Allows a variable to hold any type. Use cautiously, as it disables type checking.
let text1: any = 'Pune';
text1 = 40;
text1 = 20;
console.log(text1);

// 9) unknow : Similar to any , but safer as it requires type checking before usage.
let greet1: unknown = "Pandu";
// greet.toUpperCase(); // Error: Object is of type 'unknown'
if (typeof greet1 === "string") {
    console.log(greet1.toUpperCase()); // Output: HELLO
}

// eg. unknow
let name1:unknown = "India is my country";
if(typeof name1 === "string"){
    console.log(name1.toUpperCase());
}

// 10) Never : Represents values that never occur, such as functions that always throw an error or never return.
function throwError1(message: string): never {
    throw new Error(message);
}

// // Type Annotations in Functions
// function mul(a: number, b: number): number {
//     return a * b;
// }
// console.log(add(10, 5));

// eg. Type Annotations in Functions
function sub(a:number,b:number): number{
    return a-b ;
}
console.log(sub(100,50));

// Template literal 

let nam: string = "John";
let ag: number = 30;
let messag: string = `My name is ${nam} and I am ${ag} years old.`;  
console.log(messag); // Output: My name is John and I am 30 years old.`

// spread operator
let ar1: number[] = [1, 2, 3];
let ar2: number[] = [4, 5, 6];
// let combinedArr: number[] = arr1.concat(arr2);
let combinedAr: number[] = [...ar1, ...ar2];
console.log(combinedAr); // Output: [1, 2, 3, 4, 5, 6]

// eg. spread operator
let str: string[] = ['Pandurang'];
let str1: string[] = ['Amol'];
let str3: string[] = ['Rohan'];

let combine:string[] = [...str, ...str1, ...str3]
console.log(combine);

// enum
const enum Login_URL {
    main = "https://www.example.com"
}
console.log(Login_URL.main);
