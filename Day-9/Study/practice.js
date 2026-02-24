//functional scope
/*var i=10
function fun()
{
    var i=20
   console.log(i)
}
console.log(i)
console.log(fun())
*/

//local scope

/*
var i=20
var i
{
    var i=5
}
console.log(i)
*/

//***************************************************
//let keyword

/*
let  a=10 // global scope
a=50 //reinitialization 
{
   let a=20 //local scope
   console.log(a)
}
console.log(a)
*/

//*************************************************************
//hoistig - accessing before declaration
/*
console.log(i) //output -undefined
var i

let a
console.log(a) // undefined
*/

/*
const i=10
{
    const i=30
    console.log(i)
}
console.log(i)
*/


/*
let a='hello this is string literal'
let b ="thise is string literal"
var test=`this is the 
multiline string and also known
 as templete literal`
console.log(test)
console.log(typeof test)
console.log(a)
console.log(b)
*/


//let num1=67
//num1="ts"

//let abc="hello"  //it takes string(datatype of first element) as a datatype
//abc= 123




