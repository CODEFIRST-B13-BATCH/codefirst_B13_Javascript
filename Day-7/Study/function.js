// // 1. simple function : 
// function add() {
//     console.log(2 + 3);
// }
// add();

// // 2. function with parameters :
// function sub(a, b) {
//     console.log(a - b);
// }
// sub(10,8);

// // 3. function with return type :
// function mul(a, b) {
//     return a*b;
// }
// let result = mul(5, 6);
// console.log(result);

// // 4. function with default parameters :
// function div(a=5, b=2) {
//     return a/b;
// }
// const z = div(6);
// console.log(z);

// // 5. function with rest parameters :
// function sum(...numbers) {
//     let total = 0;
//     for (let num of numbers) {
//         total += num;
//     }
//     return total;
// }
// const totalSum = sum(1, 2, 3, 4, 5);
// console.log(totalSum);

// // 6. function expression :
// const greet = function(name) {
//     return `Hello, ${name}!`;
// }
// console.log(greet("Rahul"));

// // 7. arrow function :
// const square = (x) => x * x;
// console.log(square(4));

// // 8. IIFE (Immediately Invoked Function Expression) :
// (function() {
//     console.log("This is an IIFE!");
// })();

// setTimeout(function() {
//     console.log("This is an IIFE!");
// }, 100);

// // 9. callback function :
// function fetchData(callback) {
//     setTimeout(() => {
//         const data = { name: "Rahul", age: 30 };
//         callback(data);
//     }, 1000);
// }
// fetchData(function(data) {
//     console.log("Data received:", data);
// });

// 10. impure function :
// function population() {
//     return Math.random() * 1000; // returns a random population value each time
// }
// const y = population();
// console.log(y);

//********************************************************************************** */
// function add(a,b){
//     return a+b
// }
// let result=add(10,20)
// console.log(`the sum of two number is ${result}`)

//*************************************************************IIFE-immediately invoked function expression */
// (function(a,b){
//     console.log(`the result of addition is ${a+b}`)
// })(12,30);

// ((a,b)=>{
//     console.log(`the sum of two numbers is ${a*b}`)
// })(10,20)

//rest function******************************************************************
// function multiply(...val){
//     let res=1
//     for(let i of val){
//         res=res*i
//     } 
//     console.log(res)
// }
// multiply(1,2,3,4)
//----------------------------------------------------------------
// function cons(name1,age1){
//     this.name=name1,
//     this.age=age1,
// }

// function greet(a,b){
//     console.log(`hello my self ${a} and i am ${b} year old`)
// }
// cons("biresh",25)

//------------------------------------------------------------------------
// function person(age,name,){
//     this.name=name
//     this.age=age
//     this.greet=(function(){
//         console.log(`the name is ${this.name} and the age is ${age}`)
//     })
// }
// let person1=new person(25,"biresh")
// person1.greet()

// let person2=new person(6,"rugved")
// person2.greet()

//------------------object---------------------------
//01.object literal----------------------
// let obj={
//     name:"biresh",
//     age:25,
//     mobNo:9740027212,
// };
// console.log(obj.name)
// console.log(obj)


//---------------------new Object-----------
// let obj=new Object()
// obj.name="biresh"
// obj.age=25
// obj.mobNo=9740027212
// console.log(obj["name"])
// console.log(obj['name'])
// console.log(obj.age)
// console.log(obj)

//-----------------------object.assign------------------
// let name1="biresh"
// let age=25
// let mobNo=9740027212
// let person=Object.assign({name1,age,mobNo})
// console.log(person)
// console.log(person.age)

//------------------------------object create method---------------------
let person=Object.create({})
person.name="biresh"
person.age=25
person.mobNo=9740027212
console.log(person)
