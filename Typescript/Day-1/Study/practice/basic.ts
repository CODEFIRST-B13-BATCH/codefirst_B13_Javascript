let Name:string = 'Amol';
let full:string = `My name is ${Name}`;
console.log(full);


let a:number=100;
let b:number=32.32;
console.log(a);


let bool1:boolean=true;
console.log(bool1);


let vall:null=null;
let un:undefined=undefined;
console.log(vall);

let array:number[]=[1,2,3,4,5,6,7,8,9];
let array1:string[]=["amol","pandu","omkar"];
let boolean:boolean[]=[true,false];

console.log(array1);
console.log(array);


let tuple:[number,string,boolean]=[123,"amol",true];
console.log(tuple);


enum System{
  Laptop = 'laptop',
  Pc ='pc',
  Mouse = 'mouse'
}
const walSystem: System= System.Pc;
console.log(walSystem);


// let age: any ="amol";
// age = 30;
// age = true;

// console.log(age);



let age:any = 'amol';
age = 100;
 age= true; 

 console.log(age);


 let gret: unknown = "amol";
if (typeof gret === "string") {
    console.log(gret.toUpperCase()); 
}



function throError(message: string): never {
    throw new Error(message);
}

// Type Annotations in Functions
function addd(a: number, b: number): number {
    return a + b;
}
console.log(addd(54, 45));