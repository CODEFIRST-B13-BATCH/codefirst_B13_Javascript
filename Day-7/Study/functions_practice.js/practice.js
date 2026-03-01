//function declaration -- when a fuction has a name is known as function declaration

// function add(a,b)
// {
//     let sum=a+b
//     console.log(`the sum of two numbers is ${sum}`)
// }
// add(20,30)


// //functions which returns message and takes no parameters
// function sends()
// {
//     return "hello"
// }
// let message=sends()
// console.log(message)

// //--------function with default parameter------------
// function fixParameter(a,b=10)
// {
//     let sum=a+b
//     console.log(sum)
// }
// fixParameter(23)
// fixParameter(10,20)

// //function with rest of parameter
// function withRest(...val)
// {
//     let sum=0
//     for(let item of val)
//     {
//         sum =sum+item
//     }
//     console.log(sum)
// }
// withRest(1,2,3,4,5,6)


// //function expression----without function name
// function(){
//     console.log("hello")
// }


// //---------------------map method------------------------------
// const array =new Array(1,2,3,4,5,6,7)
// const arr2=array.map(x=>x*10)
// console.log(arr2)