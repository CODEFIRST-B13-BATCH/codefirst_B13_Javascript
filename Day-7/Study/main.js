//simple function

function methodCall() {
    const x=20;
    const y =60;
    console.log("Addition of 2 numbers:" , x + y);
}
methodCall();

//function with parameter
function add(a,b) {
    const result = a *b;
    console.log("multiplication of two numbers:",result);
    
    
}
add(39,39);

// function with default parameter
function divide(c,d=2){
 const result = c/d;
 console.log(" division of number:",result);
 
}
divide(4);

//function with return 
function sub(x,y){
    return x- y;

} 
const res = sub(8,3);
console.log(res);

//Arrow function

const res1 = (d,f)=>{
    console.log("I am Arroe function");
}

//annomnous function
()=>{
    console.log("Annomnous function");
    
}