let dataType:number=100
//dataType="hello"  //Error:type string is not assignable type to number
console.log(dataType)
console.log(typeof dataType)  //number

let daTa:string="hello world"
//daTa=100    //error
daTa="100" //string literal
daTa='100'  //string literal
daTa=`100`  //templete literal
daTa="biresh"
console.log(daTa)
console.log(typeof (['']))   //output----object
console.log(typeof '')       //output---string

//*********************boolean************************************* */
let bool:boolean=true
//bool=1            error - type number is cannot assign to boolean
//bool= "hello"            //error - type string is cannot assign to boolean
console.log(typeof(bool))
console.log(bool)

/*********************************any********************************* */
let vaRiable   //by default the data type will be any so you can assign an value to it
vaRiable=100
vaRiable="hello"
vaRiable=false
console.log(vaRiable)   //output--false

let a:any=20
a="100"
console.log(a)          //ouput--100 string
console.log(typeof a)   //output--any

/*************************arrays********************************** */
let arr3=new Array(1,2,3,4,5)
console.log(arr3)      //output--[1,2,3,4,5]
arr3[8]=100
console.log(arr3)     //output--[1,2,3,4,5,0,0,0,100]
console.log(typeof arr3)  // output--object 

/*************************************************************** */
let arr4:number[]=[1,2,3,4,5]
let arr5:string[]=["hello","hi","world"]
let arr6:boolean[]=[true,false]       // cannot assign 0 or 1 
//arr4=["hello"]  ----cannot assign tpr string to type number
console.log(arr4)       //output---[1,2,3,4,5]
console.log(arr5)       //output---["hello","hi","world"]
console.log(arr6)       //output---[true,false]

/**********************tuple *********************************************** */
arr4=[1,2,3,4,5]
let arr7=[6,7,8,9,10]
let tup:[number,string,boolean]=[1,"hello",true]   // only one value for each datatype
console.log(tup)      //output---[1,"hello",false]

/*********************spread operator****************************************** */
let combinedArray=[...arr4,...arr7]
console.log(combinedArray)    //output-----[1,2,3,4,5,6,7,8,9,10]

/**************************enum type************************************* */
enum directions{
    north,   //by default the value get initialized to 0 and then the next alue get assigned to 1
    south,
    east,
    west,
}
console.log(directions.north)     //output---0
console.log(directions.south)     //output---1
console.log(directions.east)     //output---2
console.log(directions.west)     //output---3

// if we intialize the values
enum direction{
    north=1,   //by default the value get initialized to 0 and then the next alue get assigned to 1
    south, //2
    east,  //3
    west,  // 4 these values automatically get assigned
}
console.log(direction.south)

/************************heterogeneous string**************************** */
enum hetero{
    num=1,
    str="hello",
}

