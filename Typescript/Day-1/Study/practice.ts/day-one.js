var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var dataType = 100;
//dataType="hello"  //Error:type string is not assignable type to number
console.log(dataType);
console.log(typeof dataType); //number
var daTa = "hello world";
//daTa=100    //error
daTa = "100"; //string literal
daTa = '100'; //string literal
daTa = "100"; //templete literal
daTa = "biresh";
console.log(daTa);
console.log(typeof ([''])); //output----object
console.log(typeof ''); //output---string
//*********************boolean************************************* */
var bool = true;
//bool=1            error - type number is cannot assign to boolean
//bool= "hello"            //error - type string is cannot assign to boolean
console.log(typeof (bool));
console.log(bool);
/*********************************any********************************* */
var vaRiable; //by default the data type will be any so you can assign an value to it
vaRiable = 100;
vaRiable = "hello";
vaRiable = false;
console.log(vaRiable); //output--false
var a = 20;
a = "100";
console.log(a); //ouput--100 string
console.log(typeof a); //output--any
/*************************arrays********************************** */
var arr3 = new Array(1, 2, 3, 4, 5);
console.log(arr3); //output--[1,2,3,4,5]
arr3[8] = 100;
console.log(arr3); //output--[1,2,3,4,5,0,0,0,100]
console.log(typeof arr3); // output--object 
/*************************************************************** */
var arr4 = [1, 2, 3, 4, 5];
var arr5 = ["hello", "hi", "world"];
var arr6 = [true, false]; // cannot assign 0 or 1 
//arr4=["hello"]  ----cannot assign tpr string to type number
console.log(arr4); //output---[1,2,3,4,5]
console.log(arr5); //output---["hello","hi","world"]
console.log(arr6); //output---[true,false]
/**********************tuple *********************************************** */
arr4 = [1, 2, 3, 4, 5];
var arr7 = [6, 7, 8, 9, 10];
var tup = [1, "hello", true]; // only one value for each datatype
console.log(tup); //output---[1,"hello",false]
/*********************spread operator****************************************** */
var combinedArray = __spreadArray(__spreadArray([], arr4, true), arr7, true);
console.log(combinedArray); //output-----[1,2,3,4,5,6,7,8,9,10]
/**************************enum type************************************* */
var directions;
(function (directions) {
    directions[directions["north"] = 0] = "north";
    directions[directions["south"] = 1] = "south";
    directions[directions["east"] = 2] = "east";
    directions[directions["west"] = 3] = "west";
})(directions || (directions = {}));
console.log(directions.north); //output---0
console.log(directions.south); //output---1
console.log(directions.east); //output---2
console.log(directions.west); //output---3
// if we intialize the values
var direction;
(function (direction) {
    direction[direction["north"] = 1] = "north";
    direction[direction["south"] = 2] = "south";
    direction[direction["east"] = 3] = "east";
    direction[direction["west"] = 4] = "west";
})(direction || (direction = {}));
console.log(direction.south);
/************************heterogeneous string**************************** */
var hetero;
(function (hetero) {
    hetero[hetero["num"] = 1] = "num";
    hetero["str"] = "hello";
})(hetero || (hetero = {}));
