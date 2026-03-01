// console.log("hello")
// setTimeout((function(){
//     console.log("hello we are using async")
// }),1000)
// console.log("end")

// function greet(name1,callback)
// {
//     callback(name1)
// }
// function print(name2){
//     console.log(`hello ${name2}`)
// }

// greet("biresh",print)

// function greet(name1,callback)
// {
//     callback(name1)
// }
// greet("biresh",(name2)=>{
//     console.log(`hello ${name2}`)
// })

// function greet(nam,another){
//     another(nam);
// }
// greet("biresh",function(nam){
//     console.log(`hello ${nam}`)
// })


// call method for calculator*************************
// function calCulator(a,b,callback)
// {
//     callback(a,b)
// }
// function add(a,b)
// {
//     console.log(`the sum of two numbers is ${a+b}`)
// }
// function multiPly(a,b)
// {
//     console.log(`the multiplication of two numbers is ${a*b}`)
// }
// calCulator(10,20,add)
// calCulator(10,20,multiPly)

//using anonymous function************
// function calCulator(a,b,callback)
// {
//     callback(a,b)
// }
// calCulator(10,20,function(a,b)
// {
//     console.log(`thesum of two numbers is ${a+b}`)
// })
// calCulator(10,20,(a,b)=>{
//     console.log(`the multiplication of the two number id ${a*b}`)
// })


//fetch user data********************************
// function getUserData(callback){
//     setTimeout(()=>{
//         let userdata={
//             name:"biresh",
//             age:24,
//             callNu:9740027212,
//         };
//         // callback(userdata);
//     },2000)
//     callback(userdata);
// }
// function print(user)
// {
//     console.log(user)
// }
// getUserData(print)

//using anonmous function**********************************8
// function getUserData(callback)
// {
//     setTimeout((()=>{
//         let userData={
//             name1:"biresh",
//             age:25,
//         };
//         callback(userData)
//     }),2000)
// }
// getUserData(function(userData){
//     console.log(userData)
// })/

// function getUserData(callback)
// {
//     setTimeout((()=>{
//         let userData={
//             name1:"biresh",
//             age:25,
//         };
//         callback(userData)
//     }),2000)
// }
// getUserData((userData)=>{
//     console.log(userData)
// })



//*************************************************************** */
// function hello(a,b,callback)
// {
//     callback(a,b)
// }
// function devide(a,b)
// {
//     if(b===0)
//     {
//         console.log("error")
//     }
//     else{
//         console.log(`result = ${a/b}`)
//     }
// }
// hello(10,0,devide)


// function devide(a,b,callback)
// {
//     callback(a,b)
// }
// devide(10,2,(a,b)=>{
//     if(b===0)
//         console.log("error")
//     else
//         console.log(`the result is ${a/b}`)
// })

// function userData()
// {
//     let data=(fetch"https://myfakeapi.com/api/cars")
//     console.log(data)
// }

// userData()


// function step1(callback)
// {
//     setTimeout((function(){
//     console.log("printing step one")
//     callback();
// }),2000)
// }
// function step2(another)
// {
//     setTimeout((function(){
//         console.log("printing second step")
//         another()
//     }),2000)
// }
// function step3()
// {
//     setTimeout((function(){
//         console.log("printing third step")
//     }),2000)
// }
// step1(function(){
//     step2(function(){
//         step3()
//     })
// })

// let myPromise=new Promise((resolve,reject)=>{
//         let a=10;
// if((a%2)===0){
//     resolve("it is a even number");
// }
// else{
//     reject("it is not a even number");
// }
// });
// myPromise
// .then(result=>console.log(result))
// .catch(error=>console.log(error))

// let myPromise = new Promise((resolve, reject) => {
//     let a = 10;

//     if (a % 2 === 0) {
//         resolve("It is an even number");
//     } else {
//         reject("It is not an even number");
//     }
// });

// myPromise
//     .then(result => console.log(result))
//     .catch(error => console.log(error));


// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(error=>console.error("Error:",error));

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error("Error:", error));

// let myPromise=new Promise((pass,fail)=>{
//     let a=fetch("https://jsonplaceholder.typicode.com/users")
//     if(a==)
//     pass("you got the data")
//     fail("you didn't got data")
// })


// function validateLogin(userName,password){
//     return new Promise((resolve,reject)=>{
//         if((userName==="biresh")&&(password===1234)){
//             resolve("welcome to the codefirst")
//         }
//         else{
//             reject("enter valid username or password")
//         }
//     });
//     // .then(console.log)
//     // .catch(console.error)
// }

// validateLogin("biresh",1234) 
//     .then(console.log)
//     .catch(console.error)


// function loginValidation(userName,password,callback){
//     callback(userName,password)
// }
// // function callBack(a,b){
// //     if((a==="biresh")&&(b===1234)){
// //         console.log("you have enter valid credentials")
// //     }
// //     else{
// //         console.log("please enter valid credentials")
// //     }
// // }
// loginValidation("biresh",1234,(function(a,b){
//     if((a==="biresh")&&(b===1234)){
//         console.log("you have enter valid credentials")
//     }
//     else{
//         console.log("please enter valid credentials")
//     }
// }))




//using callback function********************************************
// function paymentValidation(amount=0){
//    setTimeout((()=>{
//         if(amount===0){
//             console.log("pament is not successfull")
//         }
//         else{
//             console.log("pament is successful")
//         }
//     }),2000)
// }
// paymentValidation()

//*************************************************************************************** */
// function paymentValidation(amount){
//      new Promise((resolve,reject)=>{
//         if(amount===0){
//             reject("payment failed")
//         }
//         else{
//             resolve("payment successfull")
//         }
//     })
//     .then(console.log)
//    .catch(console.error)
// }
// paymentValidation(100)
// // .then(console.log)
// // .catch(console.error)

//file uploding**************************************using promise and callback
// function upload(file,callback){
//     callback(file)
// }
// upload("file",function(file){
//     setTimeout((()=>{
//         console.log("file uploaded successfull")
//     }),2000)
// });

// function upload(file){
//     return new Promise((resolve,reject)=>{
//         setTimeout((()=>{
//             resolve("file uploaded")
//         }),2000)
//     })
// }
// upload("file")
// .then(console.log)
// .catch(console.error)
